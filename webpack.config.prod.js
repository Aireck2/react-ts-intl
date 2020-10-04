const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config.base");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const prod = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
    chunkFilename: "[name].[contenthash].chunk.js",
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "./dist/*.js")],
    }),
  ],
};

module.exports = merge.merge(common, prod);
