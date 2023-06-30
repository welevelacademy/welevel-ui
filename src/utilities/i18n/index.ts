import commonEN from "./en/common.json";
import componentsEN from "./en/components.json";
import layoutEN from "./en/layout.json";
import commonIT from "./it/common.json";
import componentsIT from "./it/components.json";
import layoutIT from "./it/layout.json";

export const welevelUII18nDefaultNS = "welevelUICommon";
export const welevelUII18nResources = {
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
