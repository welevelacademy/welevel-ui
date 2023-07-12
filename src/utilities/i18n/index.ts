import componentsEN from "./en/components.json";
import generalEN from "./en/general.json";
import layoutEN from "./en/layout.json";
import componentsIT from "./it/components.json";
import generalIT from "./it/general.json";
import layoutIT from "./it/layout.json";

export const welevelUII18nDefaultNS = "translation";
export const welevelUII18nResources = {
  en: {
    translation: {
      general: generalEN,
      components: componentsEN,
      layout: layoutEN,
    },
  },
  it: {
    translation: {
      general: generalIT,
      components: componentsIT,
      layout: layoutIT,
    },
  },
} as const;
