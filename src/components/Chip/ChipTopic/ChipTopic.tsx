import { Chip, ChipProps } from "@material-ui/core";
import { shade } from "polished";
import React from "react";
import styled from "styled-components";

export interface ChipTopicProperties
  extends Omit<ChipProps, "variant" | "color"> {
  color: string;
}

const StyledChipTopic = styled(Chip)<{
  $backgroundColor: string;
  $color: string;
}>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ theme, $color }) => theme.palette.getContrastText($color)};
  font-weight: 500;

  &:hover {
    background-color: ${({ theme, $backgroundColor }) =>
      shade(theme.palette.action.hoverOpacity, $backgroundColor)};
  }

  &:focus {
    background-color: ${({ theme, $backgroundColor }) =>
      shade(theme.palette.action.focusOpacity, $backgroundColor)};
  }
`;

// TODO: The Chip "component" props get lost
export const ChipTopic: React.FC<ChipTopicProperties> = ({
  color,
  ...others
}) => {
  // TODO: Adjust the palette to get the bg and the color // So no white or black color?
  // const baseBackgroundColor = setSaturation(0.45, setLightness(0.4, color));
  // const baseColor = setSaturation(0.95, setLightness(0.95, color));
  // const contrast = meetsContrastGuidelines(baseBackgroundColor, baseColor);

  return (
    <StyledChipTopic $color={color} $backgroundColor={color} {...others} />
  );
};
