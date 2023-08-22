import { createGlobalStyle } from "styled-components";
import mainTheme from "./theme/main";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: ${mainTheme.colors.background};
  }
  
  body {
    font-family: ${mainTheme.fonts.family};
    font-size: ${mainTheme.fonts.baseFontSize}px;
    color: ${mainTheme.colors.text};
  }
`