let count = 0
function add() {
  count += 1
  console.log('esm', count)
}

export default {
  count,
  add,
}

export {
  add,
  count,
}