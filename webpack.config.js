const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const { merge } = require('webpack-merge');
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require('./build-utils/loadPresets');
//= { mode: 'production', presets: [] }
module.exports = ({ mode = 'production', presets = [] }) => {
  return merge(
    {
      entry: ['./client/index.js'],
      mode,
      module: {
        rules: [
          {
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          // build-utils handle css/scss in different environment
          {
            test: /\.(jpe?g|png)$/,
            use: [{ loader: 'url-loader', options: { limit: 5000 } }],
          },
        ],
      },
      output: {
        filename: 'bundle.js',
      },
      // passing this string in results in the extra script import in the html file above bundle.js
      // {
      //   template: 'client/index.html',
      // }
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Allok8 homepage',
          template: 'client/index.html',
        }),
        new webpack.ProgressPlugin(),
      ],
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
