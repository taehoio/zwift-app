import { labelToCategory } from "@/libs/zwiftpower";

describe("labelToCategory", () => {
  it('should return "A" for label 1', () => {
    expect(labelToCategory(1)).toBe("A");
  });

  it('should return "B" for label 2', () => {
    expect(labelToCategory(2)).toBe("B");
  });

  it('should return "C" for label 3', () => {
    expect(labelToCategory(3)).toBe("C");
  });

  it('should return "D" for label 4', () => {
    expect(labelToCategory(4)).toBe("D");
  });

  it('should return "E" for label 5', () => {
    expect(labelToCategory(5)).toBe("E");
  });

  it('should return "unknown" for labels other than 1-5', () => {
    expect(labelToCategory(6)).toBe("unknown");
    expect(labelToCategory(0)).toBe("unknown");
    expect(labelToCategory(-1)).toBe("unknown");
  });
});
