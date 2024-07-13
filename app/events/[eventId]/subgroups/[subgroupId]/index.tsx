import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { fetchEventSubgroup } from "@/api/events";
import { Text } from "@/components";

export default function SubgroupScreen() {
  const { eventId, subgroupId } = useLocalSearchParams();

  const query = useQuery({
    queryKey: ["eventSubgroup", eventId, subgroupId],
    queryFn: fetchEventSubgroup,
  });

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {query.isLoading && <Text>Loading...</Text>}
      {query.isError && <Text>Error: {JSON.stringify(query.error)}</Text>}
      {query.isSuccess && (
        <>
          <Text>Event: {eventId}</Text>
          <Text>Subgroup: {subgroupId}</Text>
          <Text>Name: {query.data.name}</Text>
          <Text>Description: {query.data.description}</Text>
          <Text>Participants: {query.data.totalSignedUpCount}</Text>
        </>
      )}
    </ScrollView>
  );
}
