import * as React from "react"
import { graphql } from "gatsby"

import ThemeWrapper from '../theme/LightThemeWrapper';
import Seo from "../components/seo"
import { Box, Grid, GridProps, Typography, TypographyProps, styled } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import Experience from '../components/experience';


const Resume = ({ data, location }) => {
  const profile = data.profileYaml;
  const colors = {
    column: {
      left: "#F0E5D4",
      right: "#FFF9F1",
    }
  }

  const LeftColumn = styled((props: GridProps) => (
    <Grid {...props} />
  ))({
    background: colors.column.left,
    maxWidth: "220px",
    padding: "40px 20px",
    "@media print": {
      maxWidth: "30vw"
    },
    "& h4": {
      fontSize: "1rem",
      fontWeight: "600",
      marginTop: "1rem",
      padding: ".3rem .5rem",
      background: "#e4d0b2",
    },
    "& li": {
      fontSize: ".8rem",
    }
  });

  const RightColumn = styled((props: GridProps) => (
    <Grid {...props} />
  ))({
    background: colors.column.right,
    padding: "40px 20px",
    maxWidth: "580px",
    "@media print": {
      maxWidth: "70vw",
      "@page": {
        "li.MuiTimelineItem-root": {
          padding: "20px 0px"
        },
      },
    },
  });

  const GeneralHeading = styled((props: TypographyProps) => (
    <Typography variant="h3" {...props} />
  ))({
    padding: "10px 0",
    borderBottomStyle: "solid",
    borderBottomColor: "#aaa",
    borderBottomWidth: "thin",
  });

  return (
    <ThemeWrapper>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ margin: "auto" }}>
          <Grid container>
            <LeftColumn>
              <StaticImage
                formats={["auto", "webp", "avif"]}
                src="../images/profile-pic-slim.webp"
                width={200}
                height={200}
                quality={95}
                alt="Profile picture"
                imgStyle={{
                  padding: "2px",
                }}
              />

              <GeneralHeading>Skills</GeneralHeading>
              {profile.skills.map(skill => {
                return (
                  <div>
                    <Typography variant="h4">{skill.title}</Typography>
                    {skill.items.map(skill => <li>{skill}</li>)}
                  </div>
                )
              })}
            </LeftColumn>
            <RightColumn sx={{ background: colors.column.right }}>
              <Typography variant="h1">{profile.name}</Typography>
              <Typography variant="h2">{profile.designation}, {profile.company}</Typography>
              <GeneralHeading>Experience</GeneralHeading>
              <Box sx={{ maxWidth: "800px" }}>
                <Experience />
              </Box>
            </RightColumn>
          </Grid>
        </Box>
      </Box>
    </ThemeWrapper>
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
      company
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
