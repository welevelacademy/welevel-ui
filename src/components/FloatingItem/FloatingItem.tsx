import { Paper } from "@material-ui/core";
import { motion } from "framer-motion/dist/framer-motion";
import React from "react";
import styled from "styled-components";

// Type
export interface FloatingItemProperties {
  isVisible: boolean;
  children: React.ReactNode;
}

// Styled
const Floating = styled(motion.div)`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  padding: ${({ theme }) => theme.spacing(1)}px;
  pointer-events: none;
  position: fixed;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.appBar};
`;

const Wrapper = styled(Paper).attrs({
  elevation: 8,
})`
  align-items: center;
  bottom: ${({ theme }) => theme.spacing(1)}px;
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)}px;
  left: ${({ theme }) => theme.spacing(1)}px;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing(1)}px;
  pointer-events: auto;
  border-radius: ${({ theme }) => theme.spacing(1.5)}px;
`;

// JSX
export const FloatingItem: React.FC<FloatingItemProperties> = ({
  isVisible,
  children,
}) => {
  return (
    <Floating
      variants={{
        visible: {
          opacity: 1,
          y: 0,
        },
        hidden: {
          opacity: 0,
          y: "100%",
        },
      }}
      animate={isVisible ? "visible" : "hidden"}
    >
      <Wrapper>{children}</Wrapper>
    </Floating>
  );
};
