const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    cln: './index.js',
  },
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
    // publicPath: './cln',
    clean: true,
  },
  devServer: {
    port: 3000,
    static: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        // exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
  plugins: [new HtmlWebpackPlugin({
    template: './index.html',
    scriptLoading: 'blocking',
  })],
}