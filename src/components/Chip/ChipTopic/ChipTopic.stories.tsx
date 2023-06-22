import { Meta, Story } from "@storybook/react";

import { ChipTopic, ChipTopicProperties } from "./ChipTopic";
import { ChipTopicSkeleton } from "./ChipTopic.skeleton";

export default {
  component: ChipTopic,
  title: "DataDisplay/ChipTopic",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ChipTopicProperties> = (args) => <ChipTopic {...args} />;

// Base
export const Base = Template.bind({});

Base.args = {
  clickable: true,
  label: "Food & Beverage",
  color: "#dd706b",
};

// All topics
// TODO: can we make this by query?
const AllTopicTemplate: Story<ChipTopicProperties> = (args) => {
  const topics = [
    {
      id: "ck0sc7obo009a0743l6zpl2de",
      name: "Social media",
      slug: "social-media",
      colour: "#bf3be0",
    },
    {
      id: "ck0sc7pkw009j0743z03cohca",
      name: "Spa & Wellness",
      slug: "spa-and-wellness",
      colour: "#348975",
    },
    {
      id: "ck0sc7qmc009t07433kgtfne2",
      name: "Tecnologia e Strumenti",
      slug: "tecnologia-e-strumenti",
      colour: "#6091d8",
    },
    {
      id: "ck0sc7rs300a20743usqr23hi",
      name: "Marketing e Comunicazione",
      slug: "marketing-e-comunicazione",
      colour: "#597ad4",
    },
    {
      id: "ck0sc7t5n00ac0743z6tkohko",
      name: "Progettazione e Design",
      slug: "progettazione-e-design",
      colour: "#d6190b",
    },
    {
      id: "ck0sc7uc100al0743mdj57jgv",
      name: "Leadership e Management",
      slug: "leadership-e-management",
      colour: "#478947",
    },
    {
      id: "ck0sc7vx200av074332sgtrxo",
      name: "Revenue Management",
      slug: "revenue-management",
      colour: "#26aaa7",
    },
    {
      id: "ck0sc7xsv00b50743y79zv1e8",
      name: "Commerciale e MICE",
      slug: "commerciale-e-mice",
      colour: "#949aea",
    },
    {
      id: "ck0sc8dr800bl07434j8gxjpv",
      name: "Inspiring",
      slug: "inspiring",
      colour: "#eaa700",
    },
    {
      id: "ck0sc8fdm00bv0743w501mnmd",
      name: "Accoglienza e front office",
      slug: "accoglienza-e-front-office",
      colour: "#bc1368",
    },
    {
      id: "ck0sc8h8100c50743kwx7ho5n",
      name: "Food & Beverage",
      slug: "food-and-beverage",
      colour: "#dd706b",
    },
    {
      id: "ck0sc8jc100cf0743yfmq4dez",
      name: "Housekeeping",
      slug: "housekeeping",
      colour: "#1085a0",
    },
    {
      id: "ck0sc8l0u00cp0743i1lr1ug8",
      name: "Amministrazione e finanza",
      slug: "amministrazione-e-finanza",
      colour: "#ba0000",
    },
    {
      id: "ck5nrl2yz001p0736tlz910uf",
      name: "Masterclass",
      slug: "masterclass",
      colour: "#ad964c",
    },
    {
      id: "ck9l1b7uhmooz0757khxh8s5t",
      name: "Destination Management",
      slug: "destination-management",
      colour: "#E86A03",
    },
    {
      id: "ckko9a8x8nz600a029bbxjdaa",
      name: "Eccellenze Ospitalità",
      slug: "eccellenze-ospitalita",
      colour: "#c60027",
    },
    {
      id: "ckmoygtxkfypg0902aeqhpo98",
      name: "Wine Experience",
      slug: "wine-experience",
      colour: "#52125d",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
      }}
    >
      {topics.map((topic) => (
        <ChipTopic
          key={topic.slug}
          color={topic.colour}
          clickable={args.clickable}
          label={topic.name}
        />
      ))}
    </div>
  );
};

export const AllTopics = AllTopicTemplate.bind({});
AllTopics.args = {
  clickable: true,
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
      <ChipTopicSkeleton />
    </div>
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {[0, 1, 2, 3].map((element) => (
        <ChipTopicSkeleton key={element} />
      ))}
    </div>
  </div>
);
export const Skeleton = SkeletonTemplate.bind({});
Skeleton.args = {};
