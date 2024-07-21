import { View } from "react-native";

import { Text } from "@/components";
import { labelToCategory } from "@/libs/zwiftpower";
import { cn } from "@/styles";
import { Category, EventSubgroup } from "@/types/zwift.type";

export const SubgroupBadges = ({
  className,
  subgroups,
}: {
  className?: string;
  eventId: number;
  subgroups: EventSubgroup[];
}) => {
  return (
    <View className={cn("flex flex-row gap-0.5", className)}>
      {subgroups.map((subgroup) => (
        <SubgroupBadge
          key={subgroup.id}
          category={labelToCategory(subgroup.label)}
          text={subgroup.totalSignedUpCount}
        />
      ))}
    </View>
  );
};

export const SubgroupBadge = ({
  className,
  category,
  text,
}: {
  className?: string;
  category: Category;
  text?: string | number | null;
}) => (
  <View
    testID="SubgroupBadge"
    className={cn(
      "flex h-6 min-w-6 items-center justify-center rounded-full",
      colorByCategory(category),
      className,
    )}
  >
    <Text className="text-sm font-medium text-white">{text}</Text>
  </View>
);

export const colorByCategory = (category: Category): string => {
  const bgColors = {
    A: "bg-red",
    B: "bg-green",
    C: "bg-blue",
    D: "bg-yellow",
    E: "bg-purple",
    unknown: "",
  };

  if (!category) {
    return "";
  }

  return bgColors[category];
};
