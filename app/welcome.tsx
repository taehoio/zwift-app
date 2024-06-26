import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { Image, Platform, Text, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function WelcomeScreen() {
  const navigatior = useNavigation();

  useLayoutEffect(() => {
    navigatior.setOptions({
      headerTitle: (props: any) => (
        <Text className="text-2xl font-bold text-foreground" {...props}>
          Welcome!
        </Text>
      ),
    });
  }, [navigatior]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          className="absolute bottom-0 left-0 h-[179] w-[290]"
        />
      }
    >
      <View className="flex flex-row items-center">
        <Text className="text-4xl font-bold text-foreground">Welcome!</Text>
        <HelloWave />
      </View>

      <View className="mb-2 gap-2">
        <Text className="text-2xl font-bold text-foreground">
          Step 1: Try it
        </Text>

        <Text className="text-lg text-foreground">
          Edit <Text className="font-bold">app/(tabs)/index.tsx</Text> to see
          changes. Press{" "}
          <Text className="font-bold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </Text>{" "}
          to open developer tools.
        </Text>
      </View>

      <View className="mb-2 gap-2">
        <Text className="text-2xl font-bold text-foreground">
          Step 2: Explore
        </Text>

        <Text className="text-lg text-foreground">
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </Text>
      </View>

      <View className="mb-2 gap-2">
        <Text className="text-2xl font-bold text-foreground">
          Step 3: Get a fresh start
        </Text>

        <Text className="text-lg text-foreground">
          When you're ready, run{" "}
          <Text className="font-bold">npm run reset-project</Text> to get a
          fresh <Text className="font-bold">app</Text> directory. This will move
          the current <Text className="font-bold">app</Text> to{" "}
          <Text className="font-bold">app-example</Text>.
        </Text>
      </View>
    </ParallaxScrollView>
  );
}
