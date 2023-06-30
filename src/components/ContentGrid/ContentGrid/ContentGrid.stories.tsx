import { Container } from "@material-ui/core";
import { Meta, Story } from "@storybook/react";

import { CardUser, CardUserSkeleton } from "../../Card";
import ContentGrid, { ContentGridProperties } from "./ContentGrid";

export default {
  component: ContentGrid,
  title: "Layout/ContentGrid/ContentGrid",
} as Meta;

const Template: Story<ContentGridProperties> = (args) => {
  return (
    <Container>
      <ContentGrid {...args}></ContentGrid>
    </Container>
  );
};
// BASE
export const Base = Template.bind({});

Base.args = {
  isLoading: false,
  loadingItem: <CardUserSkeleton />,
  children: Array(Math.floor(Math.random() * (12 - 1) + 1))
    .fill("card-user")
    .map((item, index) => (
      <CardUser
        key={item}
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
};

// BASE
export const Loading = Template.bind({});

Loading.args = {
  isLoading: true,
  loadingItem: <CardUserSkeleton />,
  children: Array(Math.floor(Math.random() * (7 - 1) + 1))
    .fill("card-user")
    .map((item, index) => (
      <CardUser
        key={item}
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
};
