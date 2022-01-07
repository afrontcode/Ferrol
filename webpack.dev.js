const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Extraer en archivo global el CSS
const common = require("./webpack.common");
const BUILD_DIR = path.resolve(__dirname, "./public");

// ========================================
// HTML / PUG
// ========================================
const html = {
  test: /\.html$/i,
  loader: "html-loader",
  options: {
    attributes: false,
    minimize: false,
  },
};

const pug = {
  test: /\.pug$/,
  loader: "pug-loader",
  options: { pretty: true },
};

// ========================================
// DEV SERVER
// ========================================
const devServer = {
  contentBase: BUILD_DIR,
  compress: true,
  port: 3300,
};

// ========================================
// CONFIG
// ========================================
let devConfig = {
  mode: "development",
  output: {
    filename: "scripts/[name].bundle.js",
    path: BUILD_DIR,
  },
  module: {
    rules: [html, pug],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      ignoreOrder: false,
    }),
  ],
  devServer,
};

module.exports = merge(common, devConfig);
