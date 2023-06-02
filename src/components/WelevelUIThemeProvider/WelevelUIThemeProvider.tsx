import type { Theme } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import React from "react";
import { ThemeProvider } from "styled-components";

export interface WelevelUIThemeProviderProperties {
  theme: Theme;
  children: React.ReactNode;
}

export const WelevelUIThemeProvider: React.FC<
  WelevelUIThemeProviderProperties
> = ({ theme, children }) => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};
