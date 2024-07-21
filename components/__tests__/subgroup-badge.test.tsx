import { render, screen } from "@testing-library/react-native";

import {
  SubgroupBadge,
  SubgroupBadges,
  colorByCategory,
} from "@/components/subgroup-badge";
import { EventSubgroup } from "@/types/zwift.type";

describe("SubgroupBadges", () => {
  it("renders correctly with subgroups", () => {
    const subgroups = [
      { id: 1, label: 1, totalSignedUpCount: 10 },
      { id: 2, label: 2, totalSignedUpCount: 20 },
    ] as EventSubgroup[];

    render(<SubgroupBadges subgroups={subgroups} eventId={1} />);

    expect(screen.getByText("10")).toBeTruthy();
    expect(screen.getByText("20")).toBeTruthy();
  });

  it("renders correctly with no subgroups", () => {
    render(<SubgroupBadges subgroups={[]} eventId={1} />);

    expect(screen.queryAllByTestId("SubgroupBadge")).toHaveLength(0);
  });
});

describe("SubgroupBadge", () => {
  it("renders correctly with a category and text", () => {
    render(<SubgroupBadge category="A" text="10" />);

    expect(screen.getByText("10")).toBeTruthy();
  });

  it("renders correctly with no text", () => {
    render(<SubgroupBadge category="A" />);

    expect(screen.queryAllByTestId("SubgroupBadge")).toHaveLength(1);
  });
});

describe("colorByCategory", () => {
  it("returns the correct color for each category", () => {
    expect(colorByCategory("A")).toBe("bg-red");
    expect(colorByCategory("B")).toBe("bg-green");
    expect(colorByCategory("C")).toBe("bg-blue");
    expect(colorByCategory("D")).toBe("bg-yellow");
    expect(colorByCategory("E")).toBe("bg-purple");
    expect(colorByCategory("unknown")).toBe("");
  });

  it("returns an empty string for no category", () => {
    // @ts-ignore
    expect(colorByCategory(null)).toBe("");
  });
});
