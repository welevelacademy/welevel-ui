import { Meta, Story } from "@storybook/react";

import { CardUser, CardUserSkeleton } from "../../Card";
import ContentGridShowMore, {
  ContentGridShowMoreProperties,
} from "./ContentGridShowMore";

export default {
  component: ContentGridShowMore,
  title: "Layout/ContentGrid/ContentGridShowMore",
} as Meta;

const Template: Story<ContentGridShowMoreProperties> = (args) => (
  <>
    <ContentGridShowMore {...args} />
    <ContentGridShowMore {...args} />
  </>
);
// BASE
export const Base = Template.bind({});

const offset = Math.floor(Math.random() * (22 - 1) + 1);

Base.args = {
  isLoading: false,
  loadingItem: <CardUserSkeleton />,
  title: "Docenti di Cucine&Cuochi",
  children: Array(offset)
    .fill("card-user")
    .map((_, index) => (
      <CardUser
        key={`show-more-base-${index}`}
        description={
          index % 2 === 0
            ? "Chef presso @cucinaInFiamme"
            : `Sono un consulente di marketing per il settore dell'ospitalità. 
          Creo concept alberghieri insieme a studi di architettura e agenzie di comunicazione. 
          Sviluppo idee basandomi su ricerche e analisi, sperimento, creo scenari e definisco percorsi di esperienze all'interno degli hotel.`
        }
        name="Francesca Toni"
        type="teacher"
        imageUrl="https://source.unsplash.com/random/600×600/?woman-portrait"
        numberOfCourses={5}
        numberOfEvents={3}
        reviewValue={4.2}
      />
    )),
  ItemsLimit: 12,
  ItemsTotal: 22,
};

export const Loading = Template.bind({});

Loading.args = {
  isLoading: true,
  loadingItem: <CardUserSkeleton />,
  title: "Docenti di Cucine&Cuochi",
  children: Array(offset)
    .fill("card-user")
    .map((_, index) => (
      <CardUser
        key={`loading-${index}`}
        description={
          index % 2 === 0
            ? "Chef presso @cucinaInFiamme"
            : `Sono un consulente di marketing per il settore dell'ospitalità. 
            Creo concept alberghieri insieme a studi di architettura e agenzie di comunicazione. 
            Sviluppo idee basandomi su ricerche e analisi, sperimento, creo scenari e definisco percorsi di esperienze all'interno degli hotel.`
        }
        name="Francesca Toni"
        type="teacher"
        imageUrl="https://source.unsplash.com/random/600×600/?woman-portrait"
        numberOfCourses={5}
        numberOfEvents={3}
        reviewValue={4.2}
      />
    )),
  ItemsLimit: 12,
  ItemsTotal: 22,
};

//
export const AllItems = Template.bind({});

AllItems.args = {
  isLoading: false,
  loadingItem: <CardUserSkeleton />,
  title: "Docenti di Cucine&Cuochi",
  children: Array(22)
    .fill("card-user")
    .map((_, index) => (
      <CardUser
        key={`allitems-${index}`}
        description={
          index % 2 === 0
            ? "Chef presso @cucinaInFiamme"
            : `Sono un consulente di marketing per il settore dell'ospitalità. 
            Creo concept alberghieri insieme a studi di architettura e agenzie di comunicazione. 
            Sviluppo idee basandomi su ricerche e analisi, sperimento, creo scenari e definisco percorsi di esperienze all'interno degli hotel.`
        }
        name="Francesca Toni"
        type="teacher"
        imageUrl="https://source.unsplash.com/random/600×600/?woman-portrait"
        numberOfCourses={5}
        numberOfEvents={3}
        reviewValue={4.2}
      />
    )),
  ItemsLimit: 12,
  ItemsTotal: 22,
};

export const EmptyContent = Template.bind({});

EmptyContent.args = {
  children: [],
  title: "Docenti di Cucine&Cuochi",
};

// TODO: empty
export const Skeleton = Template.bind({});

Skeleton.args = {
  children: [],
  title: "Docenti di Cucine&Cuochi",
  isLoading: true,
  loadingItem: <CardUserSkeleton />,
};
