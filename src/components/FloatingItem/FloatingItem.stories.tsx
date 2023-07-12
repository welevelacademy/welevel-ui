import { Typography } from "@material-ui/core";
import { Pool } from "@material-ui/icons";
import { Meta, Story } from "@storybook/react";

import { FloatingItem, FloatingItemProperties } from "./FloatingItem";

export default {
  component: FloatingItem,
  title: "DataDisplay/FloatingItem",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<FloatingItemProperties> = (args) => (
  <div style={{ width: 420, minHeight: "120vh" }}>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis dui
      tempus, tempus lacus vitae, pellentesque est. Aenean sodales lacus ac
      tellus euismod tempor. Vestibulum ullamcorper scelerisque quam, in congue
      risus laoreet sed. Etiam faucibus, elit vitae lobortis porta, leo urna
      finibus orci, at rutrum ligula tortor eget nisi. Proin ut enim quam. Nunc
      tempor risus quis enim ornare dapibus. Mauris venenatis faucibus
      efficitur. Proin condimentum ex vitae nisl tempor, eu finibus massa
      ullamcorper. Fusce lectus augue, imperdiet nec mi vel, dapibus pretium
      quam. Quisque accumsan, felis sit amet semper pretium, est tellus sagittis
      sapien, consectetur egestas dolor lectus ut nulla. Nunc ultricies purus
      pellentesque dui dapibus, a pharetra elit bibendum. Mauris erat justo,
      porta eu consequat nec, placerat eu tellus. Curabitur eu tortor rhoncus,
      pulvinar augue sed, suscipit ante. Curabitur eget pellentesque quam.
      Praesent lacus neque, sodales at lacus in, lobortis elementum risus.
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sed
      mauris condimentum, placerat diam quis, rhoncus est. Quisque convallis,
      ipsum vitae congue varius, sem arcu ultrices turpis, eget facilisis lacus
      nisi maximus felis. Pellentesque sollicitudin gravida ante, sit amet
      maximus turpis sodales eget. Vivamus tincidunt diam pretium massa euismod,
      nec varius augue placerat. Integer aliquet metus non velit condimentum,
      sed viverra augue tincidunt. Cras libero augue, tempor eu dolor vel,
      convallis consequat erat. Curabitur sagittis suscipit diam, eu efficitur
      turpis convallis vel. In at mauris nec leo accumsan eleifend vitae at
      tellus. Duis blandit magna sem, semper semper leo viverra vel. Duis
      euismod mauris lacus, nec maximus ligula euismod sed. Donec malesuada id
      lacus et dignissim. Mauris sed fermentum mi, eget scelerisque urna. Proin
      ligula eros, pulvinar at faucibus id, gravida sit amet sem. Sed libero
      massa, euismod eu lobortis sed, malesuada at diam. Donec vel ultricies
      diam. Suspendisse malesuada augue sed odio mattis, sed pharetra augue
      ornare. Donec scelerisque posuere ligula eget tempus.
    </Typography>
    <FloatingItem {...args} />
  </div>
);

// BASE
export const Base = Template.bind({});

Base.args = {
  isVisible: true,
  children: (
    <div
      style={{
        height: 48,
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "0 16px",
      }}>
      <Pool></Pool>
      <Typography variant="button">floating time!</Typography>
    </div>
  ),
};
