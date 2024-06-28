import { Link, Stack } from "expo-router";
import { View } from "react-native";

import { Text } from "@/components";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center p-4">
        <Text className="text-2xl font-bold">This screen doesn't exist.</Text>
        <Link href="/">
          <Text className="text-blue underline">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
