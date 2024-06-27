import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { RefreshControl, SafeAreaView, ScrollView } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import { getEvents } from "@/api/events";
import { EventList } from "@/components/event-list";
import { Text } from "@/components/text";
import { cn } from "@/styles";

export default function HomeScreen() {
  const query = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
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
          <Text className="text-default">Loading...</Text>
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
            <EventList
              className={cn("opacity-100 transition duration-500", {
                "opacity-50": isRefreshing,
              })}
              eventsWithRoute={query.data}
            />
          </Animated.View>
        </ScrollView>
      )}
    </>
  );
}
