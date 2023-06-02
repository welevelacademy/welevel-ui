import { Meta, Story } from "@storybook/react";

import { CardUser, CardUserProperties } from "./CardUser";

export default {
  component: CardUser,
  title: "Card/CardUser",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<CardUserProperties> = (args) => (
  <div style={{ maxWidth: 300 }}>
    <CardUser {...args} />
  </div>
);

// BASE
export const Base = Template.bind({});

Base.args = {
  description: "Marketing Manager di welevel.academy",
  name: "Francesco Toni",
  imageUrl: "https://source.unsplash.com/random/600×600/?portrait",
  type: "teacher",
};

// LONG CONTENT
export const LongContent = Template.bind({});

LongContent.args = {
  description: `Sono un consulente di marketing per il settore dell'ospitalità. 
  Creo concept alberghieri insieme a studi di architettura e agenzie di comunicazione. 
  Sviluppo idee basandomi su ricerche e analisi, sperimento, creo scenari e definisco percorsi di esperienze all'interno degli hotel.`,
  name: "Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr. Philadelphia",
  imageUrl: "https://source.unsplash.com/random/600×600/?portrait",
  type: "teacher",
};

// EMPTY CONTENT
export const EmptyContent = Template.bind({});

EmptyContent.args = {
  description: "",
  name: "",
  imageUrl: "",
  type: "teacher",
};