import '@mui/material';

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    // Norėdami įtraukti nują mixin pridėti jį čia. (naudokitės navbar kaip pvz)
    navbar: CSSProperties;
    section: CSSProperties;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    // Norėdami pridėti naują spalvų paletės tipa pridėti jį čia (naudokitės specia kaip pvz)
    special?: PaletteColorOptions;
  }

  interface Palette {
  // Norėdami pridėti naują spalvų paletės tipa pridėti jį čia (naudokitės specia kaip pvz)
    special: PaletteColor;
  }
}
