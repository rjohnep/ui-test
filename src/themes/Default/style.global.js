import { injectGlobal } from 'styled-components';

import theme from './index';
import fonts from './fonts';

injectGlobal`
  ${fonts};

  * {
    outline: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  body {
    font: 400 ${theme.font.size} /${theme.font.lineHeight} ${theme.font.family};
    color: ${theme.colors.text};
    -webkit-touch-callout: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
