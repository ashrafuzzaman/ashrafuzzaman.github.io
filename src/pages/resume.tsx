import * as React from "react"
import { graphql } from "gatsby"

import ThemeWrapper from '../theme/LightThemeWrapper';
import Seo from "../components/seo"
import { Box, Grid, GridProps, Link, List, ListItem, ListItemIcon, ListItemText, Typography, TypographyProps, styled, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import Experience from '../components/experience';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../print.css"


const Resume = ({ data, location }) => {
  const theme = useTheme();

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
    color: theme.palette.text.primary,
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
    "@media print": {
      maxWidth: "70vw",
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

  const ProfilePicture = ({ size }: { size: number }) => (
    <StaticImage
      formats={["auto", "webp", "avif"]}
      src="../images/profile-pic-slim.webp"
      width={size}
      height={size}
      quality={95}
      alt="Profile picture"
      imgStyle={{
        padding: "2px",
      }}
    />
  );

  const ContactInfo = ({ contacts }) => (
    <List dense>
      {contacts.map((contact) => (
        <ListItem sx={{ padding: 0 }}>
          <ListItemIcon sx={{ minWidth: "30px" }}>
            {contact.icon}
          </ListItemIcon>
          <ListItemText>
            {contact.url ? <Link href={contact.url} target="_blank">{contact.text}</Link> : contact.text}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );

  const Skills = ({ skills }) => (
    skills.map(skill => {
      return (
        <div>
          <Typography variant="h4">{skill.title}</Typography>
          <Typography variant="body1">{skill.items.map(skill => <li>{skill}</li>)}</Typography>
        </div>
      )
    })
  );

  const contacts = [
    {
      icon: <EmailIcon fontSize="small" />,
      text: profile.contact.email
    },
    {
      icon: <LocalPhoneIcon fontSize="small" />,
      text: profile.contact.phone
    },
    {
      icon: <LocationOnIcon fontSize="small" />,
      text: profile.contact.location
    },
    {
      icon: <GitHubIcon fontSize="small" />,
      url: profile.links.github.url,
      text: profile.links.github.alt,
    },
    {
      icon: <LinkedInIcon fontSize="small" />,
      url: profile.links.linkedIn.url,
      text: profile.links.linkedIn.alt
    },
  ];

  return (
    <ThemeWrapper>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ margin: "auto" }}>
          <Grid container sx={{ maxWidth: 1200 }}>
            <LeftColumn item sm={3}>
              <ProfilePicture size={200} />
              <GeneralHeading>Contact</GeneralHeading>
              <ContactInfo contacts={contacts} />
              <GeneralHeading>Skills</GeneralHeading>
              <Skills skills={profile.skills} />
            </LeftColumn>
            <RightColumn item sm={9} sx={{ background: colors.column.right }}>
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
export const Head = () => <Seo title="Resume of A.K.M. Ashrafuzzaman Jitu" />
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
      contact {
        email
        phone
        location
      }
      links {
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
`
