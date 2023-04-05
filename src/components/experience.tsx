/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses } from '@mui/lab';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Experience = () => {
  const theme = useTheme();

  const { profileYaml: profile } = useStaticQuery(graphql`
    query {
      profileYaml {
        experiences {
          title
          company
          from
          till
          brief {
            html
          }
          responsibilities
        }
      }
    }
  `)

  const experiences = profile.experiences;

  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {experiences.map((experience) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" color={theme.palette.text.primary} display={"inline-block"}>{experience.title} @ {experience.company}</Typography>
            <Typography variant="subtitle1" color={theme.palette.text.secondary} sx={{ ml: "20px" }} display={"inline-block"}>
              {experience.from} to {experience.till}
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
              <div dangerouslySetInnerHTML={{ __html: experience.brief.html }} />
            </Typography>
            {experience.responsibilities ? (
              <Typography variant="body1">
                <List>
                  {experience.responsibilities.map((responsibility, index) => (
                    <ListItem key={index} sx={{ m: 0, p: 0 }}>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText primary={responsibility} />
                    </ListItem>
                  ))}
                </List>
              </Typography>
            ) : ""}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default Experience