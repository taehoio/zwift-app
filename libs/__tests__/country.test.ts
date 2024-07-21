import { countryAlpha3ToAlpha2 } from "@/libs/country";

describe("Country", () => {
  describe("countryAlpha3ToAlpha2", () => {
    it("should return null if alpha3 is null", () => {
      expect(countryAlpha3ToAlpha2(null)).toBe(null);
    });

    it("should return null if alpha3 with suffix is not found", () => {
      expect(countryAlpha3ToAlpha2("-irl")).toBe(null);
    });

    it("should return null if alpha3 is not found", () => {
      expect(countryAlpha3ToAlpha2("XXX")).toBe(null);
    });

    it("should return alpha2 if alpha3 is found", () => {
      expect(countryAlpha3ToAlpha2("kor")).toBe("kr");
    });

    it("should return alpha2 if alpha3 is found with suffix", () => {
      expect(countryAlpha3ToAlpha2("gbr-irl")).toBe("gb-irl");
    });
  });
});
