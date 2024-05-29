/**
 * 泛型
 *  泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，
 *  而在使用的时候再指定类型的一种特性，使接口，函数或类更加通用
 * 
 * 通过使用泛型，来创建可重用的组件
 * 1. 泛型方法/函数
 * 2. 泛型变量
 * 3. 泛型类型
 * 4. 泛型接口
 * 5. 泛型类
 */

// 泛型方法 T: 代指类型, 没有实际意义，可用任何字段代替
// 定义一个泛型函数echo<T>
// function echo<T>(arg: T[]): T[] {
//   return arg;
// }
// 更通用写法
function echo<T>(arg: T): T {
  return arg;
}

// 使用时，T根据传入类型而定
console.log(echo<number>(123))
console.log(echo<string>('cln'))
// 简写，因为ts的自动类型判断
console.log(echo(123))
console.log(echo('cln'))

// 相比于any, 不会丢失类型判断
let s = echo('cln')
s.toString()
let n = echo(123)
n.toFixed(2)

// 结论：
// 函数fn后面带的一个<T>括号，括号里面的T是占位符可以随意写的，如<A>或者<B>
// 传入参数也可不申明类型，TypeScript 的编译器会利用类型推论来确定参数的类型
// 函数定义的时候不申明参数和返回值类型，而是在函数调用的时候去确定类型





// 2.泛型变量
// function echo01<T>(arg: T): T {
//   console.log(arg.length) // 报错；报错原因：T不代表任何实际类型
//   return arg;
// }

function echo01<T>(arg: Array<T>): Array<T> {
  console.log(arg.length)
  return arg;
}
console.log(echo01<number>([1, 3, 4]))



// 3.泛型类型
// 3.1 使用 泛型类型 定义 泛型函数
// 泛型函数的类型 相比 非泛型函数的类型：增加一个类型参数的定义
let echo02: <U>(arg: U) => U = echo
console.log(echo02('jj'))
// 通过泛型类型<U>(arg: U) => U 定义了一个泛型函数变量echo02，并指定为泛型函数echo

let echo03: { <U>(agr: U): U } = echo;
console.log(echo02('cln'))


// 4.泛型接口
// interface IEcho {
//   <U>(arg: U): U;
// }
interface IEcho<U> {
  (arg: U): U;
}

function interface_echo<T>(arg: T): T {
  return arg;
}

let new_echo: IEcho<number> = interface_echo;
console.log(interface_echo(33))
let new_echo_01: IEcho<string> = interface_echo;
console.log(new_echo_01('cc'))



// 5. 泛型类
class CEcho<T> {
  private _m_arg: T;

  constructor(arg: T) {
    this._m_arg = arg;
  }

  public echo(): T {
    return this._m_arg;
  }
}

let cecho = new CEcho<string>('cln')
console.log(cecho.echo())