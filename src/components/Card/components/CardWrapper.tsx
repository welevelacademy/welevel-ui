import React from "react";
import styled from "styled-components";

// Type
interface CardWrapperProperties {
  children: React.ReactNode;
}

// Component
export const CardWrapper = styled.div<CardWrapperProperties>`
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: ${({ theme }) => theme.shape.borderRadius * 3}px;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  overflow: hidden;
`;
