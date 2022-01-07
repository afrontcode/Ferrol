const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const BUILD_DIR = path.resolve(__dirname, "./public");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // Optimizar build de CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Extraer en archivo global el CSS
const MinifyPlugin = require("babel-minify-webpack-plugin"); // Minificacion de JS con babel

// ========================================
// HTML / PUG
// ========================================
const html = {
  test: /\.html$/i,
  loader: "html-loader",
  options: {
    attributes: false,
    minimize: true,
  },
};

const pug = {
  test: /\.pug$/,
  loader: "pug-loader",
  options: { pretty: false },
};

// ========================================
// BABEL
// ========================================
const babel = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: ["babel-loader"],
};

// ========================================
// CONFIG
// ========================================
let prodConfig = {
  mode: "production",
  output: {
    filename: "scripts/[name].bundle.[contentHash].js",
    path: BUILD_DIR,
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin()],
  },
  module: {
    rules: [html, pug, babel],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contentHash].css",
      ignoreOrder: false,
    }),
    new MinifyPlugin(),
  ],
};

module.exports = merge(common, prodConfig);
