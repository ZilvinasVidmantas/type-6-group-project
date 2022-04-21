import '@mui/material';

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    navbar: CSSProperties;
    section: CSSProperties;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    special?: PaletteColorOptions;
  }

  interface Palette {
    special: PaletteColor;
  }
}
