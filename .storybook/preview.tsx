import React from "react";
import { useDarkMode } from "storybook-dark-mode";

import { addDecorator } from "@storybook/react";
import { WelevelUIThemeProvider, createWelevelUITheme } from "../src/index";
import { CssBaseline } from "@material-ui/core";

import { themes } from "@storybook/theming";

export const parameters = {
  darkMode: {
    // Override storybook themes
    dark: { ...themes.dark },
    light: { ...themes.normal },
    current: "light",
  },
};

addDecorator((story) => (
  <WelevelUIThemeProvider
    theme={createWelevelUITheme({ type: useDarkMode() ? "dark" : "light" })}>
    <CssBaseline />
    {story()}
  </WelevelUIThemeProvider>
));
