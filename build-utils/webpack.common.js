const commonPath = require('./commonPaths')
const HTMLWebpackPlugin = require("html-webpack-plugin");

const common = {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: commonPath.outputBuild
    },
    module: {
      rules: [
        {
          test: /\.jpe?g$/,
          use: [
            {
              loader: "file-loader",
              options: {}
            }
          ]
        }
      ]
    },
    plugins: [new HTMLWebpackPlugin()]
  }

  module.exports = common