"use strict";
// interface 接口不关心具体的实现细节，
// 只是定义好属性和方法，具体的实现放在类中
/**
 * interface i {
 *  iProperty,
 *  iFunction,
 * }
 */
function outputUserinfo(ui) {
    if (ui.gender) {
        console.log('boy is', ui.name);
    }
    else {
        console.log('girl is', ui.name);
    }
}
const ui_king = {
    name: 'king',
    age: 26,
    gender: true,
};
outputUserinfo(ui_king);
const ui_tina = {
    name: 'tina',
    gender: false,
};
ui_tina.age = 18;
// ui_king.gender = true // readonly
outputUserinfo(ui_tina);
let fnArithmetic;
fnArithmetic = function (a, b, c) {
    let r;
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
};
// const result = fnArithmetic(3, 4, 'add')
const result = fnArithmetic(3, 4, 'times');
console.log(result);
let myNumArr;
myNumArr = ['king', 'tina', 'cici'];
for (const i in myNumArr) {
    console.log(i, myNumArr[i]);
}
let myNumStrObj;
myNumStrObj = {
    width: '800px',
    height: null,
};
console.log(myNumStrObj['width']);
console.log(myNumStrObj['height']);
class CTime {
    // test: string;
    constructor(curr) {
        this.currTime = curr;
        // this.test = test;
    }
    setTime(d) {
        this.currTime = d;
    }
    getTime() {
        return this.currTime;
    }
}
let t = new CTime(new Date('2023-08-10'));
console.log(t);
console.log(t.getTime());
t.setTime(new Date());
console.log(t.getTime());
var ShapeType;
(function (ShapeType) {
    ShapeType["RECT"] = "RECT";
    ShapeType["SQUARE"] = "SQUARE";
})(ShapeType || (ShapeType = {}));
class CSquare {
    constructor(shapeType, sideLength, otherSideLength = 0) {
        this.shapeType = shapeType;
        this.girth = 0;
        if (this.shapeType === ShapeType.RECT) {
            this.girth = (sideLength + otherSideLength) * 2;
        }
        if (this.shapeType === ShapeType.SQUARE) {
            this.girth = sideLength * 4;
        }
    }
    getGirth() {
        return this.girth;
    }
}
let s = new CSquare(ShapeType.SQUARE, 4);
console.log(s.shapeType);
console.log(s.getGirth());
let r = new CSquare(ShapeType.RECT, 2, 8);
console.log(r.shapeType);
console.log(r.getGirth());
class CSquareB {
    constructor(shapeType, sideLength, otherSideLength = 0) {
        this.shapeType = shapeType;
        this.girth = 0;
        this.area = 0;
        if (shapeType === ShapeType.SQUARE) {
            this.girth = sideLength * 4;
            this.area = sideLength * sideLength;
        }
        else if (shapeType === ShapeType.RECT) {
            this.girth = (sideLength + otherSideLength) * 2;
            this.area = sideLength * otherSideLength;
        }
    }
    getGirth() {
        return this.girth;
    }
    getArea() {
        return this.area;
    }
}
let sb = new CSquareB(ShapeType.SQUARE, 4);
console.log(sb.getGirth());
console.log(sb.getArea());
let rb = new CSquareB(ShapeType.RECT, 2, 8);
console.log(rb.getGirth());
console.log(rb.getArea());
function getCounter() {
    let counter = function (s) {
        console.log('init counter');
    };
    counter.current = 0;
    counter.interval = 1;
    counter.count = function () {
        counter.current += counter.interval;
    };
    counter.setInterval = function (i) {
        counter.interval = i;
    };
    counter.reset = function () {
        counter.current = 0;
    };
    return counter;
}
const c = getCounter();
console.log(c);
c.setInterval(2);
c.count();
c.count();
c.count();
c.reset();
console.log(c.current, c.interval);
