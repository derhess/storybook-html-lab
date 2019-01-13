const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  //devtool: "source-map",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    open: true,
    contentBase: path.join(__dirname, "../src")
  }
});
