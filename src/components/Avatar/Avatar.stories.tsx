import { Card, Typography } from "@material-ui/core";
import { Meta, Story } from "@storybook/react";

import { Avatar, AvatarProperties } from "./Avatar";

export default {
  component: Avatar,
  title: "Avatar",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<AvatarProperties> = (args) => (
  <div style={{ display: "flex", gap: "16px" }}>
    <Avatar {...args} />
    <Card>
      <div
        style={{
          display: "flex",
          gap: "16px",
          padding: "16px",
          flexDirection: "column",
        }}
      >
        <Typography color="textSecondary">On a surface</Typography>
        <Avatar {...args} />
      </div>
    </Card>
  </div>
);

// BASE
export const Base = Template.bind({});

Base.args = {
  isSquared: true,
  alternativeText: "Francesco Toni",
  imageUrl: "https://source.unsplash.com/random/400×400/?portrait",
  shadow: "stroke",
  size: "lg",
  borderWidth: "sm",
};

// EMPTY CONTENT
export const EmptyContent = Template.bind({});

EmptyContent.args = {
  alternativeText: "Francesco Toni",
  imageUrl: "welevel-asset-wrong-link",
  borderWidth: "sm",
};
