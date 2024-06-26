import { forwardRef } from "react";
import { Pressable, Text, View } from "react-native";
import { preview } from "react-native-ide";

import { cn } from "@/styles";

export const Button = forwardRef<View, any>(function Button(
  {
    className,
    children,
    ...props
  }: {
    className?: string;
    children?: React.ReactNode;
    props?: any;
  },
  ref,
) {
  return (
    <Pressable
      className={cn(
        "scale-100 rounded-md bg-primary p-4 opacity-100 transition hover:opacity-90 active:scale-90 active:opacity-90",
        className,
      )}
      ref={ref}
      {...props}
    >
      <Text className="font-bold text-white">{children}</Text>
    </Pressable>
  );
});

preview(<Button>Hello World</Button>);
