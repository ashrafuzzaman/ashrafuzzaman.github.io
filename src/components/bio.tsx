/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
      profileYaml {
          name
          summary
          designation
          links {
            twitter
          }
      }
    }
  `)

  const resume = data.profileYaml;
  const links = resume.links;

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      <p>
        Written by <strong>{resume.name}</strong> {resume?.summary || null}
        {` `}
        <a href={`https://twitter.com/${links?.twitter || ``}`}>
          You should follow them on Twitter
        </a>
      </p>
    </div>
  )
}

export default Bio
