import { useMemo, useState } from "react";
// MUI
// import useMediaQuery from "@mui/material/useMediaQuery";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
// Other
import { cookieSet } from "components/hooks/cookie";
import { ThemeContext } from "context/ThemeContext";
import GetCustomizeTheme from "./GetCustomizeTheme";

const ThemeContextProvider = ({ children }) => {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // const colorScheme = cookie.get("color_scheme");
  // const [mode, setMode] = useState(
  //   colorScheme === "dark" ? "dark" : prefersDarkMode ? "dark" : "light"
  // );
  const [mode, setMode] = useState("light");

  const toggleTheme = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        cookieSet("color_scheme", mode === "light" ? "dark" : "light", 24, "/");
      },
    }),
    [mode]
  );

  const theme = useMemo(
    () => responsiveFontSizes(createTheme(GetCustomizeTheme(mode))),
    [mode]
  );

  return (
    <ThemeContext.Provider value={toggleTheme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
