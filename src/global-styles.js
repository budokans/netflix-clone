import { createGlobalStyle } from "styled-components";

import netflixSansWoff2 from "./fonts/NetflixSans-Medium.woff2";
import netflixSansBoldWoff2 from "./fonts/NetflixSans-Bold.woff2";
import netflixSansWoff from "./fonts/NetflixSans-Medium.woff";
import netflixSansBoldWoff from "./fonts/NetflixSans-Bold.woff";
import netflixSansTtf from "./fonts/NetflixSans-Medium.ttf";
import netflixSansBoldTtf from "./fonts/NetflixSans-Bold.ttf";
import netflixSansEot from "./fonts/NetflixSans-Medium.eot";
import netflixSansBoldEot from "./fonts/NetflixSans-Bold.eot";

export const GlobalStyles = createGlobalStyle`
  @font-face {
  font-family: 'Netflix Sans';
  src: url(${netflixSansEot});
  src: url(${netflixSansTtf}) format('truetype'),
       url(${netflixSansWoff}) format('woff'),
       url(${netflixSansWoff2}) format('woff2');
  font-weight: normal;
}

@font-face {
  font-family: 'Netflix Sans';
  src: url(${netflixSansBoldEot});
  src: url(${netflixSansBoldTtf}) format('truetype'),
       url(${netflixSansBoldWoff}) format('woff'),
       url(${netflixSansBoldWoff2}) format('woff2');
  font-weight: bold;
}

html, body {
  font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #000000;
  color: #333333;
  font-size: 16px;
  }
`;
