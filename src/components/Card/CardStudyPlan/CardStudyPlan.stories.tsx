import { Meta, Story } from "@storybook/react";

import { CardStudyPlan, CardStudyPlanProperties } from "./CardStudyPlan";

export default {
  component: CardStudyPlan,
  title: "Card/CardStudyPlan",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<CardStudyPlanProperties> = (args) => (
  <div style={{ maxWidth: 300 }}>
    <CardStudyPlan {...args} />
  </div>
);

// BASE
export const Base = Template.bind({});

Base.args = {
  description: `Sviluppa le soft skill per l'ospitalità e diventa un leader nell'hospitality`,
  name: "Soft skills & personal branding",
  imageUrl:
    "https://source.unsplash.com/random/854×540/?cheers&orientation=landscape",
};

// LONG CONTENT
export const LongContent = Template.bind({});

LongContent.args = {
  description: `Sviluppa le soft skill per l'ospitalità e diventa un leader nell'hospitality.
  Comunicare in modo efficace nel lavoro, gestire lo stress e gli stati d'animo,
  sfruttare al massimo il tempo, trasformare gli obiettivi in risultati,
  esprimere il proprio potenziale, affrontare le paure e lo scoraggiamento, e liberarsi dalle convinzioni negative e dai blocchi`,
  name: "Soft skills & personal branding",
  imageUrl:
    "https://source.unsplash.com/random/854×540/?cheers&orientation=landscape",
};

// EMPTY CONTENT
export const EmptyContent = Template.bind({});

EmptyContent.args = {
  description: "",
  name: "",
  imageUrl: "",
};
