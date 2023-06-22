import styled from "styled-components";

// Styled
export const LayoutHeroWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[1]};
`;
