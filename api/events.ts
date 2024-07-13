import { QueryKey } from "@tanstack/react-query";
import axios from "axios";

import { EventWithRoute, EventSubgroup } from "@/types/zwift.type";

const apiV1baseUrl = "https://zwift.taeho.io/api/v1";

export const fetchEvents = async (): Promise<EventWithRoute[]> => {
  const result = await axios.get(`${apiV1baseUrl}/events`);
  return result.data;
};

export const fetchEvent = async ({
  queryKey,
}: {
  queryKey: QueryKey;
}): Promise<EventWithRoute> => {
  const eventId = queryKey[1];
  const result = await axios.get(`${apiV1baseUrl}/events/${eventId}`);
  return result.data;
};

export const fetchEventSubgroup = async ({
  queryKey,
}: {
  queryKey: QueryKey;
}): Promise<EventSubgroup> => {
  const eventId = queryKey[1];
  const subgroupId = queryKey[2];
  const result = await axios.get(
    `${apiV1baseUrl}/events/${eventId}/subgroups/${subgroupId}`
  );
  return result.data;
};
