import { FontAwesome6 } from "@expo/vector-icons";
import { cssInterop } from "nativewind";

const FontAwesome6UserIcon = ({ ...props }: any) => {
  return <FontAwesome6 name="user-large" {...props} />;
};

export const UserIcon = cssInterop(FontAwesome6UserIcon, {
  className: {
    target: "style",
  },
});
