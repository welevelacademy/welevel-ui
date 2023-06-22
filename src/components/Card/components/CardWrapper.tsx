import { motion } from "framer-motion/dist/framer-motion";
import React from "react";
import styled from "styled-components";

// Type
interface CardWrapperProperties {
  children: React.ReactNode;
  isInteractive: boolean;
}

// Component
const OuterWrapper = styled.div<{ $isInteractive: boolean }>`
  cursor: ${({ $isInteractive }) => ($isInteractive ? "pointer" : "default")};
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  user-select: none;
`;

const InnerWrapper = styled(motion.div)`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  position: relative;
`;

export const CardWrapper: React.FC<CardWrapperProperties> = ({
  children,
  isInteractive,
}) => {
  const interactiveAttributes = isInteractive
    ? {
        initial: "rest",
        whileHover: "hover",
        whileTap: "tap",
        whileFocus: "focus",
        variants: {
          hover: {
            y: "-4px",
          },
          focus: {
            y: "-4px",
          },
          tap: {
            scale: 0.975,
          },
        },
      }
    : {};

  return (
    <OuterWrapper $isInteractive={isInteractive}>
      <InnerWrapper {...interactiveAttributes}>{children}</InnerWrapper>
    </OuterWrapper>
  );
};
