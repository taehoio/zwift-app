import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";

import { Text } from "@/components";

export default function SubgroupScreen() {
  const { eventId, subgroupId } = useLocalSearchParams();

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>Event: {eventId}</Text>
      <Text>Subgroup: {subgroupId}</Text>
    </ScrollView>
  );
}
