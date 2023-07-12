import React, { Children } from "react";
import styled from "styled-components";

import { useGetContentGridItemPerRow } from "../../../utilities";

// Type
export interface ContentGridProperties
  extends React.HTMLAttributes<HTMLDivElement> {
  isLoading: boolean;
  children: JSX.Element[];
  loadingItem: JSX.Element;
  numberOfLoadingRows?: number;
}

interface ContentGridWrapperProperties {
  $numberOfItemsPerView: number;
}

// Styled
const Wrapper = styled.div<ContentGridWrapperProperties>`
  display: grid;
  gap: ${({ theme }) => theme.spacing(3)}px;
  grid-auto-rows: dense;

  grid-template-columns: repeat(
    ${({ $numberOfItemsPerView }) => $numberOfItemsPerView},
    1fr
  );
`;

export const ContentGrid: React.FC<ContentGridProperties> = ({
  isLoading,
  children,
  loadingItem,
  numberOfLoadingRows = 2,
  ...other
}) => {
  // Number of items per view
  const itemsPerRow = useGetContentGridItemPerRow();

  // Calculate the loading items number
  const normalizeNumberOfLoadingRows =
    numberOfLoadingRows > 0 ? Math.round(numberOfLoadingRows) : 1;
  const orphanItems = Children.count(children) % itemsPerRow;
  const numberOfLoadingItems =
    itemsPerRow * normalizeNumberOfLoadingRows - orphanItems;

  // JSX
  return (
    <Wrapper $numberOfItemsPerView={itemsPerRow} {...other}>
      {children}
      {isLoading &&
        Array(numberOfLoadingItems)
          .fill("loading")
          .map((_, index) => (
            <React.Fragment key={`loading-${index}`}>
              {loadingItem}
            </React.Fragment>
          ))}
    </Wrapper>
  );
};

export default ContentGrid;
