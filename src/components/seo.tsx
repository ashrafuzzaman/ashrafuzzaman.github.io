/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

type Props = { title: string, description?: string, children?: JSX.Element | JSX.Element[] };

const Seo = ({ title, description, children }: Props) => {
  const { site, profileYaml: profile } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        profileYaml {
          name
          summary
          designation
          links {
            twitter {
              alt
              url
            }
          }
      }
    }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={profile.links?.twitter.alt || ``}
      />
      <meta name="twitter:title" content={profile.links?.twitter.alt} />
      <meta name="twitter:description" content={profile.links?.twitter.alt} />
      {children}
    </>
  )
}

export default Seo
