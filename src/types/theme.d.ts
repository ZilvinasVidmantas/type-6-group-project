import '@mui/material';

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    navbar: CSSProperties;
  }
}
