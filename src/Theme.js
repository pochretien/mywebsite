import {createTheme} from "@mui/material";
import baskerville from './fonts/LibreBaskerville-Regular.ttf';

export const defaultTheme = createTheme({
  typography: {
    fontFamily: 'baskerville, Arial',
    allVariants: {
      color: '#211522'
    },
  },
  palette: {
    "darkButton": {
      main: "#F5F5F5",
      contrastText: '#613659'
    },
    "whiteButton": {
      main: "#613659",
      contrastText: "#F5F5F5",
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'baskerville';         
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('baskerville'), local('VeganStyle'), url(${baskerville}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }       
      `,
    },
  },
});
