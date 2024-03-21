const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    filename: './main.js',
    path: path.join(__dirname, 'dist'),
  },
  mode: 'development',
  plugins: [new HtmlWebpackPlugin({
    // template: './index.html',
    scriptLoading: 'blocking',
  })],
}