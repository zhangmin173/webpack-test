const path = require('path');

module.exports = {
  entry: {
    'main': path.resolve(__dirname, './src/index.js')
  },
  output: {
    filename: '[name].webpack3.js',
    path: path.resolve(__dirname, 'dist')
  }
};