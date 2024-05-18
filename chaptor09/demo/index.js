console.log('090')
import { add } from './util'
const sum = add(3, 8)
console.log(sum)

if (module.hot) {
  console.log(module)
  module.hot.accept()
}