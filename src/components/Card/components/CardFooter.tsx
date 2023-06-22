import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

// Type
interface CardFooterProperties {
  children: React.ReactNode;
  startDecorator?: React.ReactNode;
  endDecorator?: React.ReactNode;
}

// Styled
const Wrapper = styled.div`
  display: flex;
  // TODO: Remove min height if we drop the bottom avatar on course and event card
  min-height: ${({ theme }) => theme.spacing(3)}px;
  align-items: center;
`;

const TextContent = styled(Typography).attrs({
  variant: "body2",
  component: "p",
})`
  flex: 1 1 auto;
`;

// Component
export const CardFooter: React.FC<CardFooterProperties> = ({
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
