import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { RefreshControl, SafeAreaView, ScrollView } from "react-native";

import { fetchEvents } from "@/api/events";
import { Text } from "@/components";
import { EventList } from "@/components/event-list";
import { FadeInView } from "@/components/fade-in-view";
import { LoadingIndicator } from "@/components/loading-indicator";
import { cn } from "@/styles";

export default function HomeScreen() {
  const query = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
    refetchInterval: 1000 * 60 * 10,
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
          testID="ScrollView"
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
            <EventList
              className={cn("opacity-100 transition duration-500", {
                "opacity-50": isRefreshing,
              })}
              eventsWithRoute={query.data}
            />
          </FadeInView>
        </ScrollView>
      )}
    </>
  );
}
