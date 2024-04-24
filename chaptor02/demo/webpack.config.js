const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
  mode: 'development',
  entry: './index.js',
  // 值复制和动态映射
  // entry: {
  //   'cjs': './index-cjs.js',
  //   'esm': './index-esm.js',
  // },
  // 循环引用
  // entry: {
    // 'cjs.03': './index.cjs.03.js',
    // 'esm.03': './index.esm.03.js',
    // 'esm.03.change': './index.esm.03.change.js',
  // },
  devtool: false,
  // plugins: [
    // new CircularDependencyPlugin(),
  // ]
}