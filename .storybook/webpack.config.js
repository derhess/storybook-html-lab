const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: [/\.stories\.js$/, /index\.js$/],
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    include: [path.resolve(__dirname, "../stories")],
    enforce: "pre"
  });

  defaultConfig.module.rules.push({
    test: /\.handlebars|hbs$/,
    loader: "handlebars-loader"
  });

  defaultConfig.module.rules.push({
    test: /\.(scss)$/,
    include: path.resolve(__dirname, "./../"),
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          importLoaders: 1
        }
      },
      {
        loader: "postcss-loader",
        options: {
          autoprefixer: {
            browsers: ["last 2 versions"]
          },
          sourceMap: true,
          ident: "postcss",
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
  });

  defaultConfig.module.rules.push({
    test: /\.md$/,
    use: [
      {
        loader: "markdown-loader"
      }
    ]
  });

  return defaultConfig;
};
