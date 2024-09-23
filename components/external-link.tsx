import { Link } from "expo-router";
import {
  WebBrowserPresentationStyle,
  openBrowserAsync,
} from "expo-web-browser";
import { type ComponentProps } from "react";
import { Platform } from "react-native";

import { useColor } from "@/hooks/useColorScheme";

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

export function ExternalLink({ href, ...rest }: Props) {
  const backgroundColor = useColor("background");

  return (
    <Link
      target="_blank"
      {...rest}
      href={href}
      onPress={async (event) => {
        if (Platform.OS !== "web") {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href, {
            toolbarColor: backgroundColor,
            presentationStyle: WebBrowserPresentationStyle.FULL_SCREEN,
            enableBarCollapsing: true,
          });
        }
      }}
    />
  );
}
