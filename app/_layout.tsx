import { AntDesign, Feather, FontAwesome6 } from "@expo/vector-icons";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Platform } from "react-native";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useColor } from "@/hooks/useColorScheme";
import "@/styles/global.css";

const queryClient = new QueryClient();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const foregroundColor = useColor("foreground");
  const backgroundColor = useColor("background");

  const [loaded, error] = useFonts({
    "ZwiftSprint-Regular": require("@/assets/fonts/ZwiftSprint-Regular.otf"),
    "ZwiftSprint-Medium": require("@/assets/fonts/ZwiftSprint-Medium.otf"),
    "ZwiftSprint-Bold": require("@/assets/fonts/ZwiftSprint-Bold.otf"),
    "ZwiftSprint-Black": require("@/assets/fonts/ZwiftSprint-Black.otf"),
    "ZwiftFondo-Regular": require("@/assets/fonts/ZwiftFondo-Regular.otf"),
    ...FontAwesome6.font,
    ...Feather.font,
    ...AntDesign.font,
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
            headerTitleStyle: {
              fontFamily: "ZwiftSprint-Bold",
            },
            headerTintColor: foregroundColor,
            headerBackTitleStyle: {
              fontSize: 0,
            },
            headerLargeTitle: true,
            headerLargeTitleStyle: {
              fontFamily: "ZwiftSprint-Bold",
            },
            headerTransparent: Platform.OS === "ios" ? true : false,
            headerBlurEffect: "regular",
            headerStyle: {
              backgroundColor:
                Platform.OS === "ios" ? "transparent" : backgroundColor,
            },
            contentStyle: {
              backgroundColor: backgroundColor,
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{ headerTitle: "Zwift Events" }}
          />
          <Stack.Screen
            name="events/[eventId]/index"
            options={{ headerTitle: "Event" }}
          />
          <Stack.Screen
            name="events/[eventId]/subgroups/[subgroupId]/index"
            options={{ headerTitle: "Subgroup" }}
          />

          <Stack.Screen name="+not-found" />
        </Stack>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
