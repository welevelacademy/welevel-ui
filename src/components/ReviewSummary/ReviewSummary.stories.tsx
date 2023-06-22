import { Meta, Story } from "@storybook/react";

import { ReviewSummary, ReviewSummaryProperties } from "./ReviewSummary";
import { ReviewSummarySkeleton } from "./reviewSummary.skeleton";

export default {
  component: ReviewSummary,
  title: "DataDisplay/ReviewSummary",
} as Meta;

// Base Template
const Template: Story<ReviewSummaryProperties> = (args) => (
  <ReviewSummary {...args} />
);

// Base
export const Base = Template.bind({});

Base.args = {
  value: 4.6,
  numberOfReviews: 18,
};

// Base
export const EmptyContent = Template.bind({});

EmptyContent.args = {
  value: 0,
  numberOfReviews: 0,
};

// Skeleton
const SkeletonTemplate: Story<ReviewSummaryProperties> = (args) => (
  <ReviewSummarySkeleton {...args} />
);

// Base
export const Skeleton = SkeletonTemplate.bind({});

Skeleton.args = {};
