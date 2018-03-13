import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

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

configure(loadStories, module);
