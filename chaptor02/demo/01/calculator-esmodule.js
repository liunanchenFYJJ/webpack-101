var name = 'calculator.js'

function sayMyname() {
  console.log('my name is', name)
}

let count = 0

function add(a, b) {
  count += 1
  console.log(count)
  return a + b
}

export default {
  name,
  sayMyname,
  count1: count,
  add1: add,
}

export {
  count,
  add,
}

console.log('esm')
