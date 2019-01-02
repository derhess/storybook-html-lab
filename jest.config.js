const config = require("../../jest.config");

module.exports = {
  cacheDirectory: ".cache/jest",
  clearMocks: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(md)$": "<rootDir>/__mocks__/htmlMock.js"
  },
  projects: [
    "<rootDir>",
    "<rootDir>/examples/cra-kitchen-sink",
    "<rootDir>/examples/html-kitchen-sink",
    "<rootDir>/examples/riot-kitchen-sink",
    "<rootDir>/examples/svelte-kitchen-sink",
    "<rootDir>/examples/vue-kitchen-sink",
    "<rootDir>/examples/angular-cli"
  ],

  snapshotSerializers: ["@emotion/snapshot-serializer"],

  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "addon-jest.test.js",
    "/cli/test/"
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    "app/**/*.{js,jsx}",
    "lib/**/*.{js,jsx}",
    "addons/**/*.{js,jsx}",
    "!**/cli/test/**",
    "!**/dist/**",
    "!**/generators/**",
    "!app/**/__mocks__ /"
  ],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupTestFrameworkScriptFile: "./scripts/jest.init.js",
  setupFiles: ["raf/polyfill"],
  testURL: "http://localhost",
  modulePathIgnorePatterns: ["/dist/.*/__mocks__/"],

  roots: [__dirname],
  transform: {
    "^.+\\.jsx?$": "<rootDir>/scripts/babel-jest.js",
    ".*\\.(html)$": "<rootDir>/node_modules/jest-raw-loader"
  },
  moduleFileExtensions: ["js", "jsx", "json", "node", "html"]
};
