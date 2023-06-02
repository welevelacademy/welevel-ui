import type { Theme, ThemeOptions } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import deepmerge from "deepmerge";

import { darkTheme, lightTheme } from "./theme";

export function createWelevelUITheme({
  customLightTheme,
  customDarkTheme,
  type,
}: {
  customLightTheme?: ThemeOptions;
  customDarkTheme?: ThemeOptions;
  type: "dark" | "light";
}): Theme {
  // Completely replace an array like the shadow's one
  const overwriteArray = (
    _targetArray: unknown[],
    sourceArray: unknown[],
  ): unknown[] => sourceArray;

  const extendedLightTheme: ThemeOptions = customLightTheme
    ? deepmerge(lightTheme, customLightTheme, { arrayMerge: overwriteArray })
    : lightTheme;

  const extendedDarkTheme: ThemeOptions = customDarkTheme
    ? deepmerge(darkTheme, customDarkTheme, { arrayMerge: overwriteArray })
    : darkTheme;

  return createMuiTheme(
    type === "light" ? extendedLightTheme : extendedDarkTheme,
  );
}
