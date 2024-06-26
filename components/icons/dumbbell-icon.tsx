import { FontAwesome6 } from "@expo/vector-icons";
import { cssInterop } from "nativewind";

const FontAwesome6DumbbellIcon = ({ ...props }: any) => {
  return <FontAwesome6 name="dumbbell" {...props} />;
};

export const DumbbellIcon = cssInterop(FontAwesome6DumbbellIcon, {
  className: {
    target: "style",
  },
});
