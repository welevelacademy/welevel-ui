import React, { Suspense } from "react";
import { useDarkMode } from "storybook-dark-mode";

import { CssBaseline } from "@material-ui/core";
import { addDecorator } from "@storybook/react";
import {
  WelevelUIThemeProvider,
  createWelevelUITheme,
  welevelUII18nDefaultNS,
  welevelUII18nResources,
} from "../src/index";

import { themes } from "@storybook/theming";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { createInstance } from "i18next";

export const parameters = {
  darkMode: {
    // Override storybook themes
    dark: { ...themes.dark },
    light: { ...themes.normal },
    current: "light",
  },
};

export const welevelUII18nInstance = createInstance({
  debug: true,
  interpolation: {
    escapeValue: false,
  },
}).use(initReactI18next);

welevelUII18nInstance.init({
  fallbackLng: "it",
  defaultNS: welevelUII18nDefaultNS,
  resources: welevelUII18nResources,
});

addDecorator((story) => (
  <Suspense fallback={<div>loading...</div>}>
    <I18nextProvider i18n={welevelUII18nInstance}>
      <WelevelUIThemeProvider
        theme={createWelevelUITheme({
          type: useDarkMode() ? "dark" : "light",
        })}>
        <CssBaseline />
        {story()}
      </WelevelUIThemeProvider>
    </I18nextProvider>
  </Suspense>
));
