console.log('esm')
import esm from './02/count-esm'
console.log(esm)

// import defaultESM, { add, count } from './count-esm'
// import defaultESM from './count-esm'
// console.log(defaultESM)

import { add, count } from './02/count-esm'
console.log(count)
add()
console.log(count)
add()
console.log(count)

// console.log(esm.add === esm.default.add)

// console.log(defaultESM.count)
// defaultESM.count++
// console.log(defaultESM.count)

// count++