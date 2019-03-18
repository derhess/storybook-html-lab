const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

const indexPageContent = require("./../src/components/05-pages/indexMockData.json");
const aboutPageContent = require("./../src/components/05-pages/aboutMockData.json");
const contactPageContent = require("./../src/components/05-pages/contactMockData.json");

module.exports = {
  entry: {
    bundle: "./src/app.js"
  },
  output: {
    path: path.resolve(__dirname, "../static-website")
  },
  module: {
    rules: [
      { test: /\.handlebars$/, loader: "handlebars-loader" },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              autoprefixer: {
                browsers: ["last 2 versions"]
              },
              sourceMap: true,
              plugins: () => [autoprefixer]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/",
              useRelativePath: true
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: true
              },
              pngquant: {
                quality: "65-90",
                speed: 4
              },
              gifsicle: {
                interlaced: false
              } /*,
              webp: {
                quality: 75,
                // somehow my jpg files got transformed to webp, therefore disabled on the first runs
                enabled: false
              }*/
            }
          }
        ]
      }
    ]
  },
  plugins: [
    /** Since Webpack 4 */
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-styles.css",
      chunkFilename: "[id].css"
    }),

    new CleanWebpackPlugin(["static-website"]),

    new HtmlWebpackPlugin({
      title: "My awesome service",
      filename: "index.html",
      template: "./src/components/05-pages/index.handlebars",
      pageData: indexPageContent,
      minify: false && {
        html5: true,
        collapseWhitespace: true,
        caseSensitive: true,
        removeComments: true,
        removeEmptyElements: true
      }
    }),

    new HtmlWebpackPlugin({
      title: "My awesome service - About Page",
      filename: "about.html",
      template: "./src/components/05-pages/about.handlebars",
      pageData: aboutPageContent,
      minify: false && {
        html5: true,
        collapseWhitespace: true,
        caseSensitive: true,
        removeComments: true,
        removeEmptyElements: true
      }
    }),

    new HtmlWebpackPlugin({
      title: "My awesome service - Contact Page",
      filename: "contact.html",
      template: "./src/components/05-pages/contact.handlebars",
      pageData: contactPageContent,
      minify: false && {
        html5: true,
        collapseWhitespace: true,
        caseSensitive: true,
        removeComments: true,
        removeEmptyElements: true
      }
    })
  ]
};
