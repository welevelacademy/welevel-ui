import { Meta, Story } from "@storybook/react";

import { CardCourse, CardCourseProperties } from "./CardCourse";
import { CardUser, CardUserProperties } from "./CardUser";

export default {
  //   component: CardUser,
  title: "Card/AllCards",
} as Meta;

type StoryAllCardsProperties = {
  cardTeacher: CardUserProperties;
  cardAgency: CardUserProperties;
  cardCourse: CardCourseProperties;
};

//👇 We create a “template” of how args map to rendering
const Template: Story<StoryAllCardsProperties> = (args) => (
  <div
    style={{
      display: "grid",
      gap: "16px",
      gridTemplateColumns: "repeat(auto-fit, minmax(min-content, 280px))",
    }}
  >
    <CardUser {...args.cardTeacher} />
    <CardCourse {...args.cardCourse} />
    <CardUser {...args.cardAgency} />
  </div>
);

// BASE
export const Base = Template.bind({});

Base.args = {
  cardTeacher: {
    description: "Marketing Manager di welevel.academy",
    name: "Francesca Toni",
    imageUrl: "https://source.unsplash.com/random/600×600/?woman-portrait",
    type: "teacher",
  },
  cardAgency: {
    description:
      "Ottimizziamo il tuo modo di lavorare e aumentiamo i profitti del tuo hotel con i giusti strumenti e le migliori soluzioni.",
    name: "Hotelperformance",
    imageUrl: "https://source.unsplash.com/random/600×600/?logo",
    type: "agency",
  },
  cardCourse: {
    description: `Sai che anche la giusta mise en place può farti vendere un tavolo? 
    Entrare in un ristorante e notare la cura nei dettagli della sala, dall’ambiente alla corretta armocromia in tavola, 
    sicuramente gioca a vantaggio del tuo cliente e alla sua voglia di sedersi e godersi il pranzo o la cena.`,
    name: "Istruzioni per una mise en place a regola d'arte",
    imageUrl: "https://source.unsplash.com/random/600×600/?food-presentation",
  },
};
