// Aspect ratio spacer

import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";

// two elements that help create an 16/9 area to simulate the space of e normal card cover
export const AspectSpacerTop = styled.div`
  // An element with the 100% width and 2/3 of the height of the 16/9 container
  aspect-ratio: 24/9;
`;
export const AspectSpacerBottom = styled.div`
  // An element with the 100% width and 1/3 of the height of the 16/9 container
  aspect-ratio: 48/9;
`;

// An element that reproduce the dimension of the card cover in the other card components
export const AspectAvatarContainer = styled(motion.div).attrs({
  variants: {
    hover: {
      scale: 1.04,
    },
    focus: {
      scale: 1.04,
    },
  },
  //   transition: {
  //     // Look at this
  //     // https://blog.maximeheckel.com/posts/the-physics-behind-spring-animations/
  //     scale: {
  //         type: "spring",
  //         damping: 6,
  //         stiffness: 200,
  //         restDelta: 0.001,
  //     },
  //   },
})`
  aspect-ratio: 16/9;
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
`;
