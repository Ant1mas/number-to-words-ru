const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.js');
const rootPath = path.resolve(__dirname, '../');
const distPath = path.resolve(rootPath, 'dist');

const config = merge(common, {
  mode: 'development',
  entry: {
    main: './src/dev/test.dev.js',
  },
  devServer: {
    contentBase: distPath,
    port: 9000,
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
});

module.exports = config;
