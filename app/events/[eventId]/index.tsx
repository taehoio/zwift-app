import { useQuery } from "@tanstack/react-query";
import { Link, useLocalSearchParams } from "expo-router";
import { forwardRef, useCallback, useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";

import { fetchEvent } from "@/api/events";
import { Text } from "@/components";
import { Event } from "@/components/event";
import { ExternalLink } from "@/components/external-link";
import { FadeInView } from "@/components/fade-in-view";
import { ChevronRightIcon } from "@/components/icons";
import { LoadingIndicator } from "@/components/loading-indicator";
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
          <LoadingIndicator />
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
          <FadeInView>
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
          </FadeInView>
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
        asChild
      >
        <Subgroup
          className={cn({ "bg-default-200 dark:bg-default-100": isEven(i) })}
          subgroup={subgroup}
        />
      </Link>
    ))}
  </View>
);

const Subgroup = forwardRef<View, any>(function Subgroup(
  {
    subgroup,
    className,
    isPressable = true,
    ...props
  }: {
    subgroup: EventSubgroup;
    className?: string;
    isPressable?: boolean;
  },
  ref,
) {
  const category = labelToCategory(subgroup.label);

  return (
    <Pressable
      ref={ref}
      className={cn(
        "flex w-full flex-row gap-2 bg-background py-4 pl-4 pr-2 transition",
        { "active:scale-[.98] active:opacity-95": isPressable },
        className,
      )}
      {...props}
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
});

const isEven = (num: number) => num % 2 === 0;
