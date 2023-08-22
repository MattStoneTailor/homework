import styled from "styled-components";
import mainTheme from "../../theme/main";

const spinnerColor = mainTheme.colors.primary;

export const Container = styled.div`
  text-align: center;
  grid-column: 1/-1;
  margin: ${(mainTheme.sizes.basePadding * 2)}px auto;
`;

export const SpinnerIcon = styled.figure`
  display: inline-block;
  width: 80px;
  height: 80px;
  
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${spinnerColor};
    border-color: ${spinnerColor} transparent ${spinnerColor} transparent;
    animation: spinner-animation 1.2s linear infinite;
  }
  @keyframes spinner-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
