import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { RefreshControl, SafeAreaView, ScrollView, View } from "react-native";

import { fetchEventSubgroup } from "@/api/events";
import { Text } from "@/components";
import { FadeInView } from "@/components/fade-in-view";
import { LoadingIndicator } from "@/components/loading-indicator";
import { cn } from "@/styles";

const REFETCH_INTERVAL_THRESHOLD = 1000 * 60;

export default function SubgroupScreen() {
  const { eventId, subgroupId } = useLocalSearchParams();

  const [refetchInterval, setRefetchInterval] = useState<number>(1000);
  const refetchIntervalRef = useRef(refetchInterval);

  const query = useQuery({
    queryKey: ["eventSubgroup", eventId, subgroupId],
    queryFn: fetchEventSubgroup,
    refetchInterval:
      refetchInterval > REFETCH_INTERVAL_THRESHOLD ? false : refetchInterval,
  });

  useEffect(() => {
    if (query.data && refetchIntervalRef.current < REFETCH_INTERVAL_THRESHOLD) {
      setRefetchInterval((prevInterval) => prevInterval * 2);
    }
  }, [query.data]);

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
              className={cn(
                "flex-1 flex-col gap-2 opacity-100 transition duration-500",
                {
                  "opacity-50": isRefreshing,
                },
              )}
            >
              <Text>Event: {eventId}</Text>
              <Text>Subgroup: {subgroupId}</Text>
              <Text>Name: {query.data.subgroup.name}</Text>
              <Text>
                Participants: {query.data.subgroup.totalSignedUpCount}
              </Text>
              <View>
                {query.data.users.map((user, i) => (
                  <Text key={user.zwift_id}>
                    {i + 1}. {user.country_alpha3} -{" "}
                    {user.name
                      ? user.name
                      : user.first_name + " " + user.last_name}
                  </Text>
                ))}
              </View>
            </View>
          </FadeInView>
        </ScrollView>
      )}
    </>
  );
}
