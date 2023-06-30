import {
  Breadcrumbs,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";
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

const StyledBreadcrumb = styled(Breadcrumbs).attrs({
  separator: <ChevronRight fontSize="small" />,
})`
  .MuiBreadcrumbs-separator {
    margin: ${({ theme }) => theme.spacing(0, 0.5)};
  }

  * {
    color: ${({ theme }) => theme.palette.text.secondary};
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  }

  a:hover {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

// JSX
export const LayoutNavigationHeader: React.FC<
  LayoutNavigationHeaderProperties
> = ({ ShareMenuQuote, showShareMenu = true, breadcrumbs }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  if (isMd) {
    return (
      <Wrapper>
        <StyledBreadcrumb>{breadcrumbs}</StyledBreadcrumb>
        <ActionWrapper>
          {showShareMenu && <ShareMenu quote={ShareMenuQuote} />}
        </ActionWrapper>
      </Wrapper>
    );
  }
  return <></>;
};

// Skeleton
const SkeletonWrapper = styled(Container).attrs({
  maxWidth: "lg",
})`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

export const LayoutNavigationHeaderSkeleton: React.FC = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  if (isMd) {
    return (
      <SkeletonWrapper>
        {[0, 1, 2].map((item) => (
          <Typography key={item}>
            <Skeleton width={48}></Skeleton>
          </Typography>
        ))}
      </SkeletonWrapper>
    );
  }
  return <></>;
};
