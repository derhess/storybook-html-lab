const path = require("path");

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: [/\.stories\.js$/, /index\.js$/],
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    include: [path.resolve(__dirname, "../stories")],
    enforce: "pre"
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
