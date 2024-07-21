import { forwardRef } from "react";
import { Image, Pressable, View } from "react-native";

import { Text } from "@/components";
import { ChevronRightIcon, RankingIcon, UserIcon } from "@/components/icons";
import { SubgroupBadge } from "@/components/subgroup-badge";
import { countryAlpha3ToAlpha2 } from "@/libs/country";
import { cn } from "@/styles";
import { Tables } from "@/types/supabase.database.type";
import { Category } from "@/types/zwift.type";

export const User = forwardRef<View, any>(function User(
  {
    className,
    user,
    isPressable = true,
    category,
    rank,
    ...props
  }: {
    className?: string;
    user: Tables<"zwift_users">;
    isPressable?: boolean;
    category: Category;
    rank: number;
  },
  ref,
) {
  const countryAlpha2 = countryAlpha3ToAlpha2(user.country_alpha3);
  const flagImageUrl = countryAlpha2
    ? `https://flagcdn.com/64x48/${countryAlpha2}.png`
    : null;

  return (
    <Pressable
      ref={ref}
      className={cn(
        "flex flex-row gap-3 bg-background px-2 py-3",
        { "active:scale-[.98] active:opacity-95": isPressable },
        className,
      )}
      {...props}
    >
      <View className="flex items-center justify-center">
        {user.image_src ? (
          <Image
            source={{ uri: user.image_src }}
            resizeMode="cover"
            className="h-12 w-12 rounded-full"
          />
        ) : (
          <View className="flex h-12 w-12 items-center justify-center rounded-full bg-default-100">
            <UserIcon className="text-3xl color-default-300" />
          </View>
        )}
      </View>

      <View className="flex flex-grow flex-col gap-1">
        <View className="flex flex-row items-center gap-1">
          <SubgroupBadge category={category} text={rank} />
          {flagImageUrl && (
            <Image
              source={{ uri: flagImageUrl }}
              resizeMode="contain"
              className="h-4 w-4 rounded-full"
            />
          )}
          <Text className="line-clamp-1 flex-1 overflow-x-hidden font-medium">
            {getName(user)}
          </Text>
        </View>

        <View className="flex flex-row items-center gap-2">
          <View className="flex flex-row items-center gap-0.5">
            <RankingIcon className="color-default" />
            <Text>{user.racing_score?.toFixed(0) ?? "-"}</Text>
          </View>

          <View className="flex flex-row items-center gap-0">
            <Text>{user.weight_kg?.toFixed(0) ?? "-"}</Text>
            <Text className="text-xs">kg</Text>
          </View>

          <View className="flex flex-row items-center gap-0">
            <Text>{user.height_cm?.toFixed(0) ?? "-"}</Text>
            <Text className="text-xs">cm</Text>
          </View>

          <View className="flex flex-row items-center gap-0">
            <Text>{user.age?.toFixed(0) ?? "-"}</Text>
            <Text className="text-xs">yo</Text>
          </View>

          <View className="flex flex-row items-center gap-0.5">
            <Text className="text-xs">ftp</Text>
            <Text>{user.ftp?.toFixed(0) ?? "-"}</Text>
          </View>
        </View>

        <View className="flex flex-row items-center gap-2">
          <View className="flex flex-row items-center gap-0.5">
            <Text className="text-xs">zp</Text>
            <View className="flex flex-row items-center gap-0">
              <Text>{user.rank?.toFixed(0) ?? "-"}</Text>
            </View>
          </View>

          <View className="flex flex-row items-center gap-0.5">
            <Text className="text-xs">20m</Text>
            <View className="flex flex-row items-center gap-0">
              <Text>{user.wkg_in_1200s?.toFixed(1) ?? "-"}</Text>
              <Text className="text-xs">wkg</Text>
            </View>
          </View>

          <View className="flex flex-row items-center gap-0.5">
            <Text className="text-xs">15s</Text>
            <View className="flex flex-row items-center gap-0">
              <Text>
                {user.watts_in_15s
                  ? Intl.NumberFormat().format(user.watts_in_15s)
                  : "-"}
              </Text>
              <Text className="text-xs">watts</Text>
            </View>
          </View>

          <View className="flex flex-row items-center gap-0.5">
            <Text className="text-xs">zFTP</Text>
            <Text>{user.zftp?.toFixed(0) ?? "-"}</Text>
          </View>
        </View>
      </View>

      {isPressable && (
        <View className="flex flex-row items-center justify-center">
          <ChevronRightIcon className="text-lg color-primary" />
        </View>
      )}
    </Pressable>
  );
});

const getName = (user: Tables<"zwift_users">) => {
  if (user.first_name && user.last_name) {
    return `${user.first_name} ${user.last_name}`;
  }
  return user.name ?? "Unknown";
};
