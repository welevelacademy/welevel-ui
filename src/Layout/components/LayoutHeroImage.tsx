import { Container } from "@material-ui/core";
import React from "react";
import styled, { css } from "styled-components";

// Type
interface LayoutHeroImageProperties {
  imageUrl: string;
  children?: React.ReactNode | React.ReactNode[];
}

interface StyledHeroImageProperties {
  $imageUrl: string;
}

// Styled
const StyledHeroImage = styled.div<StyledHeroImageProperties>`
  background-color: ${({ theme }) => theme.palette.background.default};
  background-image: ${({ $imageUrl }) => "url(" + $imageUrl + ")"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0;
  aspect-ratio: 3;
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
  children,
}) => (
  <Container disableGutters maxWidth="lg">
    <StyledHeroImage $imageUrl={imageUrl}>{children}</StyledHeroImage>
  </Container>
);
