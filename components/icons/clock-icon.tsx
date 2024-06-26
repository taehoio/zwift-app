import { FontAwesome6 } from "@expo/vector-icons";
import { cssInterop } from "nativewind";

const FontAwesome6ClockIcon = ({ ...props }: any) => {
  return <FontAwesome6 name="clock" {...props} />;
};

export const ClockIcon = cssInterop(FontAwesome6ClockIcon, {
  className: {
    target: "style",
  },
});
