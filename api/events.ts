import { QueryKey } from "@tanstack/react-query";
import axios from "axios";

import { EventWithRoute } from "@/types/zwift.type";

export const fetchEvents = async (): Promise<EventWithRoute[]> => {
  const result = await axios.get("https://zwift.taeho.io/api/v1/events");
  return result.data;
};

export const fetchEvent = async ({
  queryKey,
}: {
  queryKey: QueryKey;
}): Promise<EventWithRoute> => {
  const eventId = queryKey[1];
  const result = await axios.get(
    `https://zwift.taeho.io/api/v1/events/${eventId}`,
  );
  return result.data;
};
