const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,

  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    proxy: {
      '/': 'http://localhost:3000/',
    },
    contentBase: './client',
    publicPath: '/dist',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
