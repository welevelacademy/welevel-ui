import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonEN from "./en/common.json";
import componentsEN from "./en/components.json";
import commonIT from "./it/common.json";
import componentsIT from "./it/components.json";

export const defaultNS = "common";
export const resources = {
  en: {
    welevelUICommon: commonEN,
    welevelUIComponents: componentsEN,
  },
  it: {
    en: {
      welevelUICommon: commonIT,
      welevelUIComponents: componentsIT,
    },
  },
} as const;

export const welevelUII18nInstance = i18n.use(initReactI18next);

welevelUII18nInstance.init({
  fallbackLng: "en",
  defaultNS: "welevelUICommon",
  resources,
});
