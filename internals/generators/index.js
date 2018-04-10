const fs = require('fs');
const path = require('path');
const componentGenerator = require('./component/index.js');
const coreGenerator = require('./core/index.js');
// const themeGenerator = require('./theme/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('core', coreGenerator);
  // plop.setGenerator('theme', themeGenerator);
  plop.addHelper('directory', (comp) => {
    try {
      fs.accessSync(path.join(__dirname, `../../app/containers/${comp}`), fs.F_OK);
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
