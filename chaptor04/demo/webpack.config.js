const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const EslintPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: false,
  devServer: {
    // static: './dist', // 把设置的目录 作为 启动服务（http://localhost:8081/）的根目录
    static: {
      publicPath: './dist'
    },
  },
  // context: string
  context: path.resolve(__dirname, 'app'),
  // 1. entry: string
  entry: './index.js', // 一个模块module对应一个chunk
  // 2. entry: [string]
  // entry: ['./index.js', './another.js'], // 合并多个模块module到一个chunk
  // entry: ['./another.js', './index.js'], // 合并多个模块module到一个chunk
  // 3. entry: { <entryChunkName> string | [string] } | {}
  // entry: {
    // 'another': './another.js',
    // 'main': {
    //   import: './index.js',
    //   // filename: './cln/cln.js',
    //   dependOn: 'another',
    // },
  // },
  // 4. entry: Function
  // entry: function() {
  //   console.log('entry')
  //   // 4.1 普通形式
  //   // return {
  //   //   'main': './index.js',
  //   // }
  //   // 4.2 Promise形式
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve({
  //         'main': './index.js',
  //       })
  //       console.log('promise 打包')
  //     }, 20000);
  //   })
  // },
  output: {
    clean: true,
    // filename: '[name].js',
    filename: '[name]@[chunkhash].js', // bundlename, 不设置就是entry中的chunkname名字；可以指定为其指定name和chunkhash
    path: path.resolve(__dirname, 'dist') // bundle输入位置，绝对路径
  },
  plugins: [
    new HtmlWebpackPlugin(),
    // new EslintPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
      // 自定义loader
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, './remove.js'),
          },
          {
            loader: path.resolve(__dirname, './strict.js'),
            options: {
              sourceMap: true,
              cln: true,
            },
          },
        ],
      },
    ],
  },
}