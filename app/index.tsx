import { useQuery } from "@tanstack/react-query";
import { cssInterop } from "nativewind";
import { SafeAreaView, ScrollView } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import { getEvents } from "@/api/events";
import { EventList } from "@/components/event-list";
import { Text } from "@/components/text";

const ScrollViewContainer = cssInterop(ScrollView, {
  contentContainerClassName: "contentContainerStyle",
});

export default function HomeScreen() {
  const query = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  return (
    <>
      {query.isLoading && (
        <SafeAreaView className="flex-1 items-center justify-center">
          <Text>Loading...</Text>
        </SafeAreaView>
      )}

      {query.isError && (
        <SafeAreaView className="flex-1 items-center justify-center">
          <Text>Error: {JSON.stringify(query.error)}</Text>
        </SafeAreaView>
      )}

      {query.isSuccess && (
        <ScrollViewContainer contentInsetAdjustmentBehavior="automatic">
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <EventList eventsWithRoute={query.data} />
          </Animated.View>
        </ScrollViewContainer>
      )}
    </>
  );
}
