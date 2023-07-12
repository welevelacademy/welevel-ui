import { Typography } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export interface EmptyMessageProperties {
  customTitle?: React.ReactNode;
  customDescription?: React.ReactNode;
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.5)}px;
  padding: ${({ theme }) => theme.spacing(2, 0)};
`;

export const EmptyMessage: React.FC<EmptyMessageProperties> = ({
  customTitle,
  customDescription,
}) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Typography align="center" variant="h4" color="textSecondary">
        {customTitle ?? t("components.EmptyMessage.title")}
      </Typography>
      <Typography align="center" variant="body1" color="textSecondary">
        {customDescription ?? t("components.EmptyMessage.description")}
      </Typography>
    </Wrapper>
  );
};
