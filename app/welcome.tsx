import React from "react";
import { RefreshControl, ScrollView, View } from "react-native";

import { Text } from "@/components";
import { HelloWave } from "@/components/HelloWave";

export default function WelcomeScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View className="flex flex-row items-center p-4">
        <Text className="text-4xl">To the world!</Text>
        <HelloWave />
      </View>
    </ScrollView>
  );
}
