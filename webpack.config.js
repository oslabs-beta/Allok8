const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  return {
    mode: env.NODE_ENV,
    entry: "./client/index.js",
    devServer: {
      host: "localhost",
      port: 8080,
      // match the output path
      contentBase: path.resolve(__dirname, "dist"),
      // enable HMR on the devServer
      hot: true,
      // match the output 'publicPath'
      publicPath: "/",
      // fallback to root for other urls
      historyApiFallback: true,

      inline: true,

      headers: { "Access-Control-Allow-Origin": "*" },
      /**
       * proxy is required in order to make api calls to
       * express server while using hot-reload webpack server
       * routes api fetch requests from localhost:8080/api/* (webpack dev server)
       * to localhost:3000/api/* (where our Express server is running)
       */
      proxy: {
        '/(api|assets|dist)/**' : {
          target: "http://localhost:3000/",
          secure: false
        }
      }
    },
    output: {
      path: path.join(__dirname, "dist"),
      publicPath: '/',
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query: {
            presets: ["@babel/env", "@babel/react"],
            plugins: ["@babel/plugin-proposal-class-properties", '@babel/plugin-transform-runtime', '@babel/transform-async-to-generator']
          }
        },
        {
          test: /.(css|scss)$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './client/index.html',
      }),
    ],
    resolve: {
      extensions: [".js", ".jsx", ".css", ".scss"]
    }
  };
};
