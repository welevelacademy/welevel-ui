import { Skeleton } from "@material-ui/lab";
import React from "react";
import styled from "styled-components";

// Type

export interface SegmentedControlSkeletonProperties {
  height?: string | number;
  width?: string | number;
}

// Styled
const Wrapper = styled(Skeleton).attrs({
  variant: "rect",
})`
  border-radius: ${({ theme }) => theme.shape.borderRadius * 2}px;
`;

// Component
// TODO: add custom Items?
export const SegmentedControlSkeleton: React.FC<
  SegmentedControlSkeletonProperties
> = ({ height = 48, width = 240 }) => {
  // JSX
  return <Wrapper width={width} height={height}></Wrapper>;
};
