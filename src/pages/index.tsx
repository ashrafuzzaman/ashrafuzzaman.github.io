import * as React from "react"
import { graphql } from "gatsby"

import Profile from "../components/profile"
import Layout from "../layouts/default"
import Seo from "../components/seo"
import { Box, CircularProgress, Grid } from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Experience from '../components/experience'
import Editor from '../components/editor'


const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Editor contents={[
        {
          title: "Profile",
          icon: <AccountBoxIcon />,
          component: <Profile />,
        },
      ]} />
    </Layout >
  );
}

export default Index

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="A.K.M. Ashrafuzzaman Jitu" description="Introduction to Ashrafuzzaman Jitu" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
