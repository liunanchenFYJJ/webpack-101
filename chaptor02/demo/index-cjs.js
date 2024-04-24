console.log('cjs start >>>>')
// const cjs = require('./count-cjs')
// console.log(cjs)

let { count, add } = require('./02/count-cjs')
// console.log(count)
// console.log(add)

// console.log(add === cjs.add)

// console.log(count === cjs.count)

// add = 123
// console.log(add)
// console.log(cjs.add)

// cjs.add()

// add()
// console.log(cjs.count)
// console.log(count)

// count++
// console.log(count)
// console.log(cjs.count)

console.log(count)
add()
console.log(count)
add()
console.log(count)
// console.log(cjs)
console.log('cjs end ====')
