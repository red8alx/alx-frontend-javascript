    const path = require("path");
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const { CleanWebpackPlugin } = require('clean-webpack-plugin');
    const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

    module.exports = {
      entry: "./js/main.ts",
      devtool: "inline-source-map",
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      resolve: {
        extensions: [".tsx", ".ts", ".js"]
      },
      devServer: {
        contentBase: "./dist"
      },
      plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new CleanWebpackPlugin(), // This will clear dist on dev server start
        new HtmlWebpackPlugin({
          title: "Brand Convention & Nominal Typing" // Updated title for this task
        })
      ],
      output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
      }
    };
    