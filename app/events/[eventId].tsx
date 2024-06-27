import { useQuery } from "@tanstack/react-query";
import { Link, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import { fetchEvent } from "@/api/events";
import { Text } from "@/components";
import { ExternalLink } from "@/components/ExternalLink";
import { Event } from "@/components/event";
import { ChevronRightIcon } from "@/components/icons";
import { Loading } from "@/components/loading";
import { SubgroupBadge } from "@/components/subgroup-badge";
import { labelToCategory } from "@/libs/zwiftpower";
import { cn } from "@/styles";
import { EventSubgroup, Event as EventType } from "@/types/zwift.type";

export default function EventScreen() {
  const { eventId } = useLocalSearchParams();

  const query = useQuery({
    queryKey: ["event", eventId],
    queryFn: fetchEvent,
    gcTime: 1000 * 60,
  });

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);

    query.refetch().finally(() => {
      setIsRefreshing(false);
    });
  }, [query]);

  return (
    <>
      {query.isLoading && !isRefreshing && (
        <SafeAreaView className="flex-1 items-center justify-center">
          <Loading />
        </SafeAreaView>
      )}

      {query.isError && (
        <SafeAreaView className="flex-1 items-center justify-center">
          <Text>Error: {JSON.stringify(query.error)}</Text>
        </SafeAreaView>
      )}

      {query.isSuccess && (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          refreshControl={
            <RefreshControl
              className="color-default"
              refreshing={isRefreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <View
              className={cn("opacity-100 transition duration-500", {
                "opacity-50": isRefreshing,
              })}
            >
              {query.data.imageUrl && (
                <Image
                  source={{ uri: query.data.imageUrl }}
                  width={Dimensions.get("window").width}
                  height={Dimensions.get("window").width / (100 / 35)}
                  resizeMode="contain"
                />
              )}

              <ExternalLink
                href={`https://zwiftpower.com/events.php?zid=${query.data.id}`}
                asChild
              >
                <Event
                  className="py-4"
                  eventWithRoute={query.data}
                  showSubgroups={false}
                  showFullEventName={true}
                />
              </ExternalLink>

              <SubgroupList event={query.data} />
            </View>
          </Animated.View>
        </ScrollView>
      )}
    </>
  );
}

const SubgroupList = ({ event }: { event: EventType }) => (
  <View className="flex flex-col">
    {event.eventSubgroups.map((subgroup, i) => (
      <Link
        key={subgroup.id}
        href={`/events/${event.id}/subgroups/${subgroup.id}`}
      >
        <Subgroup
          subgroup={subgroup}
          className={cn({ "bg-default-200 dark:bg-default-100": isEven(i) })}
        />
      </Link>
    ))}
  </View>
);

const Subgroup = ({
  subgroup,
  className,
  isPressable = true,
}: {
  subgroup: EventSubgroup;
  className?: string;
  isPressable?: boolean;
}) => {
  const category = labelToCategory(subgroup.label);

  return (
    <Pressable
      className={cn(
        "flex w-full flex-row gap-2 bg-background py-4 pl-4 pr-0.5 transition",
        { "active:scale-[.98] active:opacity-95": isPressable },
        className,
      )}
    >
      <View className="flex flex-grow flex-row gap-2">
        <SubgroupBadge
          className="text-small min-h-6 min-w-6"
          category={category}
          text={category}
        />
        <Text>{subgroup.totalSignedUpCount}</Text>
      </View>

      <View className="flex justify-center">
        <ChevronRightIcon className="text-lg color-primary" />
      </View>
    </Pressable>
  );
};

const isEven = (num: number) => num % 2 === 0;
