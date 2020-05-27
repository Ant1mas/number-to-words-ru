const path = require('path');

const rootPath = path.resolve(__dirname, '../');
const distPath = path.resolve(rootPath, 'dist');

const config = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: distPath,
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  resolve: {
    modules: [
      path.resolve(rootPath, 'src'),
      path.resolve(rootPath, 'node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

module.exports = config;
