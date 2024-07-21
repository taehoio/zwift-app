import React from "react";
import { View } from "react-native";

import { ExternalLink } from "@/components/external-link";
import { User } from "@/components/user";
import { cn } from "@/styles";
import { Tables } from "@/types/supabase.database.type";
import { Category } from "@/types/zwift.type";

export const UserList = ({
  users,
  category,
  className,
}: {
  users: Tables<"zwift_users">[];
  category: Category;
  className?: string;
}) => {
  return (
    <View className={cn("flex flex-col", className)}>
      {users.map((user, i) => (
        <ExternalLink
          key={user.zwift_id}
          href={`https://zwiftpower.com/profile.php?z=${user.zwift_id}`}
          asChild
        >
          <User
            user={user}
            category={category}
            rank={i + 1}
            className={cn({ "bg-default-200 dark:bg-default-100": isEven(i) })}
          />
        </ExternalLink>
      ))}
    </View>
  );
};

const isEven = (num: number) => num % 2 === 0;
