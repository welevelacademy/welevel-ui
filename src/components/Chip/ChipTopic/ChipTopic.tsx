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

  &:hover {
    background-color: ${({ theme, $backgroundColor }) =>
      shade(theme.palette.action.hoverOpacity, $backgroundColor)};
  }

  &:focus {
    background-color: ${({ theme, $backgroundColor }) =>
      shade(theme.palette.action.focusOpacity, $backgroundColor)};
  }
`;

export const ChipTopic: React.FC<ChipTopicProperties> = ({
  color,
  ...others
}) => {
  return (
    <StyledChipTopic $color={color} $backgroundColor={color} {...others} />
  );
};
