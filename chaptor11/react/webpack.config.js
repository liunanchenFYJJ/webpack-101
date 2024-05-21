const path = require('path')
const Htmlplugin = require('html-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin')

const isProduction = process.env.NODE_ENV;

module.exports = {
  mode: 'development',
  output: {
    clean: true,
    chunkFilename: isProduction ? '[name].[chunkhash:8].chunk.js' : '[name].chunk.js',
    filename: isProduction ? '[name].[contenthash:8].chunk.js' : '[name].js',
  },
  devServer: {
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
          },
        },
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.less$/,
        use: [
          isProduction ? MiniCssPlugin.loader : 'style-loader',
          'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.less'],
  },
  plugins: [
    new Htmlplugin({
      template: path.resolve(__dirname, './index.html')
    }),
    isProduction ? new MiniCssPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].chunk.css',
    }): null,
  ].filter(Boolean),
}