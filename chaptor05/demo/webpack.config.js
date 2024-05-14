const HtmlPlugin = require('html-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: {
    cln: './index.js',
  },
  output: {
    clean: true,
  },
  plugins: [
    new HtmlPlugin(),
    new MiniCssPlugin({
      filename: '[name].[hash].css',
    }),
    new StylelintPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'], // 1. 生成<style>标签插入
        // 2. 生成单独css文件，再<link>引入
        use: [
          MiniCssPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', {
          loader: 'css-loader',
          // options: {
          //   sourceMap: true,
          // },
        }, {
          loader: 'less-loader',
          // options: {
          //   sourceMap: true,
          // },
        }],
        // use: [MiniCssPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
}