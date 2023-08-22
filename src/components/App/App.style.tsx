import styled from "styled-components";
import mainTheme from "../../theme/main";

export const baseTransitionTime = "300ms";

export const Container = styled.section`
  margin: 0 auto;
  max-width: 100%;
  overflow: hidden;
`;

export const Main = styled.main`
  padding: ${mainTheme.sizes.basePadding}px;
`;

