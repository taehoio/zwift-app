import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { colors } from "@/constants/Colors";
import "@/global.css";

const queryClient = new QueryClient();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const [loaded, error] = useFonts({
    "ZwiftSprint-Regular": require("@/assets/fonts/ZwiftSprint-Regular.otf"),
    "ZwiftSprint-Medium": require("@/assets/fonts/ZwiftSprint-Medium.otf"),
    "ZwiftSprint-Bold": require("@/assets/fonts/ZwiftSprint-Bold.otf"),
    "ZwiftSprint-Black": require("@/assets/fonts/ZwiftSprint-Black.otf"),
    "ZwiftFondo-Regular": require("@/assets/fonts/ZwiftFondo-Regular.otf"),
  });
  if (error) {
    console.error(error);
  }

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Stack
          initialRouteName="index"
          screenOptions={{
            headerTitle: "Zwift Events",
            headerTitleStyle: {
              fontFamily: "ZwiftSprint-Bold",
            },
            headerStyle: {
              backgroundColor: isDark
                ? colors.dark.background
                : colors.light.background,
            },
            headerTintColor: isDark
              ? colors.dark.foreground
              : colors.light.foreground,
            headerBackTitleVisible: false,
            headerLargeTitle: true,
            headerLargeTitleStyle: {
              fontFamily: "ZwiftSprint-Bold",
            },
            contentStyle: {
              backgroundColor: isDark
                ? colors.dark.background
                : colors.light.background,
            },
          }}
        >
          <Stack.Screen name="welcome" options={{ headerTitle: "Welcome!" }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
