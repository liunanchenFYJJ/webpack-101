/**
 * ts增加了class类的概念，这是借鉴了c++, jave等高级语言。这是js不具备的能力（js可以通过原型链去模拟）。
 * 1.类&类的继承
 *   类是面向对象编程的基础与核心（OOP）
 * 2.修饰符：公共&私有&保护
 *   public 公共继承（默认值）
 *   private 私有继承
 *   protected 保护继承
 *   
 */

// getters/setters
// 设计存取器应用
// const obj = {
//   log: ["example", "test"],
//   get latest() {
//     if (this.log.length == 0) return undefined;
//     return this.log[this.log.length - 1];
//   },
//   set latest(val: string | undefined) {
//     if (val) {
//       this.log.push(val)
//     }
//   }
// };
// console.log(obj.latest); // "test".
// obj.latest = '11';
// console.log(obj.latest); // "test".

class CGetSet {
  private _name: string;
  constructor(name: string) {
    this._name = name.trim();
  }

  get name(): string {
    return this._name
  }

  set name(name: string) {
    this._name = name.trim()
  }
}

let cgs = new CGetSet('cln')
console.log(cgs.name)
cgs.name = 'jj'
console.log(cgs.name)

