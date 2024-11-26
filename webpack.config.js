
const path = require("path");

const srcDir = path.resolve(__dirname, "src");
const outputDir = path.resolve(__dirname, "output");

module.exports = {
  context: path.resolve(__dirname, "src"),

  entry: {
    index: `${srcDir}/index.js`,
  },

  output: {
    path: outputDir,
    filename: "[name].js",
  },
};
