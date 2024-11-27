const path = require("path");

const srcDir = path.resolve(__dirname, "src");
const outputDir = path.resolve(__dirname, "dist");

module.exports = {
  context: path.resolve(__dirname, "src"),

  entry: {
    index: `${srcDir}/index.ts`,
  },

  output: {
    path: outputDir,
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
  },
};
