import PropTypes from "prop-types";
import { useMemo, useState } from "react";
// material
import { CssBaseline, responsiveFontSizes } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
//
import palette from "./palette";
import typography from "./typography";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";
import { ThemeContext } from "../context/ThemeContext";

// ----------------------------------------------------------------------

const ThemeContextProvider = ({ children }) => {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // const colorScheme = cookie.get("color_scheme");
  // const [mode, setMode] = useState(
  //   colorScheme === "dark" ? "dark" : prefersDarkMode ? "dark" : "light"
  // );
  const getThemeMode = localStorage.getItem("themeMode");
  const [mode, setMode] = useState(getThemeMode === "dark" ? "dark" : "light");

  const toggleTheme = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        localStorage.setItem("themeMode", mode === "light" ? "dark" : "light");
        // cookieSet("color_scheme", mode === "light" ? "dark" : "light", 24, "/");
      },
    }),
    [mode]
  );

  const themeOptions = useMemo(
    () => ({
      palette: palette(mode),
      shape: { borderRadius: 8 },
      typography,
      shadows,
      customShadows,
    }),
    [mode]
  );

  const theme = responsiveFontSizes(createTheme(themeOptions));
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeContextProvider;
