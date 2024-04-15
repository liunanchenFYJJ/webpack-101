const parser = require('@babel/parser')
const babel = require('@babel/core')
// import parser from '@babel/parser'
// import * as babel from '@babel/core'

export default function mainReact() {
  console.log('react')



  const entryContent = `const a = 3;`

  const AST = parser.parse(entryContent, {
    sourceType: 'module',
    plugins: [
      // enable jsx and flow syntax
      "jsx",
      // "flow",
    ],
  });

  console.log(AST)


  // let { code } = babel.transformFromAstSync(AST, entryContent, {
  //   generatorOpts: {
  //     jsescOption: {
  //       // escapeEverything: false,
  //       quotes: 'single',
  //     },
  //   },
  //   babelrc: false,
  //   configFile: false,
  //   presets: [],
  // });

  // console.log(code)
}