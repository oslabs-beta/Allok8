const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const { merge } = require('webpack-merge');
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require('./build-utils/loadPresets');
//= { mode: 'production', presets: [] }
module.exports = ({ mode = 'production', presets = [] }) => {
  // console.log('env: ', env);
  console.log('env.mode: ', mode);
  console.log('env.presets: ', presets);

  return merge(
    {
      mode,
      entry: ['./client/index.js'],
      output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
      },
      devtool: 'eval-source-map',
      devServer: {
        lazy: true,
        // docker to work with dev server
        host: '0.0.0.0',
        port: 8080,
        // match the output path
        contentBase: path.resolve(__dirname, 'dist'),
        //enable HMR on the devServer
        hot: true,
        //match the output 'publicPath'
        publicPath: '/',
        // fallback to root for other urls
        historyApiFallback: true,

        //inline: true,

        headers: { 'Access-Control-Allow-Origin': '*' },

        proxy: {
          '/api/**': {
            target: 'http://localhost:3000/',
            secure: false,
          },
        },
      },
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
      plugins: [
        new HtmlWebpackPlugin({
          template: './client/index.html',
        }),
        new webpack.ProgressPlugin(),
      ],
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
