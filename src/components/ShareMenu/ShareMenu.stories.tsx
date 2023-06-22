import { Meta, Story } from "@storybook/react";

import ShareMenu, { ShareMenuProperties } from "./ShareMenu";

export default {
  component: ShareMenu,
  title: "Navigation/ShareMenu",
} as Meta;

const Template: Story<ShareMenuProperties> = (args) => {
  return (
    <div style={{ display: "flex" }}>
      <ShareMenu {...args} />
    </div>
  );
};

// BASE
export const Base = Template.bind({});

Base.args = {
  quote: "Discover this component",
};
