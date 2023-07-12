import { motion } from "framer-motion/dist/framer-motion";
import React from "react";
import { Trans } from "react-i18next";
import styled from "styled-components";

import { CardComponent } from "..";
import { Cockade } from "./components/Cockade";

// Type
// TODO:
// ContentTypeDescription -> (Studiplan)
// completionPercentage - (progression bar)
// number of course (4h 5min)

export interface CardStudyPlanProperties {
  name: string;
  description: string;
  imageUrl: string;
  isInteractive?: boolean;
}

const CockadeWrapper = styled(motion.svg).attrs({
  variants: {
    hover: {
      scale: 1.1,
      y: 4,
    },
  },
  transition: {
    scale: {
      type: "spring",
      damping: 5,
      stiffness: 100,
      // restDelta: 0.001,
    },
  },
})`
  aspect-ratio: 1;
  left: 0;
  position: absolute;
  top: ${({ theme }) => theme.spacing(0.5)}px;
  width: ${({ theme }) => theme.spacing(10)}px;
`;

// Component
export const CardStudyPlan: React.FC<CardStudyPlanProperties> = ({
  name,
  description,
  imageUrl,
  isInteractive = true,
  // ...other // FIXME: check how to pass
}) => {
  return (
    <CardComponent.Wrapper isInteractive={isInteractive}>
      <CardComponent.Paper>
        <CardComponent.Cover $imageUrl={imageUrl}>
          <CockadeWrapper>
            <Cockade />
          </CockadeWrapper>
        </CardComponent.Cover>
        <CardComponent.Content>
          <CardComponent.Header>
            <Trans i18nKey="general.certifiedStudyPlan_one"></Trans>
          </CardComponent.Header>
          <CardComponent.Body
            title={name}
            description={description}
          ></CardComponent.Body>
          <CardComponent.Footer>8 corsi</CardComponent.Footer>
        </CardComponent.Content>
      </CardComponent.Paper>
    </CardComponent.Wrapper>
  );
};
