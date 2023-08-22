import styled from "styled-components";
import mainTheme from "../../theme/main";
import { baseTransitionTime } from "../App/App.style";
import { MutableRefObject } from "react";

export const ImageWrapper = styled.article<{
  ref: MutableRefObject<any>,
  $isHidden?: boolean,
}>`
  display: inline-block;
  background-size: cover;
  background-position: center center;
  box-sizing: border-box;
  border-radius: 0;
  margin: 0;
  padding: 0;
  aspect-ratio: 1;
  height: 100%;
  width: 100%;
  overflow: hidden;

  ${props => props.$isHidden && `
    background-color: ${mainTheme.colors.imagePlaceholderBg};

    ${ImageElement} {
      display: none;
    }
  `}
`;

export const ImageElement = styled.img<{
  $isSourceLoaded?: boolean, $isHidden?: boolean
}>`
  transition: transform ${baseTransitionTime};
  transform-origin: center;

  &:hover,
  &:focus {
    border-radius: 10px;
    transform: scale(1.2);
  }
  
  ${props => props.$isSourceLoaded && `
     height: 100%;
     width: 100%;
  `}
`;
