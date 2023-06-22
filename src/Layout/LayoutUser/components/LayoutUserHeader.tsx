import { Button, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { EmailOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

import { Avatar } from "../../../components/Avatar";

// Type
interface LayoutUserHeaderProperties {
  avatarUrl: string;
  title: string;
  description: string;
  isAvatarSquared: boolean;
  overline: string;
}

// Styled

const Wrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
  padding-bottom: ${({ theme }) => theme.spacing(2)}px;
  padding-top: ${({ theme }) => theme.spacing(1)}px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    align-items: flex-start;
    flex-direction: row;
  }
`;

const AvatarWrapper = styled.div`
  aspect-ratio: 1;
  flex: 0 0 auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ theme }) => theme.spacing(-9)}px;
  width: ${({ theme }) => theme.spacing(16)}px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-left: 0;
    margin-right: 0;
    margin-top: ${({ theme }) => theme.spacing(-8)}px;
    width: ${({ theme }) => theme.spacing(22)}px;
  }
`;

const LayoutTextWrapper = styled.div`
  flex: 1 1 auto;
  margin: 0 auto;
  max-width: 560px;
  min-width: 0;
  width: 100%;

  * {
    display: block;
    overflow-wrap: break-word;
    text-align: center;
    word-break: normal;

    ${({ theme }) => theme.breakpoints.up("md")} {
      text-align: left;
    }
  }
`;

const LayoutTitle = styled(Typography).attrs({
  component: "h1",
  variant: "h2",
})`
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

const ActionsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  gap: ${({ theme }) => theme.spacing(1)}px;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    align-self: center;
    justify-content: flex-end;
  }
`;

// JSX
export const LayoutUserHeader: React.FC<LayoutUserHeaderProperties> = ({
  avatarUrl,
  overline,
  title,
  description,
  isAvatarSquared,
}) => {
  // Theme
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar
          alternativeText=""
          imageUrl={avatarUrl}
          size="fullWidth"
          borderWidth="md"
          isSquared={isAvatarSquared}
        />
      </AvatarWrapper>
      <LayoutTextWrapper>
        <Typography variant="overline">{overline}</Typography>
        <LayoutTitle>{title}</LayoutTitle>
        <Typography variant="body1">{description}</Typography>
      </LayoutTextWrapper>
      <ActionsWrapper>
        <Button
          fullWidth={isXs}
          variant="contained"
          color="secondary"
          startIcon={<EmailOutlined />}
        >
          {/* FIXME: translat or made a component (contact form) */}
          Scrivi un messaggio
        </Button>
        {/* <Button
        fullWidth
        variant="contained"
        color="secondary"
        startIcon={<EmailOutlined />}>
        Modifica profilo
      </Button> */}
      </ActionsWrapper>
    </Wrapper>
  );
};
