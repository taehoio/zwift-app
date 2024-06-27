import { AntDesign, Feather, FontAwesome6 } from "@expo/vector-icons";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { Platform } from "react-native";
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
            headerTitle: "Zwift Events",
            headerTitleStyle: {
              fontFamily: "ZwiftSprint-Bold",
            },
            headerTintColor: isDark
              ? colors.dark.foreground
              : colors.light.foreground,
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
                Platform.OS === "ios"
                  ? "transparent"
                  : isDark
                    ? colors.dark.background
                    : colors.light.background,
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
