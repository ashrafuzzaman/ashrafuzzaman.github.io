import * as React from "react";
import { Link } from "gatsby";
import Box from '@mui/material/Box';
import { ThemeWrapper } from '../theme';


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <ThemeWrapper>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main>
          <Box sx={{ justifyContent: 'center' }}>
            <Link to="/resume">Resume</Link>
            <Link to="/blog">Blog</Link>
            <br />

            {children}
          </Box>
        </main>
      </div>
    </ThemeWrapper>
  )
}

export default Layout
