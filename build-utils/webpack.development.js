module.exports = (env) => ({
  module: {
    rules: [
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],        
      },
    ],
  },
});
