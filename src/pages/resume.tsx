import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import { Box, CssBaseline, Grid, GridProps, Hidden, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, TypographyProps, styled, useTheme } from '@mui/material';
import Experience from '../components/experience';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PrintIcon from '@mui/icons-material/Print';
import HomeIcon from '@mui/icons-material/Home';
import "../styles/print.css";
import { StaticImage } from 'gatsby-plugin-image';


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
    <Typography variant="h5" {...props} />
  ))({
    padding: ".8rem 0 .2rem 0",
    borderBottomStyle: "solid",
    borderBottomColor: "#aaa",
    borderBottomWidth: "thin",
  });

  const ProfilePicture = () => (
    <StaticImage
      formats={["auto", "webp", "avif"]}
      src="../images/profile-pic-slim.webp"
      width={350}
      height={350}
      quality={95}
      alt="Profile picture"
      imgStyle={{
        padding: "2px",
        objectFit: "contain"
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
          <ListItemText sx={{ margin: 0, "& span": { fontSize: "1rem" } }}>
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
          <Typography variant="h6" sx={{
            marginTop: "1rem",
            padding: ".3rem .5rem",
            background: "#e4d0b2",
          }}>
            {skill.title}
          </Typography>
          <Typography variant="body1">{skill.items.map(skill => <li>{skill}</li>)}</Typography>
        </Box>
      )
    })
  );

  const ActionButtons = () => (
    <Stack direction={"row"} sx={{ displayPrint: "none" }}>
      <IconButton aria-label="Print" onClick={() => { window.print(); }}>
        <PrintIcon />
      </IconButton>
      <IconButton aria-label="Print" href="/">
        <HomeIcon />
      </IconButton>
    </Stack>
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
    <Box sx={{ display: "flex" }}>
      <CssBaseline enableColorScheme />
      <Box sx={{ margin: "auto" }}>
        <Grid container sx={{ maxWidth: 1200 }}>
          <LeftColumn item md={3} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Stack>
              <ProfilePicture />
              <Hidden mdUp>
                <Typography variant="h3" sx={{ marginTop: "1rem" }} color={theme.palette.primary.dark}>{profile.name}</Typography>
                <Typography variant="h5">{profile.designation}, {profile.company}</Typography>
                <ActionButtons />
              </Hidden>
              <GeneralHeading>Contact</GeneralHeading>
              <ContactInfo contacts={contacts} />
              <GeneralHeading>Skills</GeneralHeading>
              <Skills skills={profile.skills} />
            </Stack>
          </LeftColumn>
          <RightColumn item md={9} sx={{ background: colors.column.right }}>
            <Hidden mdDown>
              <Stack direction={"row"} sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
                <Typography variant="h3" color={theme.palette.primary.dark}>{profile.name}</Typography>
                <ActionButtons />
              </Stack>
              <Typography variant="h5">{profile.designation}, {profile.company}</Typography>
            </Hidden>
            <GeneralHeading>Experience</GeneralHeading>
            <Experience />
          </RightColumn>
        </Grid>
      </Box>
    </Box>
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
