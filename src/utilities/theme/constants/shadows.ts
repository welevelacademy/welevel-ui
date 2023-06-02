import type { Theme } from "@material-ui/core/styles";

export const getShadows = (shadowColor: string) => {
  const shadows: Theme["shadows"] = [
    "none",
    `0 0 2px ${shadowColor}`,
    `0 0 4px ${shadowColor}`,
    `0 0 6px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
    `0 0 8px ${shadowColor}`,
  ];

  return shadows;
};
