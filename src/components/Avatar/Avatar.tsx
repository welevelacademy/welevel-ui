import React from "react";
import styled, { css } from "styled-components";

// import alternativeImage from "../../assets/images/illustrations/Illustrazione3 -12.svg"; // FIXME: change

// Type
type Sizes = "sm" | "md" | "lg" | "fullHeight" | "fullWidth";
type BorderWidth = "none" | "sm" | "md" | "lg";
type Shadow = "none" | "stroke" | "sm" | "md" | "lg";

interface AvatarProperties {
  isSquared?: boolean;
  alternativeText: string;
  imageUrl: string;
  shadow?: Shadow;
  size?: Sizes;
  borderWidth?: BorderWidth;
  borderColor?: string;
}

type AvatarShapeProperties = {
  $isSquared: boolean;
};

type WrapperProperties = {
  $size: Sizes;
  $Shadow: Shadow;
};

interface BorderProperties extends AvatarShapeProperties {
  $borderColor?: string;
  $borderWidth: BorderWidth;
}

// Styled
const squaredMaskID = "squared-mask";
const circleMaskID = "circle-mask";

const HiddenMask = styled.svg`
  height: 0;
  position: absolute;
  width: 0;
`;

const Wrapper = styled.div<WrapperProperties>`
  aspect-ratio: 1;
  // Style based on $size prop
  ${({ $size }) => {
    const sizeProperties = {
      sm: css`
        height: ${({ theme }) => theme.spacing(4)}px;
        width: ${({ theme }) => theme.spacing(4)}px;
      `,
      md: css`
        height: ${({ theme }) => theme.spacing(6)}px;
        width: ${({ theme }) => theme.spacing(6)}px;
      `,
      lg: css`
        height: ${({ theme }) => theme.spacing(8)}px;
        width: ${({ theme }) => theme.spacing(8)}px;
      `,
      fullHeight: css`
        height: 100%;
        width: auto;
      `,
      fullWidth: css`
        height: auto;
        width: 100%;
      `,
    }[$size.toString()];
    return sizeProperties;
  }}
  // Style based on $Shadow prop
    ${({ $Shadow }) => {
    const shadowProperties = {
      none: css``,
      stroke: css`
        filter: drop-shadow(${({ theme }) => theme.shadows[1]});
      `,
      sm: css`
        filter: drop-shadow(${({ theme }) => theme.shadows[2]});
      `,
      md: css`
        filter: drop-shadow(${({ theme }) => theme.shadows[3]});
      `,
      lg: css`
        filter: drop-shadow(${({ theme }) => theme.shadows[4]});
      `,
    }[$Shadow.toString()];
    return shadowProperties;
  }}
`;

const Border = styled.div<BorderProperties>`
  background-color: ${({ theme, $borderColor }) =>
    $borderColor ?? theme.palette.background.paper};
  clip-path: url(#${({ $isSquared }) =>
    $isSquared ? squaredMaskID : circleMaskID});
  height: 100%;
  overflow: hidden;
  width: 100%;

  // Style based on $Shadow prop
  ${({ $borderWidth }) => {
    const shadowProperties = {
      none: () => css``,
      sm: () => css`
        padding: ${({ theme }) => theme.spacing(0.25)}px;
      `,
      md: css`
        padding: ${({ theme }) => theme.spacing(0.5)}px;
      `,
      lg: css`
        padding: ${({ theme }) => theme.spacing(1)}px;
      `,
    }[$borderWidth.toString()];
    return shadowProperties;
  }}
`;
const StyledAvatar = styled.img<AvatarShapeProperties>`
  background-color: ${({ theme }) => theme.palette.grey[300]};
  clip-path: url(#${({ $isSquared }) =>
    $isSquared ? squaredMaskID : circleMaskID});
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

// TODO: this duplicate the mask
export const Avatar: React.FC<AvatarProperties> = ({
  isSquared,
  alternativeText,
  imageUrl,
  shadow = "none",
  size = "md",
  borderWidth = "none",
  borderColor,
}) => {
  // This function is triggered if an error occurs while loading an image
  const imageOnErrorHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    // event.currentTarget.src = alternativeImage; // FIXME: This is a fallback image
    event.currentTarget.src =
      "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80";
  };

  return (
    <>
      <HiddenMask>
        <clipPath id={squaredMaskID} clipPathUnits="objectBoundingBox">
          {/* transform an absolute path to relative with: https://yoksel.github.io/relative-clip-path/ */}
          <path d="M0.2,1 C0.067,1,0,0.933,0,0.8 V0.2 C0,0.067,0.067,0,0.2,0 h0.6 C0.933,0,1,0.067,1,0.2 v0.6 c0,0.133,-0.067,0.2,-0.2,0.2 H0.2"></path>
        </clipPath>
      </HiddenMask>

      <HiddenMask>
        <clipPath id={circleMaskID} clipPathUnits="objectBoundingBox">
          {/* transform an absolute path to relative with: https://yoksel.github.io/relative-clip-path/ */}
          <path d="M0,0.5 a0.5,0.5,0,1,0,1,0 a0.5,0.5,0,1,0,-1,0"></path>
        </clipPath>
      </HiddenMask>

      <Wrapper $size={size} $Shadow={shadow}>
        <Border
          $isSquared={isSquared ?? false}
          $borderColor={borderColor}
          $borderWidth={borderWidth}
        >
          <StyledAvatar
            $isSquared={isSquared ?? false}
            alt={alternativeText}
            src={imageUrl}
            onError={imageOnErrorHandler}
          />
        </Border>
      </Wrapper>
    </>
  );
};
