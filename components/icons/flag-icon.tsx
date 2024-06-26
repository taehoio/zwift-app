import { FontAwesome6 } from "@expo/vector-icons";
import { cssInterop } from "nativewind";

const FontAwesome6FlagIcon = ({ ...props }: any) => {
  return <FontAwesome6 name="flag" {...props} />;
};

export const FlagIcon = cssInterop(FontAwesome6FlagIcon, {
  className: {
    target: "style",
  },
});
