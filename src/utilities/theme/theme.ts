import { createMuiTheme } from "@material-ui/core/styles";
import { tint } from "polished";

import { darkColors, getShadows, lightColors } from "./constants";

// FIXME: check this theme

const baseTheme = createMuiTheme({
  shape: {
    borderRadius: 8,
  },
  mixins: {
    toolbar: {
      minHeight: 64,
      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 64,
      },
      "@media (min-width:600px)": {
        minHeight: 64,
      },
    },
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
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: "1.125",
    },
    h3: {
      fontSize: "1.4rem",
      fontWeight: 700,
      lineHeight: "1.125",
    },
    h4: {
      fontSize: "1rem",
      lineHeight: "1.375",
      fontWeight: 600,
    },
    h5: {
      fontSize: "0.875rem",
      lineHeight: "1.375",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: "1.375",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: "1.375",
    },
    button: {
      textTransform: "none",
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: "1.25",
    },
    overline: {
      fontSize: "0.875rem",
      lineHeight: "1.25",
      fontWeight: 500,
      textTransform: "initial",
    },
  },
});

const baseThemeOverrides = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        boxShadow: "none",
        padding: `${baseTheme.spacing(1, 3)}`,
        height: `${baseTheme.spacing(6)}px`,
      },
      sizeSmall: {
        padding: `${baseTheme.spacing(0.5, 1.5)}`,
        height: `${baseTheme.spacing(4)}px`,
      },
      outlined: {
        borderWidth: "1px",
      },
    },
    // theme in welevel now (not applied on the MuiButton root level)
    // MuiButton: {
    //   contained: {
    //     boxShadow: "none",
    //     padding: `${baseTheme.spacing(1, 3)}`,
    //     height: `${baseTheme.spacing(6)}px`,
    //   },
    //   outlined: {
    //     borderWidth: "1px",
    //     padding: `${baseTheme.spacing(1, 3)}`,
    //     height: `${baseTheme.spacing(6)}px`,
    //   },
    // },
  },
});

// __________
// LIGHT THEME
// TODO: use deepMerge?
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
    // Only colors change
    overline: {
      ...baseThemeTypography.typography.overline,
      color: lightColors.textSecondary,
    },
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
    overline: {
      ...baseThemeTypography.typography.overline,
      color: darkColors.textSecondary,
    },
  },
  // Shadows
  shadows: getShadows(darkColors.shadowColor),
  // Overrides
  overrides: {
    ...baseThemeOverrides.overrides,
    MuiPaper: {
      elevation0: {
        backgroundColor: darkColors.surface,
      },
      elevation1: {
        backgroundColor: tint(0.05, darkColors.surface),
      },
      elevation2: {
        backgroundColor: tint(0.07, darkColors.surface),
      },
      elevation3: {
        backgroundColor: tint(0.08, darkColors.surface),
      },
      elevation4: {
        backgroundColor: tint(0.09, darkColors.surface),
      },
      elevation5: {
        backgroundColor: tint(0.1, darkColors.surface),
      },
      elevation6: {
        backgroundColor: tint(0.11, darkColors.surface),
      },
      elevation7: {
        backgroundColor: tint(0.11, darkColors.surface),
      },
      elevation8: {
        backgroundColor: tint(0.12, darkColors.surface),
      },
      elevation9: {
        backgroundColor: tint(0.12, darkColors.surface),
      },
      elevation10: {
        backgroundColor: tint(0.12, darkColors.surface),
      },
      elevation11: {
        backgroundColor: tint(0.12, darkColors.surface),
      },
      elevation12: {
        backgroundColor: tint(0.14, darkColors.surface),
      },
      elevation13: {
        backgroundColor: tint(0.14, darkColors.surface),
      },
      elevation14: {
        backgroundColor: tint(0.14, darkColors.surface),
      },
      elevation15: {
        backgroundColor: tint(0.14, darkColors.surface),
      },
      elevation16: {
        backgroundColor: tint(0.15, darkColors.surface),
      },
      elevation17: {
        backgroundColor: tint(0.15, darkColors.surface),
      },
      elevation18: {
        backgroundColor: tint(0.15, darkColors.surface),
      },
      elevation19: {
        backgroundColor: tint(0.15, darkColors.surface),
      },
      elevation20: {
        backgroundColor: tint(0.15, darkColors.surface),
      },
      elevation21: {
        backgroundColor: tint(0.15, darkColors.surface),
      },
      elevation22: {
        backgroundColor: tint(0.15, darkColors.surface),
      },
      elevation23: {
        backgroundColor: tint(0.15, darkColors.surface),
      },
      elevation24: {
        backgroundColor: tint(0.16, darkColors.surface),
      },
    },
  },
});
