const webpack = require("webpack");
const path = require("path");
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

const { NODE_ENV = "development" } = process.env;

module.exports = {
  entry: "./src/index.ts",

  watch: true,

  mode: 'development',

  target: "node",

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },

  
  
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  
  externals: [ nodeExternals({
    whitelist: ["webpack/hot/poll?100"],
  }) ],

  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: ['yarn run:dev']
    }),

    new webpack.HotModuleReplacementPlugin()
  ],

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
};
