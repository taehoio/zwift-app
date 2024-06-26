import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { preview } from "react-native-ide";

import { cn } from "@/styles";

dayjs.extend(timezone);
dayjs.extend(utc);

export const StartTime = ({
  className,
  date,
}: {
  className?: string;
  date: Date;
}) => {
  const [localStartTime, setLocalStartTime] = useState<string>();

  useEffect(
    function updateLocalStartTime() {
      setLocalStartTime(dayjs(date).format("HH:mm"));
    },
    [date],
  );

  return (
    <Text className={cn("text-foreground", className)}>
      {localStartTime ? localStartTime : "--:--"}
    </Text>
  );
};

preview(<StartTime date={new Date()} />);
