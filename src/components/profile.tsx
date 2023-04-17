/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Grid, Hidden, Link, List, ListItem, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material'
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Masonry } from '@mui/lab';
import ArticleIcon from '@mui/icons-material/Article';
import { StaticImage } from 'gatsby-plugin-image';


const Profile = () => {
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
          blog {
            alt
            url
          }
          blogOnDistributedSystem {
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

  const ProfilePicture = () => (
    <StaticImage
      formats={["auto", "webp"]}
      src="../images/profile-pic-slim.webp"
      width={250}
      height={250}
      quality={100}
      alt="Profile picture"
      imgStyle={{
        objectFit: "contain"
      }}
    />
  );

  const links = [
    {
      icon: <ContactPageIcon color="secondary" fontSize="small" />,
      text: "Resume",
      url: "/resume",
    },
    {
      icon: <LinkedInIcon color="secondary" fontSize="small" />,
      text: profile.links.linkedIn.alt,
      url: profile.links.linkedIn.url,
      target: "_blank",
    },
    {
      icon: <GitHubIcon color="secondary" fontSize="small" />,
      text: profile.links.github.alt,
      url: profile.links.github.url,
      target: "_blank",
    },
    {
      icon: <ArticleIcon color="secondary" fontSize="small" />,
      text: profile.links.blog.alt,
      url: profile.links.blog.url,
    },
    {
      icon: <ArticleIcon color="secondary" fontSize="small" />,
      text: profile.links.blogOnDistributedSystem.alt,
      url: profile.links.blogOnDistributedSystem.url,
    },
  ];

  return (
    <Grid container justifyContent={"center"}>
      <Grid direction={'column'} sx={{ p: 3 }}>
        <ProfilePicture />
        <List>
          {links.map((link) => (
            <ListItem sx={{ padding: 0 }}>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                {link.icon}
              </ListItemIcon>
              <ListItemText sx={{ "& a": { color: theme.palette.primary.main } }}>
                {link.url ? <Link href={link.url} target={link.target || "_parent"}>{link.text}</Link> : link.text}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid sx={{
        m: 0, borderLeftColor: theme.palette.divider,
        borderLeftStyle: {
          xs: "none",
          lg: "solid",
        },
        borderLeftWidth: "1px", maxWidth: "900px"
      }}>
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" color={theme.palette.text.primary}>{profile.name}</Typography>
          <Typography variant="caption" display={"inline-block"} sx={{ mb: 1 }} color={theme.palette.text.primary}>
            {profile.designation}@{profile.company}
          </Typography>
          <Typography variant="body1">
            <Typography
              variant="body1"
              sx={{
                "& a": { color: theme.palette.text.primary }
              }}
              dangerouslySetInnerHTML={{ __html: profile.summary.html }}>
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>The technologies I am working on recently are,</Typography>
            <Masonry columns={2} spacing={2}>
              {profile.skills.map((skill, index) => (
                <Box key={index}>
                  <Typography sx={{ background: theme.palette.divider, p: 1 }}>{skill.title}</Typography>
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

export default Profile
