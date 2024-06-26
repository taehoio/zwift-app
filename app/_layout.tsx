import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import "react-native-reanimated";

import { colors } from "@/constants/Colors";
import "@/global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
        },
        headerStyle: {
          backgroundColor: isDark
            ? colors.dark.background
            : colors.light.background,
        },
        headerTintColor: isDark ? colors.dark.primary : colors.light.primary,
      }}
    >
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
