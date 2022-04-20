import { createTheme } from '@mui/material';

const theme = createTheme();

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#30AADD',
      light: '#00FFC6',
      dark: '#43919B',
    },

    secondary: {
      main: '#EC0101',
      light: '#EB8F8F',
      dark: '#CD0A0A',
    },

    special: {
      main: '#2D31FA',
      light: '#5D8BF4',
      dark: '#051367',
    },

    background: {
      default: '#fafafa',
    },
  },

  mixins: {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 56,
    },
  },

  typography: {
    fontFamily: '\'-apple-system\',\'BlinkMacSystemFont\'',
  },
}, theme);

export default customTheme;
