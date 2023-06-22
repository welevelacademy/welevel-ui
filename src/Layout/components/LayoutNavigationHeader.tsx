import {
  Breadcrumbs,
  Container,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

import ShareMenu from "../../components/ShareMenu/ShareMenu";

// Type
interface LayoutNavigationHeaderProperties {
  showShareMenu?: boolean;
  ShareMenuQuote: string;
  breadcrumbs: JSX.Element[];
}

// Styled
const Wrapper = styled(Container).attrs({
  maxWidth: "lg",
})`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)}px;
  padding-bottom: ${({ theme }) => theme.spacing(1.5)}px;
  padding-top: ${({ theme }) => theme.spacing(1.5)}px;
`;

const ActionWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)}px;
  margin-left: auto;
`;

export const LayoutNavigationHeaderLink = styled(Link).attrs({
  color: "textPrimary",
  variant: "body2",
})``;

export const LayoutNavigationHeaderLinkDisabled = styled(Typography).attrs({
  color: "textSecondary",
  variant: "body2",
})``;

// JSX
export const LayoutNavigationHeader: React.FC<
  LayoutNavigationHeaderProperties
> = ({ ShareMenuQuote, showShareMenu = true, breadcrumbs }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Wrapper>
      {isMd && (
        <Breadcrumbs separator={<ChevronRight fontSize="small" />}>
          {breadcrumbs}
        </Breadcrumbs>
      )}
      <ActionWrapper>
        {showShareMenu && <ShareMenu quote={ShareMenuQuote} />}
      </ActionWrapper>
    </Wrapper>
  );
};
