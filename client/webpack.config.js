module.exports = {
  entry: { bundle: './index.js' },
  //   output: {
  //     filename: 'bundle.js',
  //   },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      //       {
      //         test: /\.(png)$/,
      //         use: [
      //           {
      //             loader: 'url-loader',
      //             options: {
      //               limit: 25000,
      //             },
      //           },
      //         ],
      //       },
    ],
  },
};
