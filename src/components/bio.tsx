/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

const Bio = () => {
  const { profileYaml: profile } = useStaticQuery(graphql`
    query {
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
  `)

  const links = profile.links;

  return (
    <Box>
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic-slim.webp"
          width={250}
          height={250}
          quality={95}
          alt="Profile picture"
        />

      <Box>
        <Typography variant="body2">
          Written by <strong>{profile.name}</strong> {profile?.summary || null}
          {` `}
          <a href={links?.twitter.url}>
            You should follow them on Twitter
          </a>
        </Typography>
      </Box>
      <Box>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </Box>
    </Box>
  )
}

export default Bio
