import { Meta, Story } from "@storybook/react";

import { FloatingItem, FloatingItemProperties } from "./FloatingItem";

export default {
  component: FloatingItem,
  title: "DataDisplay/FloatingItem",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<FloatingItemProperties> = (args) => (
  <div style={{ width: 420, height: 180 }}>
    <FloatingItem {...args} />
  </div>
);

// BASE
export const Base = Template.bind({});

Base.args = {
  isVisible: true,
  children: <div>floating itme</div>,
};
