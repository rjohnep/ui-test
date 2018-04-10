import deepMerge from 'deepmerge';
import defaultTheme from '../Default';

const customTheme = {
  colors: {
    primary: {
      main: 'purple',
      dark: 'MediumPurple ',
      darker: 'RebeccaPurple ',
    },
  },
};

export default deepMerge(defaultTheme, customTheme);
