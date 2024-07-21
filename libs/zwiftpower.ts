import { Category } from "@/types/zwift.type";

export function labelToCategory(label: number): Category {
  let category: Category;

  switch (label) {
    case 1:
      category = "A";
      break;
    case 2:
      category = "B";
      break;
    case 3:
      category = "C";
      break;
    case 4:
      category = "D";
      break;
    case 5:
      category = "E";
      break;
    default:
      category = "unknown";
  }

  return category;
}
