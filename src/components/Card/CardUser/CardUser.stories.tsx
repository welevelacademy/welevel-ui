import { Meta, Story } from "@storybook/react";

import { ContentGrid } from "../../ContentGrid";
import { CardUser, CardUserProperties } from "./CardUser";
import {
  CardUserSkeleton,
  CardUserSkeletonProperties,
} from "./CardUser.skeleton";

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
  reviewValue: 4.8,
  numberOfCourses: 4,
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
  numberOfCourses: 8,
  numberOfEvents: 2,
  reviewValue: 4.5,
};

// EMPTY CONTENT
export const EmptyContent = Template.bind({});

EmptyContent.args = {
  description: "",
  name: "",
  imageUrl: "",
  type: "teacher",
};

// Skeleton
const SkeletonTemplate: Story<CardUserSkeletonProperties> = (args) => (
  <ContentGrid
    isLoading={false}
    loadingItem={<div></div>}
    numberOfLoadingRows={2}
  >
    <CardUserSkeleton {...args} />
    <CardUser
      description="Descrizione"
      name="Francesca Toni"
      type="teacher"
      imageUrl="broken"
      numberOfCourses={6}
      numberOfEvents={1}
      reviewValue={4.5}
    />
  </ContentGrid>
);

export const Skeleton = SkeletonTemplate.bind({});

Skeleton.args = {
  type: "teacher",
};
