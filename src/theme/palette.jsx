import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const PRIMARY = {
  lighter: "#E0FAEB",
  light: "#9EE5C8",
  main: "#52AB98",
  dark: "#297B79",
  darker: "#0F4652",
  contrastText: "#fff",
};
const SECONDARY = {
  lighter: "#E3EBFB",
  light: "#A6BAE9",
  main: "#6076B8",
  dark: "#304184",
  darker: "#121C58",
  contrastText: "#fff",
};
const INFO = {
  lighter: "#DEEAFF",
  light: "#9EBBFF",
  main: "#5E86FF",
  dark: "#2F4AB7",
  darker: "#12217A",
  contrastText: "#fff",
};
const SUCCESS = {
  lighter: "#EDFBD9",
  light: "#B6EC8C",
  main: "#67C13E",
  dark: "#328A1F",
  darker: "#0F5C0B",
  contrastText: GREY[800],
};
const WARNING = {
  lighter: "#FEF6CE",
  light: "#FDDA6C",
  main: "#F9B20C",
  dark: "#B37406",
  darker: "#774502",
  contrastText: GREY[800],
};
const ERROR = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF4842",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#fff",
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
};

const palette = (mode) => ({
  mode,
  ...(mode === "light"
    ? {
        common: { black: "#000", white: "#fff" },
        primary: { ...PRIMARY },
        secondary: { ...SECONDARY },
        info: { ...INFO },
        success: { ...SUCCESS },
        warning: { ...WARNING },
        error: { ...ERROR },
        grey: GREY,
        gradients: GRADIENTS,
        chart: CHART_COLORS,
        divider: GREY[500_32],
        text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
        background: { paper: "#fff", default: GREY[100], neutral: GREY[200] },
        action: {
          active: GREY[600],
          hover: GREY[500_8],
          selected: GREY[500_16],
          disabled: GREY[500_80],
          disabledBackground: GREY[500_24],
          focus: GREY[500_24],
          hoverOpacity: 0.08,
          disabledOpacity: 0.48,
        },
      }
    : {
        common: { black: "#000", white: "#fff" },
        primary: { ...PRIMARY },
        secondary: { ...SECONDARY },
        info: { ...INFO },
        success: { ...SUCCESS },
        warning: { ...WARNING },
        error: { ...ERROR },
        grey: GREY,
        gradients: GRADIENTS,
        chart: CHART_COLORS,
        divider: GREY[500_32],
        text: { primary: GREY[100], secondary: GREY[300], disabled: GREY[500] },
        background: {
          paper: GREY[900],
          default: GREY[900],
          neutral: GREY[200],
        },
        action: {
          active: GREY[600],
          hover: GREY[500_8],
          selected: GREY[500_16],
          disabled: GREY[500_80],
          disabledBackground: GREY[500_24],
          focus: GREY[500_24],
          hoverOpacity: 0.08,
          disabledOpacity: 0.48,
        },
      }),
});

export default palette;
