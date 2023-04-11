import * as React from "react";
import Box from '@mui/material/Box';
import ThemeWrapper from '../theme/DarkThemeWrapper';


const Layout = ({ location, title, children }) => {

  return (
    <ThemeWrapper>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Box sx={{ margin: "auto" }}>
          <Box sx={{ justifyContent: 'center' }}>
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeWrapper >
  )
}

export default Layout
