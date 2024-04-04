const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const DashboardPlugin = require('webpack-dashboard')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: {
    main: './index.js',
    app: './app.js',
    // vendor: ['lodash'],
  },
  output: {
    filename: '[name]@[chunkhash].js',
    path: path.join(__dirname, 'dist'),
    // publicPath: './cln',
    clean: true,
    chunkFilename: '[id].js',
  },
  devServer: {
    port: 3000,
    static: '/dist/',
    // hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
          'less-loader',
        ],
        // use: ['style-loader', 'css-loader'],
        // exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    // splitChunks默认值
    splitChunks: {
      chunks: 'all',
      // minSize: 20000,
      // minRemainingSize: 0,
      // minChunks: 1,
      // maxAsyncRequests: 30,
      // maxInitialRequests: 30,
      // enforceSizeThreshold: 50000,
      // cacheGroups: {
      //   defaultVendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10,
      //     reuseExistingChunk: true,
      //   },
      //   default: {
      //     minChunks: 2,
      //     priority: -20,
      //     reuseExistingChunk: true,
      //   },
      // },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      scriptLoading: 'blocking',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './app.html',
      filename: 'app.html',
      scriptLoading: 'blocking',
      chunks: ['app'],
    }),
    // new DashboardPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
}