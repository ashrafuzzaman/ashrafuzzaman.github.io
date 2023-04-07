import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../layouts/default"
import Seo from "../components/seo"
import { Box, BoxProps, CircularProgress, Fade, Grid, Hidden, ListItemIcon, MenuItem, MenuList, Stack, Tab, Tabs, Typography, styled } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Experience from '../components/experience'


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
      deeperBackground: '#141820',
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

  const handleTabChange = (newValue: number) => {
    setTabIndex(newValue);
  };

  const Circle = (props: { color: string }) => (
    <Box sx={{
      ml: 1,
      float: "right",
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: props.color,
      '&:hover': {
        backgroundColor: props.color,
        opacity: [0.9, 0.8, 0.7],
      },
    }} />
  );

  const DummyWindowActions = () => (
    <Grid
      sx={{
        display: "flex",
        width: "100%",
      }}
      justifyContent="flex-end"
      alignItems={"center"}
    >
      <Stack direction="row" justifyContent="end">
        <Circle color={colors.nav.circles.green} />
        <Circle color={colors.nav.circles.yellow} />
        <Circle color={colors.nav.circles.red} />
      </Stack>
    </Grid>
  );

  const borderRadius = '10px';
  const responsiveBorderRadius = {
    xs: 0,
    lg: borderRadius
  };

  const WindowTopBar = () => (
    <Box sx={{
      pt: 1,
      pb: 1,
      pr: 1,
      bgcolor: colors.editor.background,
      borderTopLeftRadius: responsiveBorderRadius,
      borderTopRightRadius: responsiveBorderRadius,
      borderBottom: 1,
      borderColor: colors.nav.deeperBackground,
    }}>
      <Grid container display={"flex"} justifyContent={"end"}>
        <Typography display={'inline'}><DummyWindowActions /></Typography>
      </Grid>
    </Box>
  );

  const Footer = () => (
    <Box sx={{
      p: 1,
      pl: 2,
      bgcolor: colors.editor.background,
      borderBottomLeftRadius: responsiveBorderRadius,
      borderBottomRightRadius: responsiveBorderRadius,
      borderTop: 1,
      borderColor: colors.nav.deeperBackground,
    }}>
      <Grid container color={colors.editor.text}>
        <Grid sx={{ display: "flex" }}
          md={10}
          alignItems={"center"}
        >
          <CancelIcon fontSize="small" /><Typography display={'inline'} sx={{ pl: 1, pr: 1 }}>0</Typography>
          <WarningAmberIcon fontSize="small" /><Typography display={'inline'} sx={{ pl: 1 }}>0</Typography>
        </Grid>
        <Grid md={2} textAlign={'right'}>
          <Typography sx={{ pr: 1 }} display={'inline'}>Typescript</Typography>
        </Grid>
      </Grid>
    </Box>
  );

  interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
  }

  const EditorTabs = styled((props: StyledTabsProps) => (
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

  const EditorTab = styled((props: StyledTabProps) => (
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
        style={{ minWidth: '600px', color: colors.editor.text }}
        {...other}
      >
        {value === index && (
          <Grid container>
            <Hidden lgDown>
              <Box sx={{ backgroundColor: colors.nav.deeperBackground }}>
                <MenuList>
                  <MenuItem selected={tabIndex == 0} sx={{ pt: 1 }} onClick={() => { handleTabChange(0) }}>
                    <AccountBoxIcon />
                  </MenuItem>
                  <MenuItem selected={tabIndex == 1} sx={{ pt: 1 }} onClick={() => { handleTabChange(1) }}>
                    <CalendarMonthIcon />
                  </MenuItem>
                </MenuList>
              </Box>
            </Hidden>
            <Fade in={true}>
              <Box display={"inline-block"} sx={{ maxWidth: "1100px" }}>
                {children}
              </Box>
            </Fade>
          </Grid>
        )}
      </div>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Box sx={{
        bgcolor: colors.editor.background,
        borderRadius: responsiveBorderRadius,
      }}>
        <WindowTopBar />
        <EditorTabs
          value={tabIndex}
          onChange={(event, index) => { handleTabChange(index) }}
          sx={{ borderRadius: responsiveBorderRadius }}
        >
          <EditorTab label="Profile" />
          <EditorTab label="Experience" />
          <EditorTab component="a" label="Blog" href="/blog" />
        </EditorTabs>
        <TabPanel value={tabIndex} index={0}>
          <Bio></Bio>
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <Experience />
        </TabPanel>
        <TabPanel value={tabIndex} index={2}>
          <CircularProgress />
        </TabPanel>
        <Footer />
      </Box>
    </Layout >
  );
}

export default Index

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="A.K.M. Ashrafuzzaman Jitu" description="Introduction to Ashrafuzzaman Jitu" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
