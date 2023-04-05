import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../layouts/default"
import Seo from "../components/seo"

const Resume = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const profile = data.profileYaml;

  return (
    <Layout location={location} title={siteTitle}>
      {profile.name}
      <br />
      {profile.designation}
      <h3>Skills:</h3>
      {profile.skills.map(skill => {
        return (
          <div>
            { skill.title }
            { skill.items.map(skill => <li>{skill}</li>) }
          </div>
        )
      })}
      <h3>Experience:</h3>
      {profile.experiences.map(exp => {
        return (
          <li>
            { exp.title }
          </li>
        )
      })}
    </Layout>
  )
}

export default Resume

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" description="All blog posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    profileYaml {
      name
      summary {
        html
      }
      designation
      links {
        twitter {
          alt
          url
        }
      }
      skills {
        title
        items
      }
      experiences {
        title
      }
    }
  }
`
