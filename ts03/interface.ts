// interface 接口不关心具体的实现细节，
// 只是定义好属性和方法，具体的实现放在类中
/**
 * interface i {
 *  iProperty,
 *  iFunction,
 * }
 */

// 1.属性类型接口
// 2.函数类型接口
// 3.可索引类型接口
// 4.类类型接口
// 5.混合类型接口

// 1.属性类型接口例子
// 用户信息，包括：常规属性，可选属性，只读属性
interface IUserInfo {
  name: string
  age?: number
  readonly gender: boolean
}

function outputUserinfo(ui: IUserInfo) {
  if (ui.gender) {
    console.log('boy is', ui.name)
  } else {
    console.log('girl is', ui.name)
  }
}

const ui_king: IUserInfo = {
  name: 'king',
  age: 26,
  gender: true,
}

outputUserinfo(ui_king)

const ui_tina: IUserInfo = {
  name: 'tina',
  gender: false,
}
ui_tina.age = 18
// ui_king.gender = true // readonly

outputUserinfo(ui_tina)

// 2.函数类型接口例子
// 算数四则运算
interface IArithmetic {
  (x: number, y: number, s: string): number;
}

let fnArithmetic: IArithmetic;
fnArithmetic = function(a: number, b: number, c: string): number {
  let r: number;
  switch (c) {
    case 'add':
      r = a + b;
      break;
    case 'minus':
      r = a - b;
      break;
    case 'times':
      r = a * b;
      break;
    case 'divide':
      r = a / b;
      break;
    default:
      r = 0;
      break;
  }
  return r;
}

// const result = fnArithmetic(3, 4, 'add')
const result = fnArithmetic(3, 4, 'times')
console.log(result)

// 3.可索引类型接口例子
// 数字索引类型接口
interface INumIndexArray {
  [index: number]: string;
}

let myNumArr: INumIndexArray;
myNumArr = ['king', 'tina', 'cici'];

for (const i in myNumArr) {
  console.log(i, myNumArr[i])
}

// 字符串索引类型接口
interface INumStrIndexObj {
  [index: string]: string | number | null;
}

let myNumStrObj: INumStrIndexObj
myNumStrObj = {
  width: '800px',
  height: null,
}

console.log(myNumStrObj['width'])
console.log(myNumStrObj['height'])

// 4.类类型接口例子
// 日期应用

interface ITimeDate {
  currTime: Date;
  // test: string | undefined;
  setTime(d: Date): void;
  getTime(): Date;
}

class CTime implements ITimeDate {
  currTime: Date;
  // test: string;
  constructor(curr: Date) {
    this.currTime = curr;
    // this.test = test;
  }
  
  setTime(d: Date): void {
    this.currTime = d;
  }

  getTime(): Date {
    return this.currTime;
  }
}

let t = new CTime(new Date('2023-08-10'))
console.log(t)
console.log(t.getTime())
t.setTime(new Date())
console.log(t.getTime())


// 单接口继承 设计实现 复杂功能的拆分
// 计算正方形周长
interface IShape {
  girth: number;
}
interface ISquare extends IShape {
  shapeType: string;
  getGirth(): number;
}
enum ShapeType {
  RECT = 'RECT',
  SQUARE = 'SQUARE',
}

class CSquare implements ISquare {
  shapeType: string;
  girth: number;

  constructor(shapeType: ShapeType, sideLength: number, otherSideLength: number = 0) {
    this.shapeType = shapeType;
    this.girth = 0;
    if (this.shapeType === ShapeType.RECT) {
      this.girth = (sideLength + otherSideLength) * 2
    }
    if (this.shapeType === ShapeType.SQUARE) {
      this.girth = sideLength * 4;
    }
  }

  getGirth(): number {
    return this.girth;
  }
}

let s = new CSquare(ShapeType.SQUARE, 4)
console.log(s.shapeType)
console.log(s.getGirth())

let r = new CSquare(ShapeType.RECT, 2, 8)
console.log(r.shapeType)
console.log(r.getGirth())

// 多接口继承 更加符合实际开发
interface IGirth {
  girth: number;
}
interface IArea {
  area: number;
}
interface ISquareB extends IGirth, IArea {
  shapeType: ShapeType;
  getGirth(): number;
  getArea(): number;
}
class CSquareB implements ISquareB {
  shapeType: ShapeType;
  girth: number;
  area: number;
  constructor(shapeType: ShapeType, sideLength: number, otherSideLength: number = 0) {
    this.shapeType = shapeType;
    this.girth = 0;
    this.area = 0;
    if (shapeType === ShapeType.SQUARE) {      
      this.girth = sideLength * 4;
      this.area = sideLength * sideLength;
    } else if (shapeType === ShapeType.RECT) {
      this.girth = (sideLength + otherSideLength) * 2;
      this.area = sideLength * otherSideLength;
    }
  }

  getGirth(): number {
    return this.girth;
  }

  getArea(): number {
    return this.area;
  }
}

let sb = new CSquareB(ShapeType.SQUARE, 4)
console.log(sb.getGirth())
console.log(sb.getArea())

let rb = new CSquareB(ShapeType.RECT, 2, 8)
console.log(rb.getGirth())
console.log(rb.getArea())

// 混合类型接口
// 实现计数器
interface ICounter {
  // 函数
  (s: string): void;
  // 属性
  current: number;
  interval: number;
  // 类
  count(): void;
  setInterval(i: number): void;
  reset(): void;
}

function getCounter(): ICounter {
  let counter = <ICounter>function(s: string): void {
    console.log('init counter')
  }
  counter.current = 0;
  counter.interval = 1;

  counter.count = function() {
    counter.current += counter.interval;
  }

  counter.setInterval = function(i) {
    counter.interval = i
  }

  counter.reset = function() {
    counter.current = 0;
  }

  return counter;
}

const c = getCounter()
console.log(c)
c.setInterval(2)
c.count()
c.count()
c.count()
c.reset()

console.log(c.current, c.interval)