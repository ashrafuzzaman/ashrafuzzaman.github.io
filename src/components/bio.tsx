/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Link, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Masonry } from '@mui/lab';


const Bio = () => {
  const theme = useTheme();

  const { profileYaml: profile } = useStaticQuery(graphql`
    query {
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
          linkedIn {
            alt
            url
          }
          github {
            alt
            url
          }
        }
        skills {
          title
          items
        }
      }
    }
  `)

  const links = profile.links;

  return (
    <Grid container justifyContent={"center"}>
      <Grid direction={'column'} sx={{ p: 3 }}>
        <StaticImage
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.png"
          width={150}
          height={150}
          quality={95}
          alt="Profile picture"
          imgStyle={{
            padding: "2px",
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          <Link href={profile.links.github.url} target="_blank" variant="body2" sx={{ pr: 1 }}>
            <GitHubIcon />
          </Link>
          <Link href={profile.links.linkedIn.url} target="_blank" variant="body2" sx={{ pr: 1 }}>
            <LinkedInIcon />
          </Link>
          <Link href={profile.links.twitter.url} target="_blank" variant="body2">
            <TwitterIcon />
          </Link>
        </Box>
      </Grid>
      <Grid sx={{ m: 0, borderLeftColor: theme.palette.divider, borderLeftStyle: "solid", borderLeftWidth: "1px" }}>
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" color={theme.palette.text.primary}>{profile.name}</Typography>
          <Typography variant="caption" display={"inline-block"} sx={{ mb: 3 }} color={theme.palette.text.primary}>
            {profile.designation}@{profile.company}
          </Typography>
          <Typography variant="body1">
            <div dangerouslySetInnerHTML={{ __html: profile.summary.html }} />
            <Typography variant="body1" sx={{ mb: 2 }}>The technologies I am working on recently are,</Typography>
            <Masonry columns={2} spacing={2}>
              {profile.skills.map((skill, index) => (
                <Box key={index}>
                  <Typography fontWeight={700} sx={{ background: theme.palette.divider, p: 1 }}>{skill.title}</Typography>
                  <List>
                    {skill.items.map((skill, skillIndex) => (
                      <ListItem key={skillIndex} sx={{ m: 0, pl: 2, pb: 0, pt: 0 }}>
                        <ListItemText primary={skill} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Masonry>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Bio
