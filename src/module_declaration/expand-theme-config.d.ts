import "@material-ui/core/styles";

// Extend the default material-ui theme interface
// TODO: I don't like this.
declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    tertiary?: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
}
