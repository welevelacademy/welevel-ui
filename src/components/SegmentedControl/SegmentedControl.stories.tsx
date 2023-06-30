import { Button, Paper, Typography } from "@material-ui/core";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";

import {
  SegmentedControl,
  SegmentedControlProperties,
} from "./SegmentedControl";
import {
  SegmentedControlSkeleton,
  SegmentedControlSkeletonProperties,
} from "./SegmentedControl.skeleton";

export default {
  component: SegmentedControl,
  title: "Navigation/SegmentedControl",
} as Meta;

const Template: Story<SegmentedControlProperties> = (args) => {
  const { items } = args;

  const [selectedItem, setSelectedItem] = useState(items[0].id);

  return (
    <div>
      <Paper
        style={{
          width: "100%",
          padding: "8px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SegmentedControl
          segmentedControlLayoutID="segmentedControlLayoutIDStory"
          activeItemID={selectedItem}
          onClick={setSelectedItem}
          items={items}
        />
      </Paper>

      <div style={{ display: "flex", gap: "16px", padding: "16px" }}>
        <Button
          onClick={() => setSelectedItem(items[0].id)}
          variant="outlined"
          color="primary"
        >
          First
        </Button>
        <Button
          onClick={() => setSelectedItem(items[items.length - 1].id)}
          variant="outlined"
          color="primary"
        >
          Last
        </Button>
      </div>
    </div>
  );
};

// BASE
export const Base = Template.bind({});

Base.args = {
  items: [
    {
      id: "1",
      label: "Corsi",
    },
    {
      id: "2",
      label: "Eventi",
    },
    {
      id: "3",
      label: "Docenti",
    },
  ],
};

// BASE

// BASE
export const CustomItem = Template.bind({});

CustomItem.args = {
  items: [
    {
      id: "1",
      customItem: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "8px 12px",
          }}
        >
          <Typography variant="overline">Ven</Typography>
          <Typography variant="button">24</Typography>
        </div>
      ),
    },
    {
      id: "2",
      customItem: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "8px 12px",
          }}
        >
          <Typography variant="overline">Sab</Typography>
          <Typography variant="button">25</Typography>
        </div>
      ),
    },
    {
      id: "3",
      customItem: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "8px 12px",
          }}
        >
          <Typography variant="overline" color="textSecondary">
            Dom
          </Typography>
          <Typography variant="button" color="inherit">
            26
          </Typography>
        </div>
      ),
    },
  ],
};

// Skeleton
const SkeletonTemplate: Story<SegmentedControlSkeletonProperties> = (args) => {
  return (
    <div>
      <Paper
        style={{
          width: "100%",
          padding: "8px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SegmentedControlSkeleton {...args} />
      </Paper>
    </div>
  );
};

export const Skeleton = SkeletonTemplate.bind({});

Skeleton.args = {};
