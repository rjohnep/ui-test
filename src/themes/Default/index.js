import deepMerge from 'deepmerge';

const coreColors = {
  primary: {
    main: '#47b972',
    dark: '#249c57',
    darker: '#008643',
  },

  secondary: {
    lighter: '#8d8d8d',
    light: '#414247',
    main: '#38393f',
    dark: '#2e2f35',
    darker: '#1b1d24',
  },

  third: {
    lighter: '#f7f7f7',
    light: '#efedec',
    main: '#e8e8e8',
    dark: '#e5e5e5',
    darker: '#d2d2d2',
  },

  danger: {
    main: '#e44e48',
    dark: '#cd4640',
    darker: '#b63e39',
  },

  warning: {
    main: '#FBBF5E',
  },

  attention: {
    main: '#FCF6DD',
  },

  black: '#000',
  white: '#fff',
};

const colors = deepMerge(coreColors, {
  bodyBg: {
    main: coreColors.third.lighter,
  },
  text: {
    light: coreColors.third.dark,
    main: coreColors.secondary.lighter,
    dark: coreColors.secondary.dark,
  },
  border: {
    light: coreColors.third.dark,
    main: coreColors.third.darker,
  },
});

export default {
  colors,
  font: {
    size: '14px',
    lineHeight: '1.4',
    family: '"Graphik", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;',
  },
  elevation: {
    none: 'none',
    xsmall: '0 1px 2px 0 rgba(0, 0, 0, 0.15)',
    small: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    medium: '0 2px 3px 0 rgba(0, 0, 0, 0.15)',
    large: '0 2px 5px 0 rgba(0, 0, 0, 0.15)',
    xlarge: '0 5px 5px 0 rgba(0, 0, 0, 0.15)',
    xxlarge: '0 4px 10px 0 rgba(0, 0, 0, 0.2)',
    xxxlarge: '0 5px 15px 0 rgba(0, 0, 0, 0.15)',
  },
  icon: {
    size: {
      small: '24px',
      medium: '48px',
      large: '56px',
    },
  },
};
