import { ReactNode } from "react";
import { Platform } from "react-native";
import Animated, { FadeIn as AnimatedFadeIn } from "react-native-reanimated";

export const FadeInView = ({
  children,
  props,
}: {
  children?: ReactNode;
  props?: any;
}) => {
  const isWeb = Platform.OS === "web";

  return isWeb ? (
    <>{children}</>
  ) : (
    <Animated.View entering={AnimatedFadeIn} {...props}>
      {children}
    </Animated.View>
  );
};
