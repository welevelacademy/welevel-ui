import { Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import React from "react";
import styled from "styled-components";

// Type
interface CardHeaderReviewProperties {
  children: string;
}

// Styled
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing(0.5)}px;
`;

// TODO: translate and, where
const TextContent = styled(Typography).attrs({
  variant: "body2",
  component: "p",
})`
  flex: 1 1 auto;
`;

const Star = styled(StarIcon)`
  height: ${({ theme }) => theme.spacing(1.5)}px;
  width: ${({ theme }) => theme.spacing(1.5)}px;
`;

// Component
export const CardHeaderReview: React.FC<CardHeaderReviewProperties> = ({
  children,
}) => {
  return (
    <Wrapper>
      <Star />
      <TextContent>{children}</TextContent>
    </Wrapper>
  );
};
