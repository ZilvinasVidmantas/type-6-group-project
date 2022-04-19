import { createTheme, PaletteColor } from '@mui/material';

const theme = createTheme();

const createColor = (color: string): PaletteColor => theme.palette.augmentColor({ color: { main: color } });

const lightTheme = createTheme({
  palette: {
    red: createColor('#dd2222'),
    green: createColor('#22dd22'),
    blue: createColor('#2222dd'),
    primary: createColor('#fc5203'),

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
    section: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },

  typography: {
    fontFamily: '\'-apple-system\',\'BlinkMacSystemFont\'',
  },
}, theme);

export default lightTheme;
