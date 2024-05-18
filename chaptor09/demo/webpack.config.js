const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './index.js',
  plugins: [
    new HtmlPlugin()
  ],
}