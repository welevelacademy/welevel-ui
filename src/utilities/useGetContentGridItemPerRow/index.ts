import { useMediaQuery, useTheme } from "@material-ui/core";

export const useGetContentGridItemPerRow = (): number => {
  const theme = useTheme();
  let itemsPerView = 1;

  if (useMediaQuery(theme.breakpoints.up("sm"))) {
    itemsPerView = 2;
  }
  if (useMediaQuery(theme.breakpoints.up("md"))) {
    itemsPerView = 3;
  }
  if (useMediaQuery(theme.breakpoints.up("lg"))) {
    itemsPerView = 4;
  }

  return itemsPerView;
};
