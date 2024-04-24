console.log('closureFn >>>>')

let a = {}
Object.defineProperty(a, '__esModule', { value: true });
Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' });

console.log(a)
console.log(Object.prototype.toString.call(a))
// a.name = 'jj'
// a.age = 10
// Object.defineProperty(a, 'name', { enumerable: true, value: 'jay' })
// Object.defineProperty(a, 'name', { enumerable: true, get: () => 'cd' })

function closureFn() {
  let age = 0;
  
  // return function() {
  //   console.log(age)
  //   age += 1;
  // }

  function b() {
    console.log(age)
  }

  b()
}

let c = closureFn();

// console.log(c === closureFn)
// c()
// c()
// c()