import { Meta, Story } from "@storybook/react";

import { EmptyMessage, EmptyMessageProperties } from "./EmptyMessage";

export default {
  component: EmptyMessage,
  title: "DataDisplay/EmptyMessage",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<EmptyMessageProperties> = (args) => (
  <div>
    <EmptyMessage {...args} />
  </div>
);

// BASE
export const Base = Template.bind({});

Base.args = {};
