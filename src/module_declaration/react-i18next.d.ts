import {
  welevelUII18nDefaultNS,
  welevelUII18nResources,
} from "../utilities/i18n";

// react-i18next versions higher than 11.11.0 and lower than 12.0.0
declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof welevelUII18nDefaultNS;
    resources: (typeof welevelUII18nResources)["en"];
  }
}
