import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";

import commonEN from "./en/common.json";
import componentsEN from "./en/components.json";
import layoutEN from "./en/layout.json";
import commonIT from "./it/common.json";
import componentsIT from "./it/components.json";
import layoutIT from "./it/layout.json";

export const defaultNS = "welevelUICommon";
export const resources = {
  en: {
    welevelUICommon: commonEN,
    welevelUIComponents: componentsEN,
    welevelUILayout: layoutEN,
  },
  it: {
    welevelUICommon: commonIT,
    welevelUIComponents: componentsIT,
    welevelUILayout: layoutIT,
  },
} as const;

export const welevelUII18nInstance = createInstance({
  debug: true,
  interpolation: {
    escapeValue: false,
  },
}).use(initReactI18next);

welevelUII18nInstance.init({
  fallbackLng: "it",
  defaultNS: defaultNS,
  resources,
});
