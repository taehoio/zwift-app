import { Feather } from "@expo/vector-icons";
import { cssInterop } from "nativewind";

const FeatherUsersIcon = ({ ...props }: any) => {
  return <Feather name="users" {...props} />;
};

export const UsersIcon = cssInterop(FeatherUsersIcon, {
  className: {
    target: "style",
  },
});
