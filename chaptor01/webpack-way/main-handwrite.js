/**
 * webpack词条
 * 1. __webpack_modules__:object - webpack模块文件对象
 * 2. __webpack_module_cache__:object - webpack模块缓存对象
 * 3. __webpack_require__:function - 相当于const ... = require('...')
 * 
 * 2. __unused_webpack_module
 * 3. __webpack_exports__
 */


// IIFE
(function() {
  "use strict";


  var __webpack_modules__ = ({
    './a.js':
    (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      // 1.
      // __webpack_require__.r(__webpack_exports__);
      // 2.
      /**
       * moduleId:string - 模块路径
       * value:function - 该模块的代码
       */
      __webpack_require__.d(__webpack_exports__, {
        abc: function() { return abc; },
        "default": function() { return addContent; }
      })

      // 3. a.js文件内容
      function addContent() {
        console.log('abcd')
        document.write('abcd')
        // addContentTest()
        // bcd()
      }

      function abc() {
        console.log('abc')
      }

    })

  });


  var __webpack_module_cache__ = {} // 模拟node模块行为

  /**
   * 
   * @param {*} moduleId 
   * @returns module.exports
   */
  function __webpack_require__(moduleId) {
    // 检查缓存中是否有key为moduleId的模块
    var cachedModule = __webpack_module_cache__[moduleId]
    // 1. 存在，直接返回
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }

    // 2. 不存在，加入缓存，注册。再返回
    // 注册
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    }
    /**
     * module: __unused_webpack_module
     * __webpack_exports__: module.exports
     * __webpack_require__: __webpack_require__
     * 
     */

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__)

    return module.exports;
  }



  // __webpack_require__.d
  // define getter
  !function() {
    __webpack_require__.d = function(exports, definition) {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, { enumerable: true, get: definition[key] })
        }
      }
    }
  }();

  // __webpack_require__.o
  // hasOwnProperty
  !function() {
    __webpack_require__.o = function(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop)
    }
  }();

  // __webpack_require__.r
  // define __esModule on exports
  !function() {
    __webpack_require__.r = function(exports) {
      if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  }();


  var __webpack_exports__ = {}

  // index.js
  !function() {
    // __webpack_require__.r(__webpack_exports__);
    var a = __webpack_require__('./a.js'); // 重要

    (0, a["default"])()
  }();


})()