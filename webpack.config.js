const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const DashboardPlugin = require('webpack-dashboard')

module.exports = {
  entry: {
    main: './index.js',
    app: './app.js',
    vendor: ['lodash'],
  },
  output: {
    filename: '[name].js',
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
  optimization: {
    // splitChunks默认值
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      scriptLoading: 'blocking',
    }),
    // new DashboardPlugin(),
  ],
}