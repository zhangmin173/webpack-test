const path = require('path');

module.exports = {
  mode: 'none',
  entry: {
    'main': path.resolve(__dirname, './src/index.js')
  },
  output: {
    filename: '[name].webpack4.js',
    path: path.resolve(__dirname, 'dist')
  }
};