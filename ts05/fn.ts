/**
 * ts函数：每个参数有类型；函数有返回类型；
 * 1. 参数：a.默认参数 b.可选参数 c.剩余参数
 * 2. 返回类型：由于类型推断，可省略；但是还是推荐按照完整函数类型去写
 */

// 函数类型推断
// function add(x: number, y: number): number {
//   return x + y;
// }
function add(x: number, y: number) {
  return x + y;
}
console.log(add(2, 3))

let add01 = function(x: number, y: number): number {
  return x + y;
}
console.log(add01(4, 5))

let add02: (x: number, y: number) => number = function(x, y) {
  return x + y;
}
console.log(add02(40, 50))


// 默认参数 可选参数 剩余参数
interface IUserInfoFn {
  (firstName: string | undefined, lastName?: string, ...restInfo: Array<string>): void
}
let introduceUser: IUserInfoFn;
introduceUser = function (firstName='default', lastName?, ...restInfo) {
  console.log(`my firstname is ${firstName}`)
  if (lastName) {
    console.log(`my lastname is ${lastName}`)
  }
  console.log(`here is some info about me ${restInfo.join('')}`)
}

introduceUser(undefined)
introduceUser('jj')
introduceUser('jj', undefined, 'male')