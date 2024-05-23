"use strict";
// function sayName() {
//   let a:string = 'ss';
//   // a = 12;
//   console.log('hello ts', a)
// }
// sayName()
// var s:string = 'global'
// function scopeFn() {
//   var ss:string = 'scope'
//   console.log(ss + s)
// }
// scopeFn()
// console.log(s)
// let s:string = 'global'
// var s:string = 'global'
// console.log(s)
// console.log(say)
// function say() {
//   console.log('say')
// }
// var say = function() {
//   console.log('say 01')
// }
// console.log(say)
// say()
// let cln = 'cln'
// var cln = 'cln'
// function say() {
//   console.log('say', cln)
// }
// say()
// debugger
// const btn = document.querySelector('.btn') as HTMLButtonElement;
// const btns = document.querySelectorAll('.btn') as NodeListOf<HTMLButtonElement>;
// for (var jj = 0; jj < btns.length; jj++) {
//   // 问题: jj字段可以在全局打印出来，所以执行的时候都是‘3’
//   // btns[jj].onclick = function() {
//   //   console.log('click btn', jj)
//   // }
//   // 解决：1. let
//   // 解决：2. 立即执行函数
//   // (function(jj) {
//   //   btns[jj].onclick = function() {
//   //     console.log('click btn', jj)
//   //   }
//   // })(jj)
//   // 解决：3. 闭包
//   btns[jj].onclick = (function(jj) {
//     // return function() {
//     //   console.log('click btn', jj)
//     // }
//     function t(): any {
//       console.log('click btn', jj)
//     }
//     return t
//   })(jj)
// }
// console.log('jj', jj)
// for (var i = 0; i < 3; i++) {
//   // setTimeout(() => {
//   //   console.log(i)
//   // }, 0);
//   // {
//   //   console.log(i)
//   // }
//   function a(i: number) {
//     console.log(i)
//   }
//   a(i)
// }
// let arr = [1, 2]
// let [a, b] = arr
// console.log(a, b);
// [a, b] = [b, a]
// console.log(a, b)
let arr1 = [1, 2, 3, 4, 5];
let [a, ...rest] = arr1;
console.log(a);
console.log(rest);
