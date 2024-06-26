import { Link } from "expo-router";
import { View } from "react-native";

import { Event } from "@/components/event";
import { cn } from "@/styles";
import { EventWithRoute } from "@/types/zwift.type";

export const EventList = ({
  className,
  eventsWithRoute: events,
}: {
  className?: string;
  eventsWithRoute: EventWithRoute[];
}) => {
  return (
    <View className={cn("flex flex-col", className)}>
      {events.map((eventWithRoute, i) => (
        // <Link key={eventWithRoute.id} href={`/events/${eventWithRoute.id}`} asChild>
        <Link key={eventWithRoute.id} href="/welcome" asChild>
          <Event
            className={cn({ "bg-default-200 dark:bg-default-100": isEven(i) })}
            eventWithRoute={eventWithRoute}
          />
        </Link>
      ))}
    </View>
  );
};

const isEven = (num: number) => num % 2 === 0;
