import { FontAwesome6 } from "@expo/vector-icons";
import { cssInterop } from "nativewind";

const FontAwesome6RepeatIcon = ({ ...props }: any) => {
  return <FontAwesome6 name="repeat" {...props} />;
};

export const RepeatIcon = cssInterop(FontAwesome6RepeatIcon, {
  className: {
    target: "style",
  },
});
