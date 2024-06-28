import { useColorScheme } from "nativewind";

import { colors } from "@/constants/colors";

export { useColorScheme } from "nativewind";

type ColorType = keyof typeof colors.light & keyof typeof colors.dark;

export const useColor = (colorName: ColorType) => {
  const { colorScheme } = useColorScheme();
  const color = colors[colorScheme ?? "light"][colorName];
  return color;
};
