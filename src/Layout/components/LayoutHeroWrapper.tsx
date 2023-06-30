import { Paper } from "@material-ui/core";
import styled from "styled-components";

// Styled
export const LayoutHeroWrapper = styled(Paper).attrs({
  square: true,
  elevation: 2,
})`
  box-shadow: ${({ theme }) => theme.shadows[1]};
`;
