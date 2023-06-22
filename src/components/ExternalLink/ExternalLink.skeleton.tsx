import { Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(Typography)`
  display: block;
  min-height: ${({ theme }) => theme.spacing(3)}px;
  width: ${({ theme }) =>
    theme.spacing(Math.round(Math.random() * (16 - 12) + 12))}px;
`;

export const ExternalLinkSkeleton: React.FC = () => {
  return (
    <Wrapper variant="button">
      <Skeleton />
    </Wrapper>
  );
};
