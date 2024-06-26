import axios from "axios";

import { EventWithRoute } from "@/types/zwift.type";

export const getEvents = async (): Promise<EventWithRoute[]> => {
  const result = await axios.get("https://zwift.taeho.io/api/v1/events");
  return result.data;
};
