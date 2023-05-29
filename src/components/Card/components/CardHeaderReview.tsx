import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

// Type
interface CardHeaderReviewProperties {
  children: string;
}

// FIXME: add star
// Styled
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing(0.5)}px;
`;

const TextContent = styled(Typography).attrs({
  variant: "body2",
  component: "p",
})`
  flex: 1 1 auto;
`;

// Component
export const CardHeaderReview: React.FC<CardHeaderReviewProperties> = ({
  children,
}) => {
  return (
    <Wrapper>
      <TextContent>{children}</TextContent>
    </Wrapper>
  );
};
