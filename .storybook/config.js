import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../src/themes/Default';
import 'normalize.css';
import '../src/themes/Default/style.global';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

// addon-info
setDefaults({
  header: false,
  inline: true,
});

// add default theme as global
addDecorator((getStory) => (<ThemeProvider theme={defaultTheme}>{getStory()}</ThemeProvider>))

configure(loadStories, module);
