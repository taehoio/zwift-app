/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

const commonColors = {
  bunker: {
    50: "#F7F8F8",
    100: "#EDEEF1",
    200: "#D8DBDF",
    300: "#B5BAC4",
    400: "#8D94A3",
    500: "#6F7788",
    600: "#596070",
    700: "#494F5B",
    800: "#3F434D",
    900: "#373A43",
    950: "#141518",
  },
  orange: {
    50: "#FFF6ED",
    100: "#FFEAD4",
    200: "#FFD1A9",
    300: "#FFB172",
    400: "#FD853A",
    500: "#FC6719",
    600: "#ED4809",
    700: "#C4340A",
    800: "#9C2A10",
    900: "#7D2511",
    950: "#441006",
  },
  curiousblue: {
    50: "#F0FAFF",
    100: "#E0F3FE",
    200: "#B9E7FE",
    300: "#7CD9FD",
    400: "#36C7FA",
    500: "#0CB0EB",
    600: "#0093D1",
    700: "#0170A3",
    800: "#065F86",
    900: "#0B4E6F",
    950: "#07324A",
  },
  red: "#E32817",
  green: "#40BE59",
  blue: "#01B2CC",
  yellow: "#FAC400",
  purple: "#8A445E",
  white: "#FFFFFF",
  background: "#F9F9F9",
  foreground: "#141518",
};

export const colors = {
  light: {
    background: commonColors.background,
    foreground: commonColors.foreground,
    primary: commonColors.orange[500],
    secondary: commonColors.curiousblue[500],
  },
  dark: {
    background: commonColors.foreground,
    foreground: commonColors.background,
    primary: commonColors.orange[500],
    secondary: commonColors.curiousblue[500],
  },
};
