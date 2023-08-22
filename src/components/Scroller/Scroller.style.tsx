import styled from "styled-components";
import { MutableRefObject } from "react";
import mainTheme from "../../theme/main";
import {baseTransitionTime} from "../App/App.style";

export const Container = styled.div<{ ref: MutableRefObject<any> }>`
  z-index: 1;
`;

export const ScrollToTopButton = styled.button<{ $isHidden: boolean }>`
  cursor: pointer;
  width: 60px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  aspect-ratio: 1;
  background: ${mainTheme.colors.primary};
  border-radius: 10px;
  z-index: 2;
  transition: background ${baseTransitionTime},
              opacity ${baseTransitionTime};
  
  &:hover,
  &:focus {
    background: ${mainTheme.colors.primaryStrong};
  }
  
  &:before {
    content: "";
    position: absolute;
    inset: 30%;
    transform: translateY(20%) rotate(-45deg);
    border-top: 5px solid #fff;
    border-right: 5px solid #fff;
  }
  
  ${props => props.$isHidden && `
     pointer-events: none;
     opacity: 0;
  `}
`;
