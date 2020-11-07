const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {distPath} = require('./paths.js');
const common = require('./webpack.common.js');

const config = merge(common, {
  mode: 'development',
  entry: {
    main: './src/dev/test.dev.ts',
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
