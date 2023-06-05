import { motion } from "framer-motion/dist/framer-motion";
import React from "react";
import styled from "styled-components";

import { CardComponent } from "..";
import { Avatar } from "../../Avatar";

// Type
export interface CardUserProperties {
  name: string;
  description: string;
  imageUrl: string;
  type: "teacher" | "agency";
}

// Styled

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
const AspectAvatarContainer = styled(motion.div).attrs({
  variants: {
    rest: { scale: 1 },
    hover: {
      scale: 1.04,
    },
  },
  transition: {
    scale: {
      type: "spring",
      damping: 5,
      stiffness: 100,
      restDelta: 0.001,
    },
  },
})`
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
    <CardComponent.Wrapper>
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

      <CardComponent.Paper>
        <AspectSpacerBottom />
        <CardComponent.Content>
          <CardComponent.Header
            endDecorator={
              <CardComponent.HeaderReview>4,5</CardComponent.HeaderReview>
            }>
            {role ?? ""}
          </CardComponent.Header>
          <CardComponent.Body
            title={name}
            description={description}></CardComponent.Body>
          <CardComponent.Footer>8 corsi</CardComponent.Footer>
        </CardComponent.Content>
      </CardComponent.Paper>
    </CardComponent.Wrapper>
  );
};
