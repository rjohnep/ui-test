const path = require('path');

// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Extending/Rewriting
  const mdIndex = config.module.rules.findIndex((rule) => rule.test.toString().includes('.md'));
  config.module.rules[mdIndex] = {
    test: /\.md$/,
    use: ['raw-loader'],
  };

  config.resolve.modules.push(path.resolve('./src'), 'node_modules');

  return config;
};
