const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    page: [
      "./src/components/index",
      "./src/components/ship",
      "./src/components/session",
      "./src/components/player",
      "./src/components/gameBoard",
      "./src/components/dom",
      "./src/components/randomPlacement",
      "./src/components/render",
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
