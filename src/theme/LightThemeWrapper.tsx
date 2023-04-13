import { CacheProvider } from "@emotion/react";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import React, { ReactNode, useMemo } from "react";

import { lightTheme, muiCache } from "./themes";

const ThemeWrapper = (props: { children: ReactNode }) => {
  const { children } = props;

  const activeTheme = useMemo(() => {
    const generatedTheme = createTheme(lightTheme);
    const responsiveTheme = responsiveFontSizes(generatedTheme);
    return responsiveTheme;
  }, []);

  return (
    // <CacheProvider value={muiCache}>
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
    // </CacheProvider>
  );
};

export default ThemeWrapper;
