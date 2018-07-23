// @format
const path = require("path");

module.exports = {
  title: "nteract ion",
  defaultExample: false,
  //
  // Switch out this config for us to set other components for our style guide
  //
  // styleguideComponents: {
  //   LogoRenderer: path.join(
  //     __dirname,
  //     "packages",
  //     "styleguide-components",
  //     "logo.js"
  //   )
  // },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  }
};
