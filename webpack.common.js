const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Incrustar src de JS
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Extraer en archivo global el CSS
const CopyPlugin = require("copy-webpack-plugin"); // Copiar archivos tal cual al build
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // limpia la carpeta del build
const loader = require("sass-loader");

const APP_DIR = path.resolve(__dirname, "./src");

// =======================================
// CSS / SASS
// =======================================
const styles = {
  test: /\.(scss|sass|css)$/,
  use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "sass-loader?sourceMap"],
};

// =======================================
// JPG / PNG / SVG / ETC...
// =======================================
const images = {
  test: /\.(jpg|jpeg|svg|png|webp|gif)$/,
  use: [
    {
      loader: "file-loader",
      options: {
        esModule: false,
      },
    },
  ],
};

// =======================================
// WOFF / TTF / OTF / ETC...
// =======================================
const fonts = {
  test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        publicPath: "../assets/fonts/",
        outputPath: "assets/fonts/",
      },
    },
  ],
};

// =======================================
// GENERADOR DE MULTIPLES HTML
// =======================================
const pages = [
  {
    name: "index",
    chunks: ["home"],
  }
 
];

const templates = [];

const createPages = (name, scripts = []) => {
  const chunks = scripts.length ? { chunks: scripts } : null;
  return {
    template: `${APP_DIR}/views/${name}.pug`,
    filename: name === "index" ? "index.html" : `${name}.html`,
    ...chunks,
  };
};

pages.forEach(({ name, chunks }) => {
  templates.push(new HtmlWebpackPlugin(createPages(name, chunks)));
});

// =======================================
// CONFIG
// =======================================
let commonConfig = {
  entry: {
    home: ["babel-polyfill", `${APP_DIR}/index.js`],

  },

  module: {
    rules: [styles, images, fonts],
  },
  plugins: [
    ...templates,
    new CopyPlugin([
      {
        from: "src/assets",
        to: "assets/",
      },
    ]),
    new CleanWebpackPlugin(),
  ],
};

module.exports = commonConfig;
