import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Netflix Sans';
    src: url('../public/fonts/NetflixSans_W_Rg.woff2') format('woff2');        
  }

  html, body {
        font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000000;
        color: #333333;
        font-size: 16px;
        margin: 0;
    }
`;
