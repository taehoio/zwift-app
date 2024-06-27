import { ScrollView, View } from "react-native";

import { Text } from "@/components";
import { HelloWave } from "@/components/HelloWave";

export default function WelcomeScreen() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View className="flex flex-row items-center p-4">
        <Text className="text-4xl">To the world!</Text>
        <HelloWave />
      </View>
    </ScrollView>
  );
}
