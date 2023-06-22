import { Timer } from "@material-ui/icons";
import { Meta, Story } from "@storybook/react";

import { ExternalLink, ExternalLinkProperties } from "./ExternalLink";
import { ExternalLinkSkeleton } from "./ExternalLink.skeleton";

export default {
  component: ExternalLink,
  title: "DataDisplay/ExternalLink",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ExternalLinkProperties> = (args) => (
  <div>
    <ExternalLink {...args} />
  </div>
);

// BASE
export const Base = Template.bind({});

Base.args = {
  children: "Link esterno",
  href: "https://welevel.academy/",
};

// CustomDecorator
export const CustomDecorator = Template.bind({});

CustomDecorator.args = {
  children: "Link esterno",
  href: "https://welevel.academy/",
  target: "_blank",
  customDecorator: <Timer fontSize="small" />,
};

// Skeleton
const SkeletonTemplate: Story = () => (
  <div
    style={{
      display: "flex",
      gap: "24px",
      flexWrap: "wrap",
      flexDirection: "column",
    }}
  >
    <div>
      <ExternalLinkSkeleton />
    </div>
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        flexDirection: "column",
      }}
    >
      <ExternalLinkSkeleton />
      <ExternalLinkSkeleton />
      <ExternalLinkSkeleton />
    </div>
  </div>
);
export const Skeleton = SkeletonTemplate.bind({});
Skeleton.args = {};
