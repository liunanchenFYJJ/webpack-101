const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const DashboardPlugin = require('webpack-dashboard')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const arr = ['index', 'app','temp', 'less-code'];
const entryObj = arr.reduce((pre, curr) => {
  pre[curr] = `./${curr}.js`;
  return pre;
}, {})
const htmlArr = arr.map(htmlName => {
  return new HtmlWebpackPlugin({
    template: `./${htmlName}.html`,
    filename: `${htmlName}.html`,
    scriptLoading: 'blocking',
    chunks: [htmlName],
  })
})

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: Object.assign(entryObj, {
    // vendor: ['lodash'],
  }),
  devtool: 'source-map',
  output: {
    filename: '[name]@[chunkhash].js',
    path: path.join(__dirname, 'dist'),
    // publicPath: './cln',
    clean: true,
    chunkFilename: '[id].js',
  },
  devServer: {
    port: 3001,
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
    ...htmlArr,

    // new DashboardPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
}