import styled from "styled-components";
import mainTheme, { devices } from "../../theme/main";

export const Wrapper = styled.header`
  width: 100%;
  background: ${mainTheme.colors.primary};
  border-bottom: 3px solid ${mainTheme.colors.primary};
`;

export const Content = styled.section`
  width: ${mainTheme.sizes.appWidth}px;
  max-width: 100%;
  margin: 0 auto;
  padding: ${mainTheme.sizes.basePadding}px;
  display: flex;
  align-items: stretch;

  @media only screen and ${devices.max.lg} {
    flex-direction: column;
  }
`;
