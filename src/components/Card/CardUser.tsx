import React from "react";
import styled from "styled-components";

import { Avatar } from "../Avatar";
import { CardComponent } from ".";

// Type
interface CardUserProperties {
  name: string;
  description: string;
  imageUrl: string;
  type: "teacher" | "agency";
}

// Styled
const Wrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  position: relative;
`;

// Aspect ratio spacer
// two elements that help create an 16/9 area to simulate the space of e normal card cover
const AspectSpacerTop = styled.div`
  // An element with the 100% width and 2/3 of the height of the 16/9 container
  aspect-ratio: 24/9;
`;
const AspectSpacerBottom = styled.div`
  // An element with the 100% width and 1/3 of the height of the 16/9 container
  aspect-ratio: 48/9;
`;

// An element that reproduce the dimension of the card cover in the other card components
const AspectAvatarContainer = styled.div`
  aspect-ratio: 16/9;
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

// Component
export const CardUser: React.FC<CardUserProperties> = ({
  name,
  description,
  imageUrl,
  type,
}) => {
  const isAvatarSquared = type === "agency";
  // FIXME: come gestire traduzione ?
  // o va riportata su tutte le rotte o si devono rendere comuni anche i dizionari
  // FIXME: REMOVE THIS
  const role = {
    agency: "Azienda partner",
    teacher: "Docente",
  }[type.toString()];

  return (
    <Wrapper>
      <AspectSpacerTop />

      <AspectAvatarContainer>
        <Avatar
          alternativeText=""
          imageUrl={imageUrl}
          isSquared={isAvatarSquared}
          size="fullHeight"
          shadow="stroke"
          borderWidth="md"
        />
      </AspectAvatarContainer>

      <CardComponent.Wrapper>
        <AspectSpacerBottom />
        {/* TODO: use CardComponent.Cover in course and event card */}
        {/* <CardComponent.Cover $imageUrl={imageUrl} /> */}
        <CardComponent.Content>
          <CardComponent.Header
            endDecorator={
              <CardComponent.HeaderReview>4,5</CardComponent.HeaderReview>
            }>
            {role ?? ""}
          </CardComponent.Header>
          <CardComponent.Body title={name}>{description}</CardComponent.Body>
          <CardComponent.Footer>8 corsi</CardComponent.Footer>
        </CardComponent.Content>
      </CardComponent.Wrapper>
    </Wrapper>
  );
};
