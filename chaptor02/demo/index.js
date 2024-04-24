var name = 'index.js'

// 1.动态 vs. 静态
// if (true) {
  // 1.声明式路径
  // const calculatorCommonJs = require('./calculator-commonjs.js')
  // console.log(calculatorCommonJs)

  // 2.1动态路径（node下可运行）
  // const commonjsModulePath = './calculator-commonjs.js'
  // const calculatorCommonJs = require(commonjsModulePath)

  // 2.1动态路径（webpack.require）
  // const contextObj = require.context('./', false,  /calculator-commonjs.js/)
  // const contextObj = require.context('./', false,  /\w*-\w*.js$/)
  // console.log(contextObj.keys()) // 当前正则可以匹配到的所有key
  // console.log(contextObj.id) // 当前module的id
  // const calculatorCommonJs = contextObj('./calculator-commonjs.js')

  // calculatorCommonJs.sayMyname()
  // calculatorCommonJs.name = 'cln'
  // calculatorCommonJs.sayMyname()
// }


// if (true) {
  // import calculatorEsmodule from './calculator-esmodule.js'
  // console.log(calculatorEsmodule)

  // calculatorEsmodule.sayMyname()
// }

