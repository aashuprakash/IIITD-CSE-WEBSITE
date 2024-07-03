import { createTheme } from '@mui/material/styles';
import themeConstants from './themeConstants';

const theme = createTheme({
  palette: {
    primary: themeConstants.primary,
    background: themeConstants.background,
    text: {
      primary: themeConstants.fg.main,
      secondary: themeConstants.fg.dark,
    },
  },
  breakpoints: {
    values: themeConstants.breakpoints,
  },
  typography: {
    fontFamily: themeConstants.font.body,
    button: {
      textTransform: 'none',
    },
  },
});

export { theme };
