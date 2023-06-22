import { Paper, Typography, useTheme } from "@material-ui/core";
import { motion } from "framer-motion/dist/framer-motion";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

// Type

type Item = { id: string } & (
  | { label: string; customItem?: undefined }
  | { label?: undefined; customItem: JSX.Element }
);

export interface SegmentedControlProperties {
  segmentedControlLayoutID: string;
  items: Item[];
  activeItemID: string;
  onClick: (itemID: string) => void;
  itemsRole?: React.AriaRole;
}

// Styled
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: ${({ theme }) => theme.shape.borderRadius * 2}px;
  display: flex;
  list-style: none;
  overflow-x: auto;
  padding: ${({ theme }) => theme.spacing(1)}px;
  position: relative;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  * {
    user-select: none;
  }
`;

const ItemWrapper = styled(motion.div)`
  align-items: center;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  cursor: pointer;
  display: inline-flex;
  flex: 1 0 auto;
  justify-content: center;
  min-height: ${({ theme }) => theme.spacing(4)}px;
  padding: ${({ theme }) => theme.spacing(1, 2)};
  position: relative;
`;

const ItemPaperWrapper = styled(motion.div)`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const ItemPaper = styled(Paper).attrs({
  elevation: 2,
})`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  height: 100%;
  width: 100%;
`;

const CustomItemWrapper = styled.div`
  position: relative;
`;

const ItemLabel = styled(Typography).attrs({
  variant: "button",
  color: "inherit",
  component: motion.span,
})`
  position: relative;
  text-align: center;
`;

// Component
// TODO: add custom Items?
export const SegmentedControl: React.FC<SegmentedControlProperties> = ({
  segmentedControlLayoutID,
  activeItemID,
  items,
  itemsRole,
  onClick,
}) => {
  // Theme
  const theme = useTheme();

  // Ref
  const wrapReference = useRef<HTMLDivElement>(null);

  // TODO: display nav arrow when scrollable
  // const canScroll =
  // wrapReference.current &&
  // wrapReference.current?.scrollWidth > wrapReference.current?.clientWidth;

  useScrollToSelectedElement(
    wrapReference,
    items.findIndex(({ id }) => id === activeItemID),
  );

  // JSX
  return (
    <Wrapper ref={wrapReference}>
      {items.map((item) => {
        const isActive = item.id === activeItemID;

        return (
          <ItemWrapper
            onClick={() => onClick(item.id)}
            onKeyDown={() => onClick(item.id)}
            key={item.id}
            role={itemsRole || "link"}
            tabIndex={0}
            aria-current={isActive}
            animate={{
              color: isActive
                ? theme.palette.text.primary
                : theme.palette.text.secondary,
            }}
          >
            {isActive && (
              <ItemPaperWrapper layoutId={segmentedControlLayoutID}>
                <ItemPaper />
              </ItemPaperWrapper>
            )}
            {item.customItem ? (
              <CustomItemWrapper>{item.customItem}</CustomItemWrapper>
            ) : (
              <ItemLabel>{item.label}</ItemLabel>
            )}
          </ItemWrapper>
        );
      })}
    </Wrapper>
  );
};

export default SegmentedControl;

// Custom hooks
function useScrollToSelectedElement(
  wrapReference: React.RefObject<HTMLDivElement>,
  activeItemIndex: number,
) {
  useEffect(() => {
    // Find the selected dom element and scroll it into the view

    // This is a custom scroll function as alternative to
    // scrollIntoView({
    //     behavior: "smooth",
    //     inline: "center",
    //     block: "nearest",
    //   })

    // ActiveElement data
    // eslint-disable-next-line security/detect-object-injection
    const activeElement = wrapReference.current?.children[activeItemIndex];

    const activeElementClientRect = activeElement?.getBoundingClientRect();
    const activeElementWidth = activeElementClientRect?.width ?? 0;
    const activeElementLeft = activeElementClientRect?.left ?? 0;

    // Wrapper data
    const wrapperClientRect = wrapReference.current?.getBoundingClientRect();
    const wrapperLeft = wrapperClientRect?.left ?? 0;
    const scrolledPosition = wrapReference.current?.scrollLeft ?? 0;
    const wrapperWidth = wrapperClientRect?.width ?? 0;

    const offset = (wrapperWidth - activeElementWidth) / 2;

    // Scroll function
    wrapReference.current?.scrollTo({
      left: activeElementLeft - wrapperLeft + scrolledPosition - offset,
      top: 0,
      behavior: "smooth",
    });
  }, [activeItemIndex, wrapReference]);
}
