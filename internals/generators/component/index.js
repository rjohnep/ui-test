/* eslint strict: ["off"] */

'use strict';

const fs = require('fs');
const path = require('path');

const components = fs.readdirSync(path.join(__dirname, '../../../src/components'));

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = {
  description: 'Add an component',
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
    {
      when: function (response) {
        return response.type !== 'Stateless Function';
      },
      type: 'confirm',
      name: 'withTheme',
      message: 'Will a component be exported (add  `withTheme` decorator)?',
      default: true,
    },
  ],
  actions: (data) => {
    let componentTemplate;

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './component/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './component/class.js.hbs';
      }
    }

    const actions = [{
      type: 'add',
      path: '../../src/components/{{properCase name}}/index.js',
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/components/{{properCase name}}/__tests__/index.spec.js',
      templateFile: './component/test.js.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
