import { createGlobalStyle } from "styled-components";
import mainTheme, { devices } from "./theme/main";

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

    @media only screen and ${devices.min.md} {
      &::-webkit-scrollbar {
        width: ${mainTheme.sizes.basePadding}px;
      }
      &::-webkit-scrollbar-track {
        background: ${mainTheme.colors.background};
        border-radius: ${mainTheme.sizes.basePadding}px;
        cursor: pointer;
      }
      &::-webkit-scrollbar-thumb {
        background: ${mainTheme.colors.scrollbar};
        border-radius: ${mainTheme.sizes.basePadding}px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: ${mainTheme.colors.scrollbar};
      }
    }
  }
`