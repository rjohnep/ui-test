import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';

import defaultTheme from 'themes/Default';
import 'normalize.css';
import 'themes/Default/style.global';

import TableComponent from './PropTypesTable';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

// addon-info
setDefaults({
  header: false,
  inline: true,
  source: false,
  styles: {
    propTableHead: {
      display: 'none'
    }
  },
  TableComponent,
});

// add default theme as global
addDecorator((getStory) => (<div style={{ padding: '10px' }}><ThemeProvider theme={defaultTheme}>{getStory()}</ThemeProvider></div>))

configure(loadStories, module);
