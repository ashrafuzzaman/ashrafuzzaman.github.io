import { Typography, styled } from '@mui/material'


const ArticleContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: 8,
  borderRadius: 4,
  "& h1": {
    color: theme.palette.text.secondary,
  },
}));


export default ArticleContent;
