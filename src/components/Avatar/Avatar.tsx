import { Theme, useTheme } from "@material-ui/core";
import React, { useState } from "react";
import styled, { css } from "styled-components";

// Type
type Sizes = "sm" | "md" | "lg" | "fullHeight" | "fullWidth";
type BorderWidth = "none" | "sm" | "md" | "lg";
type Shadow = "none" | "stroke" | "sm" | "md" | "lg";

export interface AvatarProperties {
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

type CommonAvatarStyleProperties = AvatarShapeProperties;

interface StyledAvatarProperties extends CommonAvatarStyleProperties {
  $isLoaded: boolean;
}

type DefaultAvatarProperties = CommonAvatarStyleProperties;

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

const commonAvatarStyle = css<CommonAvatarStyleProperties>`
  background-color: ${({ theme }) => theme.palette.background.default};
  clip-path: url(#${({ $isSquared }) =>
    $isSquared ? squaredMaskID : circleMaskID});
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const StyledAvatar = styled.img<StyledAvatarProperties>`
  ${commonAvatarStyle}
  opacity: ${({ $isLoaded }) => ($isLoaded ? "1" : "0")};
  transition: ${({ theme }: { theme: Theme }) =>
    theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeOut,
    })};
`;

const DefaultAvatar = styled.svg<DefaultAvatarProperties>`
  ${commonAvatarStyle}
`;

export const Avatar: React.FC<AvatarProperties> = ({
  isSquared,
  alternativeText,
  imageUrl,
  shadow = "none",
  size = "md",
  borderWidth = "none",
  borderColor,
}) => {
  // Theme
  const theme = useTheme();

  // State
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isValidSrc, setIsValidSrc] = useState(Boolean(imageUrl));

  return (
    <>
      {/* TODO: check support for external clip path url */}
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
          {isValidSrc ? (
            <StyledAvatar
              $isSquared={isSquared ?? false}
              $isLoaded={imageLoaded}
              alt={alternativeText}
              src={imageUrl}
              onLoad={() => setImageLoaded(true)}
              onError={() => setIsValidSrc(false)}
            />
          ) : (
            <DefaultAvatar
              $isSquared={isSquared ?? false}
              viewBox="0 0 176 176"
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
            >
              <path
                fill={theme.palette.background.default}
                d="M0 0h176v176H0z"
              />
              <path
                d="M10.769 176c3.306-39.737 36.647-71 77.231-71 40.584 0 73.925 31.263 77.231 71H10.769Z"
                fill={theme.palette.primary.main}
                opacity={0.4}
              />
              <circle
                cx="88"
                cy="88"
                r="44"
                fill={theme.palette.primary.main}
                opacity={0.4}
              />
            </DefaultAvatar>
          )}
        </Border>
      </Wrapper>
    </>
  );
};
