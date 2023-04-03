import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../layouts/default"
import Seo from "../components/seo"
import { Box, Fade, Grid, ListItemIcon, MenuItem, MenuList, Stack, Tab, Tabs, Typography, styled } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const [tabIndex, setTabIndex] = React.useState(0);
  const colors = {
    editor: {
      background: '#212836',
      text: 'rgba(255, 255, 255, 0.7)',
    },
    nav: {
      background: '#1C212E',
      selectedBackground: '#212836',
      highlight: '#212122',
      underline: '#EC4646',
      text: {
        selected: '#FFF',
        unSelected: 'rgba(255, 255, 255, 0.7)',
      },
      circles: {
        red: "#FF5D5A",
        yellow: "#FFBF2A",
        green: "#24CA42",
      }
    }
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
  }

  const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      width: '100%',
      backgroundColor: colors.nav.underline,
    },
    '& .MuiTabs-flexContainer': {
      backgroundColor: colors.nav.background,
    },
    '& .Mui-selected': {
      backgroundColor: colors.nav.selectedBackground,
    },
  });

  interface StyledTabProps {
    label: string;
    component?: string;
    href?: string;
  }

  const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
  ))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: colors.nav.text.unSelected,
    '&.Mui-selected': {
      fontWeight: theme.typography.fontWeightBold,
      color: colors.nav.text.selected,
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }));

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        style={{ minWidth: '600px', minHeight: '400px', color: colors.editor.text }}
        {...other}
      >
        {value === index && (
          <Fade in={true}>
            <Grid container>
              <Box sx={{ backgroundColor: colors.nav.background, height: '400px' }}>
                <MenuList>
                  <MenuItem>
                    <AccountBoxIcon />
                  </MenuItem>
                  <MenuItem sx={{ pt: 1 }}>
                    <CalendarMonthIcon />
                  </MenuItem>
                </MenuList>
              </Box>
              <Box sx={{ p: 3 }} display={"inline-block"}>
                {children}
              </Box>
            </Grid>
          </Fade>
        )}
      </div>
    );
  }

  const borderRadius = '10px';
  return (
    <Layout location={location} title={siteTitle}>
      <Box sx={{
        bgcolor: colors.editor.background,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius
      }}>
        <StyledTabs
          value={tabIndex}
          onChange={handleChange}
          sx={{ borderRadius }}
        >
          <StyledTab label="Profile" />
          <StyledTab label="Experience" />
          <StyledTab component="a" label="Blog" href="/blog" />
          <Grid
            sx={{
              display: "flex",
              width: "100%",
              pr: 2
            }}
            justifyContent="flex-end"
            alignItems={"center"}
          >
            <Stack direction="row" justifyContent="end">
              <Box
                sx={{
                  ml: 1,
                  float: "right",
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: colors.nav.circles.green,
                  '&:hover': {
                    backgroundColor: colors.nav.circles.green,
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              />
              <Box
                sx={{
                  ml: 1,
                  float: "right",
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: colors.nav.circles.yellow,
                  '&:hover': {
                    backgroundColor: colors.nav.circles.yellow,
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              />
              <Box
                sx={{
                  ml: 1,
                  float: "right",
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: colors.nav.circles.red,
                  '&:hover': {
                    backgroundColor: colors.nav.circles.red,
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              />
            </Stack>
          </Grid>
        </StyledTabs>
        <TabPanel value={tabIndex} index={0}>
          <Bio></Bio>
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          Experience
        </TabPanel>
      </Box>
      <Box sx={{
        p: 1,
        pl: 2,
        bgcolor: colors.editor.background,
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        borderTop: 1,
      }}>
        <Grid container color={colors.editor.text}>
          <Grid sx={{ display: "flex", }}
            md={10}
            alignItems={"center"}>
            <CancelIcon fontSize="small" /><Typography display={'inline'} sx={{ pl: 1, pr: 1 }}>0</Typography>
            <WarningAmberIcon fontSize="small" /><Typography display={'inline'} sx={{ pl: 1 }}>0</Typography>
          </Grid>
          <Grid md={2} textAlign={'right'}>
            <Typography sx={{ pr: 1 }} display={'inline'}>Typescript</Typography>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

export default Index

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
  }
`
