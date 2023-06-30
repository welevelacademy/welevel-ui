import { Meta, Story } from "@storybook/react";

import { LoadingImage, LoadingImageProperties } from "./LoadingImage";

export default {
  component: LoadingImage,
  title: "DataDisplay/LoadingImage",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<LoadingImageProperties> = (args) => (
  <div style={{ width: 420, height: 180 }}>
    <LoadingImage {...args} />
  </div>
);

// BASE
export const Base = Template.bind({});

Base.args = {
  alternativeText: "Francesco Toni",
  imageUrl: "https://source.unsplash.com/random/400×400/?portrait",
  isSkeleton: false,
};

// EMPTY CONTENT
export const EmptyContent = Template.bind({});

EmptyContent.args = {
  alternativeText: "Francesco Toni",
  imageUrl: undefined,
};

// SKELETON AND LOADING
export const SkeletonAndLoading = Template.bind({});

SkeletonAndLoading.args = {
  alternativeText: "Francesco Toni",
  imageUrl: undefined,
  isSkeleton: true,
};
