import * as React from "react"
import { Link } from "gatsby"
import { Button, Grid } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import BlogIndexLayout from './blog-index';

const BlogPostLayout = ({ location, title, children }) => {


  return (
    <BlogIndexLayout>
      {children}
    </BlogIndexLayout>
  )
}

export default BlogPostLayout
