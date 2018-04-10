/* eslint strict: ["off"] */

'use strict';

const fs = require('fs');
const path = require('path');

const coreComponents = fs.readdirSync(path.join(__dirname, '../../../src/core'));

function componentExists(comp) {
  return coreComponents.indexOf(comp) >= 0;
}

module.exports = {
  description: 'Add an core component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => ['Stateless Function', 'PureComponent', 'Component'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if ((/.+/).test(value)) {
          return componentExists(value) ? 'A component or container with this name already exists' : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: (data) => {
    let componentTemplate;

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './core/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './core/class.js.hbs';
      }
    }

    const actions = [{
      type: 'add',
      path: '../../src/core/{{properCase name}}/index.js',
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/core/{{properCase name}}/__tests__/index.spec.js',
      templateFile: './core/test.js.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
