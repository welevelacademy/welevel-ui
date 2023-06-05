import styled from "styled-components";

// Type
interface CardCoverProperties {
  $imageUrl: string;
}

// Component
export const CardCover = styled.div<CardCoverProperties>`
  aspect-ratio: 16/9;
  background-color: ${({ theme }) => theme.palette.background.paper};
  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  flex: 0 0 auto;
  position: relative;
`;
