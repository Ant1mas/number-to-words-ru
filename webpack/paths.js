const path = require('path');

const rootPath = path.resolve(__dirname, '../');
const distPath = path.resolve(rootPath, 'dist');

module.exports = {
  rootPath,
  distPath,
};
