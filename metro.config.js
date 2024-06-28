const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/* eslint-disable no-undef */
const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./styles/global.css" });
