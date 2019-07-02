const path = require('path')
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

module.exports = {
  input: 'src/index.js',
  output: {
    dir: path.resolve(__dirname, 'dist'),
    format: 'cjs'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
};