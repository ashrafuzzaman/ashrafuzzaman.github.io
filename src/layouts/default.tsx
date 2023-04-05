import * as React from "react";
import Box from '@mui/material/Box';
import ThemeWrapper from '../theme/DarkThemeWrapper';
import '../default-layout.css';


const Layout = ({ location, title, children }) => {

  return (
    <ThemeWrapper>
      <div className="box">
        <div className="element">
          <Box sx={{ justifyContent: 'center' }}>
            {children}
          </Box>
        </div>
      </div>
    </ThemeWrapper >
  )
}

export default Layout
