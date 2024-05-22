const str = 'console.log("excu")'

function excu(str) {
  return new Function(str)
}

excu(str)