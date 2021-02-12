const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => ({
  output: {
    filename: 'css-bundle.js',
  },
  module: {
    rules: [
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
});
