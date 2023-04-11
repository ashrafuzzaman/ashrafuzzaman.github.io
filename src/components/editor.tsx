import * as React from "react"

import { Box, CircularProgress, Fade, Grid, Hidden, MenuItem, MenuList, Stack, Tab, Tabs, Typography, styled } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

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
    <Grid container color={colors.editor.text} sx={{ display: "flex", justifyContent: "space-between" }}>
      <Grid sx={{ display: "flex" }} alignItems={"center"}>
        <CancelIcon fontSize="small" /><Typography display={'inline'} sx={{ pl: 1, pr: 1 }}>0</Typography>
        <WarningAmberIcon fontSize="small" /><Typography display={'inline'} sx={{ pl: 1 }}>0</Typography>
      </Grid>
      <Grid>
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

interface EditorContent {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  component?: React.ReactNode;
}
interface EditorProps {
  contents: EditorContent[];
}

function Editor({ contents }: EditorProps) {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{
      bgcolor: colors.editor.background,
      borderRadius: responsiveBorderRadius,
    }}>
      <WindowTopBar />
      <EditorTabs
        value={tabIndex}
        onChange={(event, index) => { handleTabChange(index) }}
      >
        {contents.map((content) => (
          content.href ? <EditorTab component="a" label={content.title} href={content.href} /> : <EditorTab label={content.title} />
        ))}
      </EditorTabs>
      {contents.map((content, tabContentIndex) => (
        <div
          role="tabpanel"
          hidden={tabIndex !== tabContentIndex}
          id={`simple-tabpanel-${tabContentIndex}`}
          aria-labelledby={`simple-tab-${tabContentIndex}`}
          style={{ minWidth: '600px', color: colors.editor.text }}
        >
          {tabIndex === tabContentIndex && (
            <Grid container>
              <Hidden lgDown>
                <Box sx={{ backgroundColor: colors.nav.deeperBackground }}>
                  <MenuList>
                    {contents.map((content, iconIndex) => (
                      content.icon &&
                      <MenuItem selected={tabIndex == iconIndex} sx={{ pt: 1 }} onClick={() => { handleTabChange(iconIndex) }}>
                        {content.icon}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Box>
              </Hidden>
              <Fade in={true}>
                <Box display={"inline-block"} sx={{ maxWidth: "1100px" }}>
                  {content.component ? content.component :
                    <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "300px", minWidth: "600px" }}>
                      <CircularProgress />
                    </Grid>
                  }
                </Box>
              </Fade>
            </Grid>
          )}
        </div>
      ))}
      <Footer />
    </Box>
  );
}

export default Editor;
