var count = 0
function add() {
  count += 1;
  console.log('cjs', count)
}

module.exports = {
  count,
  add,
}