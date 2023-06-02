import { createMuiTheme } from "@material-ui/core/styles";

import { darkColors, getShadows, lightColors } from "./constants";

// FIXME: check this theme and add tertiary

const baseTheme = createMuiTheme({
  // TODO: I don't like a theme that based the elevation only on shadow
  // //  this not support a good elevetion system on dark mode
  shape: {
    borderRadius: 8,
  },
});

const baseThemeTypography = createMuiTheme({
  typography: {
    fontFamily: "Inter",
    h1: {
      fontFamily: "Ubuntu",
      fontSize: "2.4rem",
      fontWeight: 700,
      lineHeight: "1.125",
      color: lightColors.textPrimary,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: "1.125",
      color: lightColors.textPrimary,
    },
    h3: {
      fontSize: "1.4rem",
      fontWeight: 700,
      lineHeight: "1.125",
      color: lightColors.textPrimary,
    },
    h4: {
      fontSize: "1rem",
      lineHeight: "1.25",
      fontWeight: 600,
      color: lightColors.textPrimary,
    },
    h5: {
      fontSize: "0.875rem",
      lineHeight: "1.25",
      fontWeight: 600,
      color: lightColors.textPrimary,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: "1.375",
      color: lightColors.textPrimary,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: "1.375",
      color: lightColors.textPrimary,
    },
    button: {
      textTransform: "none",
      fontFamily: "Inter",
      fontWeight: 600,
      // color: colors.textWhitePrimary,
    },
  },
});

// TODO: use base theme colors and properties
const baseThemeOverrides = createMuiTheme({
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: "none",
        padding: `${baseTheme.spacing(1)}px ${baseTheme.spacing(3)}px`,
        height: `${baseTheme.spacing(6)}px`,
      },
      outlined: {
        borderWidth: "1px",
        padding: `${baseTheme.spacing(1)}px ${baseTheme.spacing(3)}px`,
        height: `${baseTheme.spacing(6)}px`,
      },
    },
  },
});

// __________
// LIGHT THEME
// TODO: use deepMerge
export const lightTheme = createMuiTheme({
  // Base Theme
  ...baseTheme,
  // Palette
  palette: {
    primary: {
      main: lightColors.primary,
    },
    secondary: {
      main: lightColors.secondary,
    },
    tertiary: baseTheme.palette.augmentColor({ main: lightColors.tertiary }),
    success: {
      main: lightColors.success,
    },
    error: {
      main: lightColors.error,
    },
    background: {
      default: lightColors.body,
      paper: lightColors.surface,
    },
    divider: lightColors.divider,
    text: {
      primary: lightColors.textPrimary,
      secondary: lightColors.textSecondary,
      disabled: lightColors.textDisabled,
      hint: lightColors.textHint,
    },
    type: "light",
  },
  // Typography
  typography: {
    ...baseThemeTypography.typography,
  },
  // Shadows
  shadows: getShadows(lightColors.shadowColor),
  // Overrides
  overrides: {
    ...baseThemeOverrides.overrides,
  },
});

// __________
// DARK THEME

export const darkTheme = createMuiTheme({
  // Base Theme
  ...baseTheme,
  // Palette
  palette: {
    primary: {
      main: darkColors.primary,
    },
    secondary: {
      main: darkColors.secondary,
    },
    tertiary: baseTheme.palette.augmentColor({ main: darkColors.tertiary }),
    success: {
      main: darkColors.success,
    },
    error: {
      main: darkColors.error,
    },
    background: {
      default: darkColors.body,
      paper: darkColors.surface,
    },
    divider: darkColors.divider,
    text: {
      primary: darkColors.textPrimary,
      secondary: darkColors.textSecondary,
      disabled: darkColors.textDisabled,
      hint: darkColors.textHint,
    },
    type: "dark",
  },
  typography: {
    ...baseThemeTypography.typography,
    h1: {
      ...baseThemeTypography.typography.h1,
      color: darkColors.textPrimary,
    },
    h2: {
      ...baseThemeTypography.typography.h2,
      color: darkColors.textPrimary,
    },
    h3: {
      ...baseThemeTypography.typography.h3,
      color: darkColors.textPrimary,
    },
    h4: {
      ...baseThemeTypography.typography.h4,
      color: darkColors.textPrimary,
    },
    h5: {
      ...baseThemeTypography.typography.h5,
      color: darkColors.textPrimary,
    },
    body1: {
      ...baseThemeTypography.typography.body1,
      color: darkColors.textPrimary,
    },
    body2: {
      ...baseThemeTypography.typography.body2,
      color: darkColors.textPrimary,
    },
  },
  // Shadows
  shadows: getShadows(darkColors.shadowColor),
  // Overrides
  overrides: {
    ...baseThemeOverrides.overrides,
  },
});
