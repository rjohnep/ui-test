import deepMerge from 'deepmerge';
import baseTheme from '../Base';

const defaultTheme = {
  colors: {
    black: '#1B1D24',
  },
};

export default deepMerge(baseTheme, defaultTheme);
