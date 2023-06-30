import { Container, Paper } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

// Type
interface LayoutStickyBarProperties {
  children: React.ReactElement;
}

// Styled

const Wrapper = styled(Paper).attrs({
  square: true,
  elevation: 2,
})`
  box-shadow: ${({ theme }) => theme.shadows[1]};
  position: sticky;
  top: ${({ theme }) => theme.mixins.toolbar.minHeight}px;
  z-index: ${({ theme }) => theme.zIndex.appBar};
`;

// JSX
export const LayoutStickyBar: React.FC<LayoutStickyBarProperties> = ({
  children,
}) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);
