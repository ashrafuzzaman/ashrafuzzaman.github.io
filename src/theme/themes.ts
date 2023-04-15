import { ThemeOptions, useTheme } from "@mui/material";
import { deepOrange, lightBlue, grey, orange, blue } from "@mui/material/colors";
import { createMakeAndWithStyles } from "tss-react";

import { makeMuiCache } from "./cache";

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: lightBlue[400],
      dark: orange[300],
      contrastText: lightBlue[900],
    },
    secondary: {
      main: orange[300],
      contrastText: deepOrange[900],
    },
    text: {
      primary: lightBlue[400],
      secondary: orange[300]
    },
    background: {
      default: 'white',
      paper: 'black'
    },
    divider: "#141820"
  },
  typography: {
    subtitle2: {
      fontStyle: "italic",
      color: orange[300],
    },
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0,
        }
      }
    }
  }
};

export const muiCache = makeMuiCache();

export const { makeStyles, withStyles } = createMakeAndWithStyles({
  useTheme,
});
