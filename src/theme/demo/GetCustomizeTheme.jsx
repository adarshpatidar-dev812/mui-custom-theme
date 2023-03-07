import {
  errorColors,
  greyColors,
  infoColors,
  primaryColorsDark,
  primaryColorsLight,
  secondaryColorsDark,
  secondaryColorsLight,
  successColors,
  warningColors,
} from "./ColorsTokens";

const GetDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: primaryColorsLight,
          secondary: secondaryColorsLight,
          success: successColors,
          info: infoColors,
          warning: warningColors,
          error: errorColors,
          background: {
            default: "#F2F4FE",
            paper: "#ffffff",
          },
          grey: greyColors,
        }
      : {
          primary: primaryColorsDark,
          secondary: secondaryColorsDark,
          background: {
            default: "#0e0e0e",
            paper: "#07080C",
          },
          grey: greyColors,
        }),
  },
  typography: {
    fontFamily: `OpenSans`,
  },
  shape: { borderRadius: 6 },
});

export default GetDesignTokens;
