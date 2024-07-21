import { render, screen } from "@testing-library/react-native";

import { Subgroup } from "@/components/subgroup";
import { labelToCategory } from "@/libs/zwiftpower";
import { EventSubgroup } from "@/types/zwift.type";

jest.mock("@/libs/zwiftpower", () => ({
  labelToCategory: jest.fn(() => "A"),
}));

describe("Subgroup", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with a subgroup", () => {
    const subgroup = {
      id: 1,
      label: 1,
      totalSignedUpCount: 10,
    } as EventSubgroup;

    render(<Subgroup subgroup={subgroup} />);

    expect(screen.getByText("10")).toBeTruthy();
  });

  it("renders correctly with isPressable set to false", () => {
    const subgroup = {
      id: 1,
      label: 1,
      totalSignedUpCount: 10,
    } as EventSubgroup;

    render(<Subgroup subgroup={subgroup} isPressable={false} />);

    expect(screen.getByText("10")).toBeTruthy();
  });

  it("calls labelToCategory with the correct label", () => {
    const subgroup = {
      id: 1,
      label: 1,
      totalSignedUpCount: 10,
    } as EventSubgroup;

    render(<Subgroup subgroup={subgroup} />);

    expect(labelToCategory).toHaveBeenCalledWith(subgroup.label);
  });
});
