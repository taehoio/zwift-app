import { forwardRef } from "react";
import { Pressable, View } from "react-native";

import { Text } from "@/components";
import {
  ChevronRightIcon,
  ClockIcon,
  DumbbellIcon,
  FlagIcon,
  RepeatIcon,
  UsersIcon,
} from "@/components/icons";
import { StartTime } from "@/components/start-time";
import { SubgroupBadges } from "@/components/subgroup-badge";
import { cn } from "@/styles";
import { EventWithRoute } from "@/types/zwift.type";

export const Event = forwardRef<View, any>(function Event(
  {
    className,
    eventWithRoute: er,
    isPressable = true,
    showSubgroups = true,
    showFullEventName = false,
    ...props
  }: {
    className?: string;
    eventWithRoute: EventWithRoute;
    isPressable?: boolean;
    showSubgroups?: boolean;
    showFullEventName?: boolean;
  },
  ref,
) {
  return (
    <Pressable
      ref={ref}
      className={cn(
        "flex flex-row gap-0 bg-background py-2 pl-2 pr-0.5",
        className,
      )}
      {...props}
    >
      <View className="flex min-w-[52px] max-w-[52px]">
        <StartTime date={new Date(er.eventStart)} />
      </View>

      <View className="line-clamp-1 flex-1 flex-grow flex-col">
        <EventName eventWithRoute={er} showFullEventName={showFullEventName} />
        <RouteInfo eventWithRoute={er} />
        {showSubgroups && (
          <SubgroupBadges eventId={er.id} subgroups={er.eventSubgroups} />
        )}
      </View>

      {isPressable && (
        <View className="flex w-6 items-end justify-center">
          <ChevronRightIcon className="text-lg color-primary" />
        </View>
      )}
    </Pressable>
  );
});

const EventName = ({
  className,
  eventWithRoute: er,
  showFullEventName = false,
}: {
  className?: string;
  eventWithRoute: EventWithRoute;
  showFullEventName?: boolean;
}) => (
  <View className={cn("flex-1 flex-grow flex-row gap-1", className)}>
    <View className="flex min-w-3.5 max-w-3.5 items-center justify-center">
      {er.eventType === "RACE" && (
        <FlagIcon className="text-md color-default" />
      )}
      {er.eventType === "GROUP_RIDE" && (
        <UsersIcon className="text-md color-default" />
      )}
      {er.eventType === "GROUP_WORKOUT" && (
        <DumbbellIcon className="text-xs color-default" />
      )}
      {er.eventType === "TIME_TRIAL" && (
        <ClockIcon className="text-md color-default" />
      )}
    </View>
    <Text
      className={cn("flex-1 font-bold leading-tight text-secondary", {
        "line-clamp-1": !showFullEventName,
      })}
    >
      {er.name}
    </Text>
  </View>
);

const RouteInfo = ({
  className,
  eventWithRoute: er,
}: {
  className?: string;
  eventWithRoute: EventWithRoute;
}) => (
  <View className={cn("flex flex-row gap-2 pb-0.5", className)}>
    {er.laps > 0 && (
      <View className="flex flex-row gap-1">
        <View className="flex min-w-3.5 max-w-3.5 items-center justify-center">
          <RepeatIcon className="w-3 color-primary" />
        </View>
        <View className="flex flex-row items-center gap-0.5">
          <Text>{er.laps}</Text>
          <Text className="text-xs">laps</Text>
        </View>

        {er.route && (
          <>
            <View className="flex flex-row items-center">
              <Text>
                {(er.route.lead_in_km + er.route.distance_km * er.laps).toFixed(
                  1,
                )}
              </Text>
              <Text className="text-xs">km</Text>
            </View>

            <View className="flex flex-row items-center">
              <Text>{(er.route.elevation_m * er.laps).toFixed(0)}</Text>
              <Text className="text-xs">m</Text>
            </View>
          </>
        )}
      </View>
    )}

    {er.durationInSeconds > 0 && (
      <View className="flex gap-1.5">
        <View className="flex flex-row items-center gap-0.5">
          <View className="flex min-w-3.5 max-w-3.5 items-center justify-center">
            <ClockIcon className="w-3.5 color-primary" />
          </View>
          <Text className="pl-0.5">{er.durationInSeconds / 60}</Text>
          <Text className="text-xs">mins</Text>
        </View>
      </View>
    )}

    {er.distanceInMeters > 0 && (
      <View className="flex gap-1">
        <View className="flex flex-row items-center">
          <Text>{(er.distanceInMeters / 1000).toFixed(1)}</Text>
          <Text className="text-xs">km</Text>
        </View>
      </View>
    )}

    <Text className="line-clamp-1 flex-grow">{er.route?.name}</Text>
  </View>
);
