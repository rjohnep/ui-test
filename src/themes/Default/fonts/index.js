import { css } from 'styled-components';

import GraphikRegularWW from './graphik/Graphik-Regular-Cy-Web.woff2';
import GraphikRegularW from './graphik/Graphik-Regular-Cy-Web.woff';
import GraphikSemiWW from './graphik/Graphik-Semibold-Cy-Web.woff2';
import GraphikSemiW from './graphik/Graphik-Semibold-Cy-Web.woff';
import GraphikBoldWW from './graphik/Graphik-Bold-Cy-Web.woff2';
import GraphikBoldW from './graphik/Graphik-Bold-Cy-Web.woff';

export default css`
  @font-face {
    font-family: "Graphik";
    src: url("${GraphikRegularWW}") format("woff2"),
        url("${GraphikRegularW}") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Graphik";
    src: url("${GraphikSemiWW}") format("woff2"),
        url("${GraphikSemiW}") format("woff");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Graphik";
    src: url("${GraphikBoldWW}") format("woff2"),
        url("${GraphikBoldW}") format("woff");
    font-weight: 700;
    font-style: normal;
  }
`;
