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
  typography: {
    subtitle1: {
      color: orange[300],
    },
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

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#141820",
      dark: "#141820",
    },
    text: {
      primary: "#141820",
      secondary: orange[800],
    },
  },
  typography: {
    h1: {
      color: blue[800],
    },
    subtitle1: {
      color: orange[800],
    },
    subtitle2: {
      fontStyle: "italic",
      color: orange[800],
    },
    body1: {
      color: grey[900],
      "& h1": {
        color: "#141820",
      },
      "& h2": {
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
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "1rem",
        },
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
