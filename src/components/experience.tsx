/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, useTheme } from '@mui/material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses } from '@mui/lab';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Experience = ({ experiences }) => {
  const theme = useTheme();

  return (
    experiences.map((experience) => (
      <Timeline
        sx={{
          margin: 0,
          padding: 0,
          paddingTop: "1rem",
          "& a": {
            color: theme.palette.primary.main,
          },
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
          pageBreakInside: "avoid",
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ pt: 0 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: "space-between" }}>
              <Typography variant="h6" fontWeight={550} color={theme.palette.text.primary}>{experience.title}</Typography>
              <Typography variant="subtitle2">{experience.from} to {experience.till}</Typography>
            </Stack>
            <Typography variant="subtitle1" color={theme.palette.primary.dark} fontWeight={550}>{experience.company}</Typography>
            {experience.brief ? (
              <Typography variant="body1" color={theme.palette.text.primary}
                sx={{
                  "& p": {
                    marginBlockStart: 0,
                    marginBlockEnd: 0,
                    fontSize: "1rem",
                  }
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: experience.brief.html }} />
              </Typography>
            ) : ""}
            {experience.responsibilities ? (
              <Typography variant="body1">
                <List>
                  {experience.responsibilities.map((responsibility, index) => (
                    <ListItem key={index} sx={{ m: 0, p: 0, alignItems: "flex-start" }}>
                      <ListItemIcon sx={{ minWidth: "34px", mt: "3px" }}>
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
      </Timeline>
    ))
  )
}

export default Experience
