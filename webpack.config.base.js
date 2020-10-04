const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolveTsAliases } = require("resolve-ts-aliases");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    sourceMapFilename: "[file].map",
    chunkFilename: "[name].chunk.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: resolveTsAliases(path.join(__dirname, "./tsconfig.json")),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|mp3|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
};
