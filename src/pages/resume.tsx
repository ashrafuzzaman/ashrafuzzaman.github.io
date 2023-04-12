import * as React from "react"
import { graphql } from "gatsby"

import ThemeWrapper from '../theme/LightThemeWrapper';
import Seo from "../components/seo"
import { Avatar, Box, Grid, GridProps, Link, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, TypographyProps, styled, useTheme } from '@mui/material';
import Experience from '../components/experience';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../print.css";
import profileImg from "../images/profile-pic-slim.webp";


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
    "& h3": {
      fontSize: "1.3rem",
      fontWeight: "500",
      marginTop: ".5rem",
    },
    "& h4": {
      fontSize: "1rem",
      fontWeight: "500",
      marginTop: "1rem",
      padding: ".3rem .5rem",
      background: "#e4d0b2",
    },
    "& li": {
      fontSize: "1rem",
      paddingLeft: ".3rem",
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

  const ProfilePicture = ({ size }) => (
    <Avatar
      src={profileImg}
      variant="square"
      sx={{
        width: size,
        height: size,
        margin: "0 auto",
        "& img": {
          objectFit: "contain",
        },
        "@media print": {
          maxWidth: "200px",
        },
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
        <Box sx={{ pageBreakInside: "avoid" }}>
          <Typography variant="h4">{skill.title}</Typography>
          <Typography variant="body1">{skill.items.map(skill => <li>{skill}</li>)}</Typography>
        </Box>
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
            <LeftColumn item md={3} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Stack>
                <ProfilePicture size={250} />
                <GeneralHeading>Contact</GeneralHeading>
                <ContactInfo contacts={contacts} />
                <GeneralHeading>Skills</GeneralHeading>
                <Skills skills={profile.skills} />
              </Stack>
            </LeftColumn>
            <RightColumn item md={9} sx={{ background: colors.column.right }}>
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
