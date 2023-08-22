import styled from "styled-components";
import mainTheme from "../../theme/main";

export const HomeContentWrapper = styled.article`
  width: ${mainTheme.sizes.appWidth}px;
  max-width: 100%;
  font-size: 1.3rem; 
  margin: ${(mainTheme.sizes.basePadding * 2)}px auto 0; 
`;

