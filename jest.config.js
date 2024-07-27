/** @type {import('jest').Config} */
const config = {
  // preset: "@testing-library/react-native",
  preset: "jest-expo",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  setupFilesAfterEnv: ["./jest-setup.ts"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/*.type.ts",
    "!**/node_modules/**",
  ],
  coverageProvider: "v8",
  coverageReporters: ["json", "lcov", "text", "clover"],
};

module.exports = config;
