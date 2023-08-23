import styled from "styled-components";
import mainTheme from "../../theme/main";

export const UserWrapper = styled.article`
  display: inline-block;
  aspect-ratio: 1;
  height: 100%;
  width: 100%;
`;

export const UserElement = styled.div`
  display: inline-block;
  aspect-ratio: 1;
  height: 100%;
  width: 100%;
`;


export const UserDetails = styled.section`
  display: inline-block;
  position: absolute;
  color: ${mainTheme.colors.navHighlightedText};
  background: rgba(0, 0, 0, .5);
  border-radius: 0 0 ${mainTheme.sizes.basePadding}px 0;
  padding: 5px 8px;
  z-index: 9;
`;

export const UserDetail = styled.strong`
  display: block;
`;

