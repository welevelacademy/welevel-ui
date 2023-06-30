import { Skeleton } from "@material-ui/lab";
import React, { useState } from "react";
import styled, { useTheme } from "styled-components";

// Type
export interface LoadingImageProperties {
  imageUrl: string | undefined;
  isSkeleton?: boolean;
  alternativeText?: string;
  customFallBackElement?: JSX.Element;
}

const StyledImage = styled.img<{ $isLoaded: boolean }>`
  background-color: ${({ theme }) => theme.palette.background.default};
  display: block;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $isLoaded }) => ($isLoaded ? "1" : "0")};
  position: absolute;
  transition: ${({ theme }) =>
    theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeOut,
    })};
  width: 100%;
`;

const StyledDefaultImage = styled.svg`
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const DefaultImage: React.FC = () => {
  // Theme
  const theme = useTheme();

  return (
    <StyledDefaultImage
      viewBox="0 0 1920 1080"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      preserveAspectRatio="xMidYMid slice"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
    >
      <path fill={theme.palette.background.default} d="M0 0h1920v1080H0z" />
      <path
        fill={theme.palette.primary.main}
        opacity={0.4}
        d="M1280 0h640v1080h-640z"
      />
      <circle
        cx="1280"
        cy="540"
        r="320"
        fill={theme.palette.primary.main}
        opacity={0.4}
      />
      <circle
        cy="540"
        r="640"
        fill={theme.palette.primary.main}
        opacity={0.4}
      />
    </StyledDefaultImage>
  );
};

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

const CustomFallBackElementWrapper = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
`;

const StyledSkeleton = styled(Skeleton).attrs({
  variant: "rect",
  width: "100%",
  height: "100%",
})`
  position: absolute;
`;

// JSX
export const LoadingImage: React.FC<LoadingImageProperties> = ({
  imageUrl,
  isSkeleton = false,
  alternativeText,
  customFallBackElement,
}) => {
  // State
  // if an imageUrl is provided set isLoading to true
  const [isLoading, setIsLoading] = useState(Boolean(imageUrl));
  // if an imageUrl is provided set isValidSrc to true, if the img html element throw an error set to false
  const [isValidSrc, setIsValidSrc] = useState(Boolean(imageUrl));

  const showFallbackImage: boolean = !isValidSrc && !isSkeleton && !isLoading;

  return (
    <Wrapper>
      {/* Loading and skeleton animation - show only when is loading or the component is used as a skeleton */}
      {(isLoading || isSkeleton) && <StyledSkeleton />}
      {/* Avatar image - show when a valid image url is provided and set opacity to 1 when loaded */}
      {!isSkeleton && (
        <StyledImage
          $isLoaded={!isLoading}
          alt={alternativeText}
          src={imageUrl}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setIsValidSrc(false);
          }}
        />
      )}
      {/* Fallback illustration - show only when no valid image url was provided and the component is not used as a skeleton  */}
      {showFallbackImage && (
        <>
          {customFallBackElement ? (
            <CustomFallBackElementWrapper>
              {customFallBackElement}
            </CustomFallBackElementWrapper>
          ) : (
            <DefaultImage />
          )}
        </>
      )}
    </Wrapper>
  );
};
