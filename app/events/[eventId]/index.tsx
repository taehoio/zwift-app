import { useQuery } from "@tanstack/react-query";
import { Link, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  Dimensions,
  Image,
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
import { LoadingIndicator } from "@/components/loading-indicator";
import { Subgroup } from "@/components/subgroup";
import { cn } from "@/styles";
import { Event as EventType } from "@/types/zwift.type";

export default function EventScreen() {
  const { eventId } = useLocalSearchParams();

  const query = useQuery({
    queryKey: ["event", eventId],
    queryFn: fetchEvent,
    refetchInterval: 1000 * 60,
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

const isEven = (num: number) => num % 2 === 0;
