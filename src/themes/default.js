import deepMerge from 'deepmerge';
import theme from 'styled-theming';

import buttonConfigBase from 'core/Button/model';

const baseTheme = {
  ...buttonConfigBase,
};

const defaultTheme = {
  button: {
    colors: {
      main: 'orange',
    },
  },
};

export default deepMerge(baseTheme, defaultTheme);
