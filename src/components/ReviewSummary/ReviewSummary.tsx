import { Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import styled from "styled-components";

export interface ReviewSummaryProperties
  extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  numberOfReviews: number;
}

export const ReviewSummaryWrapper = styled.div<{ $isLoading: boolean }>`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)}px;

  * {
    display: inline-block;
    line-height: 1;
  }

  .MuiRating-iconFilled {
    color: ${({ theme }) => theme.palette.text.primary};
  }

  .MuiRating-iconEmpty {
    /* TODO: check if u can add this with the theme */
    animation: ${({ $isLoading }) =>
      $isLoading
        ? "MuiSkeleton-keyframes-pulse 1.5s ease-in-out 0.5s infinite"
        : "none"};
    color: ${({ theme }) => theme.palette.text.disabled};
  }
`;

export const ReviewSummary: React.FC<ReviewSummaryProperties> = ({
  value,
  numberOfReviews,
  ...other
}) => {
  const { t } = useTranslation("welevelUIComponents");

  return (
    <ReviewSummaryWrapper {...other} $isLoading={false}>
      <Rating defaultValue={value} readOnly precision={0.5} size="small" />
      <Typography variant="body1">
        <Trans
          t={t}
          i18nKey={"ReviewSummary.summary"}
          values={{
            value,
            count: numberOfReviews,
          }}
        />
      </Typography>
    </ReviewSummaryWrapper>
  );
};
