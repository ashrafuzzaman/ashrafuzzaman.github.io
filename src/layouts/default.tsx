import * as React from "react";
import { Link } from "gatsby";
import Box from '@mui/material/Box';
import { ThemeWrapper } from '../theme';
import '../default-layout.css';


const Layout = ({ location, title, children }) => {

  return (
    <ThemeWrapper>
      <div className="box">
        <div className="element">
          <Box sx={{ justifyContent: 'center' }}>
            <Link to="/resume">Resume</Link>
            <Link to="/blog">Blog</Link>
            <br />

            {children}
          </Box>
        </div>
      </div>
    </ThemeWrapper >
  )
}

export default Layout
