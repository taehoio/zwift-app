import { Text as RNText, TextStyle } from "react-native";

import { cn } from "@/styles";

export const Text = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children?: string | number | null;
  props?: any;
}) => {
  const mergedClassName = cn("font-sans text-foreground", className);
  const classValues = mergedClassName.split(" ");

  const style: TextStyle = {};
  const isFontSans = classValues.includes("font-sans");
  if (isFontSans) {
    switch (true) {
      case classValues.includes("font-black"):
        style.fontFamily = "ZwiftSprint-Black";
        break;
      case classValues.includes("font-bold"):
        style.fontFamily = "ZwiftSprint-Bold";
        break;
      case classValues.includes("font-medium"):
        style.fontFamily = "ZwiftSprint-Medium";
        break;
      default:
        style.fontFamily = "ZwiftSprint-Regular";
    }
  }

  return (
    <RNText style={style} className={mergedClassName} {...props}>
      {children}
    </RNText>
  );
};
