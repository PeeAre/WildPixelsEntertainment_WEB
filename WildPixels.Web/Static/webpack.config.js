const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const copyPlugin = require("copy-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const cssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const jsMinimizerPlugin = require("terser-webpack-plugin");

const isDevEnvironment = process.env.NODE_ENV === "development";

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: {
    main: ["@babel/polyfill", "./index.jsx"],
  },
  output: {
    filename: "main.bundle.[contenthash].js",
    path: isDevEnvironment
      ? path.resolve(__dirname, "dev_build")
      : path.resolve(__dirname, "build"),
    clean: true,
  },
  devtool: isDevEnvironment ? "source-map" : false,
  devServer: {
    port: 3000,
    hot: isDevEnvironment,
  },
  optimization: {
    minimizer: [new cssMinimizerPlugin(), new jsMinimizerPlugin()],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss", ".sass"],
    alias: {
      "@images": path.resolve(__dirname, "public/images"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
  plugins: [
    new htmlPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      minify: {
        collapseWhitespace: !isDevEnvironment,
      },
    }),
    new copyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/favicon.ico"),
          to: path.resolve(__dirname, "build"),
        },
      ],
    }),
    new miniCssExtractPlugin({ filename: "main.bundle.[contenthash].css" }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.s?[ac]ss$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
