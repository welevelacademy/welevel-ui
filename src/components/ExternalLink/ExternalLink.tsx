import { Link, LinkProps, Typography } from "@material-ui/core";
import { Link as DefaultIcon } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

export interface ExternalLinkProperties extends LinkProps {
  customDecorator?: React.ReactNode;
}

const Wrapper = styled(Link)`
  align-items: center;
  color: ${({ theme }) => theme.palette.text.hint};
  cursor: pointer;
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing(1)}px;
  min-height: ${({ theme }) => theme.spacing(3)}px;

  span {
    color: ${({ theme }) => theme.palette.text.secondary};
    transition: ${({ theme }) =>
      theme.transitions.create("color", {
        duration: theme.transitions.duration.short,
      })};
  }

  &:hover {
    text-decoration: none;
    span {
      color: ${({ theme }) => theme.palette.text.primary};
    }
  }
`;

export const ExternalLink: React.FC<ExternalLinkProperties> = ({
  children,
  customDecorator,
  ...other
}) => {
  return (
    <Wrapper {...other}>
      {customDecorator || <DefaultIcon fontSize="small" color="inherit" />}
      <Typography variant="button" component="span">
        {children}
      </Typography>
    </Wrapper>
  );
};
