import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

// Type
interface CardBodyProperties {
  title: string;
  children: string;
}

// Styled
const Wrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)}px;
`;

// Component
export const CardBody: React.FC<CardBodyProperties> = ({ children, title }) => {
  return (
    <Wrapper>
      <Typography variant="h4" component="h3">
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {children}
      </Typography>
    </Wrapper>
  );
};
