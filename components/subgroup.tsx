import { forwardRef } from "react";
import { Pressable, View } from "react-native";

import { Text } from "@/components";
import { ChevronRightIcon } from "@/components/icons";
import { SubgroupBadge } from "@/components/subgroup-badge";
import { labelToCategory } from "@/libs/zwiftpower";
import { cn } from "@/styles";
import { EventSubgroup } from "@/types/zwift.type";

export const Subgroup = forwardRef<View, any>(function Subgroup(
  {
    subgroup,
    className,
    isPressable = true,
    ...props
  }: {
    subgroup: EventSubgroup;
    className?: string;
    isPressable?: boolean;
  },
  ref,
) {
  const category = labelToCategory(subgroup.label);

  return (
    <Pressable
      testID="Subgroup"
      ref={ref}
      className={cn(
        "flex w-full flex-row gap-2 bg-background py-4 pl-4 pr-2 transition",
        { "active:scale-[.98] active:opacity-95": isPressable },
        className,
      )}
      {...props}
    >
      <View className="flex flex-grow flex-row gap-2">
        <SubgroupBadge
          className="text-small min-h-6 min-w-6"
          category={category}
          text={category}
        />
        <Text>{subgroup.totalSignedUpCount}</Text>
      </View>

      <View className="flex justify-center">
        <ChevronRightIcon className="text-lg color-primary" />
      </View>
    </Pressable>
  );
});
