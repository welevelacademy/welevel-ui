import { motion } from "framer-motion/dist/framer-motion";
import React from "react";
import styled from "styled-components";

// Type
interface CardWrapperProperties {
  children: React.ReactNode;
}

// Component
const OuterWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  user-select: none;
`;

const InnerWrapper = styled(motion.div).attrs({
  initial: "rest",
  whileHover: "hover",
  animate: "rest",
  whileTap: "tap",
  variants: {
    hover: {
      y: "-4px",
    },
    tap: {
      scale: 0.975,
    },
    rest: {
      y: 0,
      scale: 1,
    },
  },
})`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  position: relative;
`;

export const CardWrapper: React.FC<CardWrapperProperties> = ({ children }) => (
  <OuterWrapper>
    <InnerWrapper>{children}</InnerWrapper>
  </OuterWrapper>
);
