import styled from "styled-components";
import { MutableRefObject } from "react";
import mainTheme from "../../theme/main";

export const TextWrapper = styled.article<{
  ref: MutableRefObject<any>,
  $isHidden?: boolean,
}>`
  display: inline-block;
  aspect-ratio: 1;
  height: 100%;
  width: 100%;

  ${props => props.$isHidden && `
    background-color: ${mainTheme.colors.imagePlaceholderBg};

    ${TextElement} {
      display: none;
    }
  `}
`;

export const TextElement = styled.p`
  display: inline-block;
  aspect-ratio: 1;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

