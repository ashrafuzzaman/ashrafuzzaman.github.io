import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import React, { ReactNode, useMemo } from "react";

import { lightTheme } from "./themes";

const ThemeWrapper = (props: { children: ReactNode }) => {
  const { children } = props;

  const activeTheme = useMemo(() => {
    const generatedTheme = createTheme(lightTheme);
    const responsiveTheme = responsiveFontSizes(generatedTheme);
    return responsiveTheme;
  }, []);

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
