import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

// Type
interface CardHeaderProperties {
  children: React.ReactNode;
  startDecorator?: React.ReactNode;
  endDecorator?: React.ReactNode;
}

// Styled
const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;

const TextContent = styled(Typography).attrs({
  variant: "body2",
  component: "p",
  color: "textSecondary",
})`
  flex: 1 1 auto;
`;

// Component
export const CardHeader: React.FC<CardHeaderProperties> = ({
  children,
  startDecorator,
  endDecorator,
}) => {
  return (
    <Wrapper>
      {startDecorator}
      <TextContent>{children}</TextContent>
      {endDecorator}
    </Wrapper>
  );
};
