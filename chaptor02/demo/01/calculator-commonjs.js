var name = 'calculator-commonjs.js'

function sayMyname() {
  console.log('my name is', name)
}

var count = 0

function add(a, b) {
  count += 1
  console.log(count)
  return a + b
}

module.exports = {
  name,
  sayMyname,
  count,
  add,
}

module.exports.name = name;

exports.name = name;

console.log('commonjs')
