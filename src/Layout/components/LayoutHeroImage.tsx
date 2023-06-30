import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

import { LoadingImage, LoadingImageProperties } from "../../components";

// Type
interface LayoutHeroImageProperties extends LoadingImageProperties {
  children?: React.ReactNode | React.ReactNode[];
}

const Wrapper = styled.div`
  aspect-ratio: 3;
  overflow: hidden;
  position: relative;

  // remove border radius when max container width meet the edge of the cover
  // max container width = 1280 = breakpoints lg
  // container padding 24 = theme.spacing(3)
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.values.lg +
      theme.spacing(3) * 2}px) {
      border-radius: ${theme.shape.borderRadius * 3}px;
    }
  `}
`;

// JSX
export const LayoutHeroImage: React.FC<LayoutHeroImageProperties> = ({
  imageUrl,
  isSkeleton,
  alternativeText,
  customFallBackElement,
  children,
}) => {
  return (
    <Container disableGutters maxWidth="lg">
      <Wrapper>
        <LoadingImage
          imageUrl={imageUrl}
          alternativeText={alternativeText}
          isSkeleton={isSkeleton}
          customFallBackElement={customFallBackElement}
        />
        {children}
      </Wrapper>
    </Container>
  );
};
