import { Link, useNavigation } from "expo-router";
import { cssInterop } from "nativewind";
import { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";

import { Button } from "@/components/button";

const ScrollViewContainer = cssInterop(ScrollView, {
  contentClassName: "contentContainerStyle",
});

export default function HomeScreen() {
  const navigatior = useNavigation();

  useLayoutEffect(() => {
    navigatior.setOptions({
      headerTitle: (props: any) => (
        <Text className="text-2xl font-bold text-foreground" {...props}>
          Zwift Events
        </Text>
      ),
    });
  }, [navigatior]);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollViewContainer contentClassName="flex-1 items-center justify-center">
        <Link
          push
          href={{ pathname: "/welcome", params: { title: "123" } }}
          asChild
        >
          <Button>Welcome!</Button>
        </Link>
      </ScrollViewContainer>
    </SafeAreaView>
  );
}
