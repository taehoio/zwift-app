import { render, screen } from "@testing-library/react-native";
import React from "react";

import { Button } from "@/components/button";

it("renders correctly", async () => {
  render(<Button>It's me, Button!</Button>);

  expect(screen.getByRole("button")).toBeOnTheScreen();
  expect(screen.getByRole("button")).toHaveTextContent("It's me, Button!");

  expect(screen).toMatchSnapshot();
});
