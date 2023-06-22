import { Typography } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

// Type
interface LayoutUserInfoProperties {
  userName: string;
  descriptionContent: React.ReactNode;
  topicsContent: React.ReactNode;
  reviewContent: React.ReactNode;
  linksContent: React.ReactNode;
}

// Styled

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  padding: ${({ theme }) => theme.spacing(4, 0)};

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-direction: row;
  }
`;

const LayoutUserInfoSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)}px;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

const LayoutUserInfoSection: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <LayoutUserInfoSectionWrapper>
    <Typography component="h3" variant="h4">
      {title}
    </Typography>
    {children}
  </LayoutUserInfoSectionWrapper>
);

const MainSection = styled.div`
  flex: 1 1 auto;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-right: ${({ theme }) => theme.spacing(6)}px;
  }
`;

const SideSection = styled.div`
  flex: 0 0 auto;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-right: ${({ theme }) => theme.spacing(6)}px;
  }
`;

// JSX
export const LayoutUserInfo: React.FC<LayoutUserInfoProperties> = ({
  userName,
  descriptionContent,
  topicsContent,
  reviewContent,
  linksContent,
}) => {
  const { t } = useTranslation("welevelUILayout");

  return (
    <Wrapper>
      <MainSection>
        <LayoutUserInfoSection
          title={t("LayoutUserInfo.infoTitle", {
            userName,
          })}
        >
          {descriptionContent}
        </LayoutUserInfoSection>
        <LayoutUserInfoSection title={t("LayoutUserInfo.topicsTitle")}>
          {topicsContent}
        </LayoutUserInfoSection>
      </MainSection>
      <SideSection>
        <LayoutUserInfoSection title={t("LayoutUserInfo.reviewsTitle")}>
          {reviewContent}
        </LayoutUserInfoSection>
        <LayoutUserInfoSection title={t("LayoutUserInfo.linksTitle")}>
          {linksContent}
        </LayoutUserInfoSection>
      </SideSection>
    </Wrapper>
  );
};
