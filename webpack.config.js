const path = require('path');

const distPath = path.join(__dirname, '/dist');

const config = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: distPath,
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }]
      }
    ]
  },
  devServer: {
    contentBase: distPath,
    port: 9000,
    compress: true
  }
};

module.exports = config;
