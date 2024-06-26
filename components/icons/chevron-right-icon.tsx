import { AntDesign } from "@expo/vector-icons";
import { cssInterop } from "nativewind";

const AntDesignRightIcon = ({ ...props }: any) => {
  return <AntDesign name="right" {...props} />;
};

export const ChevronRightIcon = cssInterop(AntDesignRightIcon, {
  className: {
    target: "style",
  },
});
