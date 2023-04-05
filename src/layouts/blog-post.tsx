import * as React from "react"
import { Link } from "gatsby"
import { Button, Grid } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';

const BlogPostLayout = ({ location, title, children }) => {
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
      <Grid>
        <Button variant="outlined" href="/" startIcon={<HomeIcon />}>
          Back to home
        </Button>
        <Button sx={{ml: "10px"}} variant="outlined" href="/blog" startIcon={<HomeIcon />}>
          Back to blog index
        </Button>
      </Grid>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default BlogPostLayout
