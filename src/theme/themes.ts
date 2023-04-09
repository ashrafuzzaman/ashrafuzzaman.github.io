import { ThemeOptions, useTheme } from "@mui/material";
import { deepOrange, lightBlue, grey, orange, blue } from "@mui/material/colors";
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
    text: {
      primary: grey[100],
      secondary: orange[300]
    },
    background: {
      default: 'white',
      paper: 'black'
    },
    divider: "#141820"
  },
};

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    text: {
      primary: grey[800],
      secondary: blue[900],
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h2: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: blue[900],
      "& a": {
        color: blue[900]
      }
    },
    subtitle1: {
      fontSize: "1rem",
      color: orange[800],
    },
    body1: {
      color: grey[900],
      "& h1": {
        fontSize: "1.5rem",
        color: "#141820",  
      },
      "& h2": {
        fontSize: "1.3rem",
        color: "#141820",  
      },
      "& a": {
        color: blue[800],  
      },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#212836"
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: blue[800],
          textDecoration: "none",
        }
      }
    }
  }
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
