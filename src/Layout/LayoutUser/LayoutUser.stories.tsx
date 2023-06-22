import { Meta, Story } from "@storybook/react";

import { CardCourse, CardUser, CardUserSkeleton } from "../../components";
import { LayoutUser, LayoutUserProperties } from "./LayoutUser";

export default {
  component: LayoutUser,
  title: "Layout/LayoutUser",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<LayoutUserProperties> = (args) => (
  <div style={{ paddingTop: "56px" }}>
    <LayoutUser {...args} />
  </div>
);

// BASE
export const Base = Template.bind({});

Base.args = {
  segmentedControlLayoutID: "LayoutUserStory",
  coverImageUrl:
    "https://source.unsplash.com/random/854×540/?food&orientation=landscape",
  type: "teacher",
  userName: "Francesca Toni",
  userDescription: "Chef presso @Cucine&Cuoche",
  userImageUrl: "https://source.unsplash.com/random/600×600/?woman-portrait",
  links: [
    { href: "https://welevel.academy/", label: "Website" },
    {
      href: "https://www.gutenberg.org/cache/epub/2701/pg2701-images.html",
      label: "Download ebook",
    },
  ],
  reviewSummary: {
    numberOfReviews: 12,
    value: 4.76,
  },
  coursesSection: {
    children: Array(2)
      .fill("card-user")
      .map((item) => (
        <CardCourse
          key={item}
          description={`Sai che anche la giusta mise en place può farti vendere un tavolo? 
          Entrare in un ristorante e notare la cura nei dettagli della sala, dall’ambiente alla corretta armocromia in tavola, 
          sicuramente gioca a vantaggio del tuo cliente e alla sua voglia di sedersi e godersi il pranzo o la cena.`}
          name="Istruzioni per una mise en place a regola d'arte"
          imageUrl="https://source.unsplash.com/random/854×540/?food-presentation&orientation=landscape"
        />
      )),
    handleShowMore: () => console.log("show more"),
    isLoading: false,
    ItemsLimit: 12,
    ItemsTotal: 28,
    // TODO: change with CardCourse skeleton
    loadingItem: <CardUserSkeleton type="partnerAgency" />,
  },
  eventsSection: {
    // TODO: change with CardEvent
    children: Array(2)
      .fill("card-user")
      .map((item) => (
        <CardCourse
          key={item}
          description={`Sai che anche la giusta mise en place può farti vendere un tavolo? 
          Entrare in un ristorante e notare la cura nei dettagli della sala, dall’ambiente alla corretta armocromia in tavola, 
          sicuramente gioca a vantaggio del tuo cliente e alla sua voglia di sedersi e godersi il pranzo o la cena.`}
          name="Istruzioni per una mise en place a regola d'arte"
          imageUrl="https://source.unsplash.com/random/854×540/?food-presentation&orientation=landscape"
        />
      )),
    handleShowMore: () => console.log("show more"),
    isLoading: false,
    ItemsLimit: 12,
    ItemsTotal: 28,
    // TODO: change with CardEventSkeleton
    loadingItem: <CardUserSkeleton type="partnerAgency" />,
  },
  partnerAgenciesSection: {
    children: Array(2)
      .fill("card-user")
      .map((item) => (
        <CardUser
          key={item}
          description="Ottimizziamo il tuo modo di lavorare e aumentiamo i profitti del tuo hotel con i giusti strumenti e le migliori soluzioni."
          name="Hotelperformance"
          type="partnerAgency"
          imageUrl="https://source.unsplash.com/random/600×600/?logo"
        />
      )),
    handleShowMore: () => console.log("show more"),
    isLoading: false,
    ItemsLimit: 12,
    ItemsTotal: 28,
    loadingItem: <CardUserSkeleton type="partnerAgency" />,
    showDivider: false,
  },
};
