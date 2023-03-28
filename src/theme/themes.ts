import { ThemeOptions, useTheme } from "@mui/material";
import { deepOrange, lightBlue } from "@mui/material/colors";
import { createMakeAndWithStyles } from "tss-react";

import { makeMuiCache } from "./cache";

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: lightBlue[800],
      contrastText: lightBlue[900],
    },
    secondary: {
      main: deepOrange[800],
      contrastText: deepOrange[900],
    },
  },
};

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: lightBlue[800],
      contrastText: lightBlue[900],
    },
    secondary: {
      main: deepOrange[800],
      contrastText: deepOrange[900],
    },
  },
};

export const muiCache = makeMuiCache();

export const { makeStyles, withStyles } = createMakeAndWithStyles({
  useTheme,
  /*
  OR, if you have extended the default mui theme adding your own custom properties:
  Let's assume the myTheme object that you provide to the <ThemeProvider /> is of
  type MyTheme then you'll write:
  */
  // "useTheme": useTheme as (()=> MyTheme)
});
