import { Button, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { Children } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { EmptyMessage } from "../../EmptyMessage";
import ContentGrid, { ContentGridProperties } from "../ContentGrid/ContentGrid";

// Type

export interface ContentGridShowMoreProperties extends ContentGridProperties {
  handleShowMore: () => void;
  sectionTitle?: React.ReactNode;
  ItemsLimit: number;
  ItemsTotal: number;
  customShowMoreMessage?: React.ReactNode;
  customShowMoreCTA?: React.ReactNode;
  showDivider?: boolean;
}

// Styled
const Wrapper = styled.div<{ $showDivider: boolean }>`
  border-bottom: 1px solid
    ${({ theme, $showDivider }) =>
      $showDivider ? theme.palette.divider : "transparent"};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  padding-bottom: ${({ theme }) => theme.spacing(4)}px;
  padding-top: ${({ theme }) => theme.spacing(6)}px;
`;

const ShowMoreWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)}px;
`;

// JSX
export const ContentGridShowMore: React.FC<ContentGridShowMoreProperties> = ({
  isLoading,
  children,
  loadingItem,
  sectionTitle,
  ItemsLimit,
  ItemsTotal,
  handleShowMore,
  customShowMoreMessage,
  customShowMoreCTA,
  showDivider = true,
}) => {
  const { t } = useTranslation("welevelUIComponents");

  const numberOfItems = Children.count(children);

  // Show the number remaining items if is lower that the query limit
  const showMoreItemsNumber =
    ItemsTotal - numberOfItems < ItemsLimit
      ? ItemsTotal - numberOfItems
      : ItemsLimit;

  return (
    <Wrapper $showDivider={showDivider}>
      {sectionTitle && (
        <Typography variant="h3" component="h3">
          {sectionTitle}
        </Typography>
      )}

      {numberOfItems === 0 && !isLoading ? (
        <EmptyMessage />
      ) : (
        <>
          <ContentGrid
            isLoading={isLoading}
            loadingItem={loadingItem}
            numberOfLoadingRows={2}
          >
            {children}
          </ContentGrid>
          <ShowMoreWrapper>
            {isLoading ? (
              <Typography variant="body2" color="textSecondary">
                <Skeleton width={64} />
              </Typography>
            ) : (
              <Typography variant="body2" color="textSecondary">
                {customShowMoreMessage ??
                  t("ContentGridShowMore.showMoreMessage", {
                    items: numberOfItems,
                    total: ItemsTotal,
                  })}
              </Typography>
            )}

            {/* TODO: add loading animation when isLoading (No a spinning one please) */}
            {numberOfItems < ItemsTotal && (
              <Button
                variant="outlined"
                color="secondary"
                disabled={isLoading}
                onClick={handleShowMore}
              >
                {customShowMoreCTA ??
                  t("ContentGridShowMore.showMoreCTA", {
                    count: showMoreItemsNumber,
                  })}
              </Button>
            )}
          </ShowMoreWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default ContentGridShowMore;
