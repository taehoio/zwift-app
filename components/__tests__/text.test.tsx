import { render, screen } from "@testing-library/react-native";
import React from "react";

import { Text } from "@/components";

it("renders correctly", async () => {
  render(
    <>
      <Text>Hello, World!</Text>

      <Text className="font-regular">Hello, World!</Text>
      <Text className="font-medium">Hello, World!</Text>
      <Text className="font-bold">Hello, World!</Text>
      <Text className="font-black">Hello, World!</Text>

      <Text className="font-serif font-black">Hello, World!</Text>

      <Text className="text-primary">Hello, World!</Text>
    </>,
  );

  expect(screen).toMatchSnapshot();
});
