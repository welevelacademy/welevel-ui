import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

// Type
interface CardBodyProperties {
  title: string;
  description: string;
  children?: React.ReactNode;
}

// Styled
const Wrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)}px;
`;

const Title = styled(Typography).attrs({
  variant: "h4",
  component: "h3",
  role: "heading",
})`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled(Typography).attrs({
  variant: "body2",
  color: "textSecondary",
})`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Component
export const CardBody: React.FC<CardBodyProperties> = ({
  children,
  title,
  description,
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>

      {children}
    </Wrapper>
  );
};
