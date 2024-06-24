import { Tabs } from "expo-router";
import { cssInterop } from "nativewind";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function TabLayout() {
  return (
    <TabsContainer tabBarClassName="bg-background text-secondary-600">
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
    </TabsContainer>
  );
}

function TabsContainer({ tabBarClassName, ...props }: any) {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: tabBarClassName.backgroundColor,
        },
        tabBarActiveTintColor: tabBarClassName.color,
        headerShown: false,
      }}
      {...props}
    />
  );
}

cssInterop(TabsContainer, {
  tabBarClassName: {
    target: false,
  },
});
