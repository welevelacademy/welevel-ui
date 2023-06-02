import "@material-ui/core/styles";

// FIXME: I don't like this.
// This is not good for a library because require a custom set-up on the project
// Make sure to include this on the tsconfig.json of the project
// FIXME: add to README.md
// FIXME: maybe on mui 5 this is not an issue... check
declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    tertiary?: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
}
