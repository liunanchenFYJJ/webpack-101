"use strict";
// boolean number string
let b = true;
let s = 'hello, cln';
let n = s.length;
let i = 0;
while (b) {
    if (i < n) {
        console.log(s.charAt(i++));
    }
    else {
        console.log('out of range');
        b = false;
    }
}
// array
let arr = [1, 2, 3, 4];
// tuple
let tuple = [1, 'cln'];
tuple.pop();
tuple.push('gg');
tuple[1] = 'cc';
for (let i = 0; i < tuple.length; i++) {
    console.log(tuple[i]);
}
// enum 数字枚举类型 ｜ 字符串枚举类型
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
    Direction["Right"] = "right";
})(Direction || (Direction = {}));
console.log(Direction);
console.log(Direction.Down);
// any
let anyone = 1;
anyone = 1.3;
anyone = true;
console.log(typeof anyone);
// void | null | undefined
function returnVoid() {
    console.log('void');
}
returnVoid();
console.log(returnVoid() === undefined);
let nu = null;
console.log(nu);
// 联合类型 多个类型的组合
function unionType(args) {
    if (typeof args === 'number') {
    }
    else if (typeof args === 'string') {
    }
}
