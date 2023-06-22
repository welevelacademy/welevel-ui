import { Typography } from "@material-ui/core";
import { Rating, Skeleton } from "@material-ui/lab";
import React from "react";

import { ReviewSummaryWrapper } from "./ReviewSummary";

export const ReviewSummarySkeleton: React.FC = () => {
  return (
    <ReviewSummaryWrapper $isLoading={true}>
      <Rating defaultValue={0} readOnly precision={0.5} size="small" />
      <Typography variant="body1">
        <Skeleton width={64} />
      </Typography>
    </ReviewSummaryWrapper>
  );
};
