import { FontFace, local } from "react-native-font-faces";

export const ZwiftSprint_Regular: FontFace = {
  fontFamily: "ZwiftSprint",
  fontWeight: "400",
  fontStyle: "normal",
  src: [local("ZwiftSprint-Regular")],
};

export const ZwiftSprint_Medium: FontFace = {
  fontFamily: "ZwiftSprint",
  fontWeight: "500",
  fontStyle: "normal",
  src: [local("ZwiftSprint-Medium")],
};

export const ZwiftSprint_Bold: FontFace = {
  fontFamily: "ZwiftSprint",
  fontWeight: "700",
  fontStyle: "normal",
  src: [local("ZwiftSprint-Bold")],
};

export const ZwiftSprint_Black: FontFace = {
  fontFamily: "ZwiftSprint",
  fontWeight: "900",
  fontStyle: "normal",
  src: [local("ZwiftSprint-Black")],
};

export const ZwiftSprint_All = [
  ZwiftSprint_Regular,
  ZwiftSprint_Medium,
  ZwiftSprint_Bold,
  ZwiftSprint_Black,
];
