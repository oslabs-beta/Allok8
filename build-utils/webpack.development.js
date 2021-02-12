module.exports = (env) => {
  return {
    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' },
      proxy: {
        '/**': 'http://localhost:3000',
      },
    },
    module: {
      rules: [
        {
          test: /.(css|scss)$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
};
