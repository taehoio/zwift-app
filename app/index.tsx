import { useQuery } from "@tanstack/react-query";
import { cssInterop } from "nativewind";
import { ScrollView, Text } from "react-native";

import { getEvents } from "@/api/events";
import { EventList } from "@/components/event-list";
import { cn } from "@/styles";

const ScrollViewContainer = cssInterop(ScrollView, {
  contentContainerClassName: "contentContainerStyle",
});

export default function HomeScreen() {
  const query = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  return (
    <ScrollViewContainer
      contentInsetAdjustmentBehavior="automatic"
      contentContainerClassName={cn({
        "flex-1 items-center justify-center": query.isLoading,
      })}
    >
      {query.isLoading && <Text className="text-foreground">Loading...</Text>}
      {query.isError && <Text className="text-foreground">Error</Text>}
      {query.isSuccess && <EventList eventsWithRoute={query.data} />}
    </ScrollViewContainer>
  );
}
