import { Meta, Story } from "@storybook/react";

import { CardCourse, CardCourseProperties } from "./CardCourse";

export default {
  component: CardCourse,
  title: "Card/CardCourse",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<CardCourseProperties> = (args) => (
  <div style={{ maxWidth: 300 }}>
    <CardCourse {...args} />
  </div>
);

// BASE
export const Base = Template.bind({});

Base.args = {
  description: `Sai che anche la giusta mise en place può farti vendere un tavolo? 
  Entrare in un ristorante e notare la cura nei dettagli della sala, dall’ambiente alla corretta armocromia in tavola, 
  sicuramente gioca a vantaggio del tuo cliente e alla sua voglia di sedersi e godersi il pranzo o la cena.`,
  name: "Istruzioni per una mise en place a regola d'arte",
  imageUrl:
    "https://source.unsplash.com/random/854×540/?food-presentation&orientation=landscape",
};

// LONG CONTENT
export const LongContent = Template.bind({});

LongContent.args = {
  description: `Sai che anche la giusta mise en place può farti vendere un tavolo? 
  Entrare in un ristorante e notare la cura nei dettagli della sala, dall’ambiente alla corretta armocromia in tavola, 
  sicuramente gioca a vantaggio del tuo cliente e alla sua voglia di sedersi e godersi il pranzo o la cena.`,
  name: "Istruzioni per una mise en place a regola d'arte",
  imageUrl:
    "https://source.unsplash.com/random/854×540/?food-presentation&orientation=landscape",
};

// EMPTY CONTENT
export const EmptyContent = Template.bind({});

EmptyContent.args = {
  description: "",
  name: "",
  imageUrl: "",
};
