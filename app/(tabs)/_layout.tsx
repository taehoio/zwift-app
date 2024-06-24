import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { colors } from "@/constants/Colors";

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDark
            ? colors.dark.background
            : colors.light.background,
        },
        tabBarActiveTintColor: isDark
          ? colors.dark.secondary
          : colors.light.secondary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
