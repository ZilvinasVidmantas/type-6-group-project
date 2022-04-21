import '@mui/material';

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    // Norėdami pridėti naują mixin pridema jį čia (naudokite navbar kaip pvz)
    navbar: CSSProperties;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    // Norėdami pridėti naujos spalvos tipą pridame jį čia (naudokite special kaip pvz)
    special?: PaletteColorOptions;
  }

  interface Palette {
    // Norėdami pridėti naujos spalvos tipą pridame jį čia (naudokite special kaip pvz)
    special: PaletteColor;
  }
}
