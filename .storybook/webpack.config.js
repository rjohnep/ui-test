const path = require('path');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules = [].concat(storybookBaseConfig.module.rules, [
    {
      test: /\.css$/,
      use: [require.resolve('style-loader'), {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1
        }
      }]
    }, {
      test: /\.json$/,
      loader: require.resolve('json-loader')
    }, {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
      loader: require.resolve('file-loader'),
      query: {
        name: 'static/media/[name].[hash:8].[ext]'
      }
    }, {
      test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
      loader: require.resolve('url-loader'),
      query: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]'
      }
    },
    {
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
    }
  ]);

  // Extending/Rewriting
  const mdIndex = storybookBaseConfig.module.rules.findIndex((rule) => rule.test.toString().includes('.md'));
  storybookBaseConfig.module.rules[mdIndex] = {
    test: /\.md$/,
    use: ['raw-loader'],
  };

  storybookBaseConfig.resolve.modules.push(path.resolve('./src'), 'node_modules');

  return storybookBaseConfig;
};
