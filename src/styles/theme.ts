import { createTheme } from '@mui/material';

const customTheme = createTheme({
  palette: {
    // Norėdami pridėti naują spalvų paletę pridėti ją čia ir theme.d.ts faile (naudokite special kaip pvz)

    // Formatas:
    // spalvosPaletesPavadinimas: {
    //   main: 'spalva',
    //   light: 'spalva',
    //   dark: 'spalva',
    // }

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

    // Default background spalva
    background: {
      default: '#fafafa',
    },
  },

  mixins: {
    // Norėdami sukurti naują mixin pridėti jį čia ir theme.d.ts faile (naudotis navbar kaip pvz)
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 56,
    },
    // Žmogui kuris kurs section, bendrinį jo stilių aprašyti čia.
    section: {
      padding: 1,
    },
  },

  typography: {
    fontFamily: 'Open Sans, sans- serif',
  },
});

export default customTheme;
