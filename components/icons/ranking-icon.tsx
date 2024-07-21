import { FontAwesome6 } from "@expo/vector-icons";
import { cssInterop } from "nativewind";

const FontAwesome6RankingIcon = ({ ...props }: any) => {
  return <FontAwesome6 name="ranking-star" {...props} />;
};

export const RankingIcon = cssInterop(FontAwesome6RankingIcon, {
  className: {
    target: "style",
  },
});
