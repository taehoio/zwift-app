import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

import { cn } from "@/styles";

export const LoadingIndicator = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <ActivityIndicator
      testID="LoadingIndicator"
      className={cn(
        "opacity-0 transition-opacity duration-[2000ms] color-default-400",
        { "opacity-100": isLoading },
      )}
    />
  );
};
