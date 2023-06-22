import { Skeleton } from "@material-ui/lab";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(Skeleton).attrs({
  variant: "rect",
})`
  height: ${({ theme }) => theme.spacing(4)}px;
  border-radius: ${({ theme }) => theme.shape.borderRadius * 3}px;
  display: inline-flex;
  width: ${({ theme }) =>
    theme.spacing(Math.round(Math.random() * (16 - 8) + 8))}px;
`;

export const ChipTopicSkeleton: React.FC = () => {
  return <Wrapper />;
};
