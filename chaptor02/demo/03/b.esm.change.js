import a from './a.esm.change'

let invoked = false
function b() {
  if (!invoked) {
    invoked = true
    console.log('run b..')
    a()
  }
}

export default b
