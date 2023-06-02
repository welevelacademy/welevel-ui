import styled from "styled-components";

// Type
interface CardContentProperties {
  children: React.ReactNode;
}

// Component
export const CardContent = styled.div<CardContentProperties>`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.5)}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  padding-top: ${({ theme }) => theme.spacing(1)}px;
`;
