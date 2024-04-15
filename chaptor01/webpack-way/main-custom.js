// *注：IIFE
(() => { // webpackBootstrap
  "use strict";
  /**
   * __webpack_modules__ 文件模块对象
   * key: 文件路径
   * value: 生成该模块需要调用function
   */
  var __webpack_modules__ = ({
    // 模块a.js
    "./a.js": ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      __webpack_require__.r(__webpack_exports__);

      __webpack_require__.d(__webpack_exports__, {
        "default": () => ( /* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
      });

      var _test_b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./test/b.js */ "./test/b.js");
      
      // a.js代码-start
      function __WEBPACK_DEFAULT_EXPORT__() {
        console.log('print b');
        // 引用关系： a.js中引用b.js
        (0, _test_b_js__WEBPACK_IMPORTED_MODULE_0__.bcd)()
      }
      // a.js代码-end
    }),

    // 模块b.js
    "./test/b.js": ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      __webpack_require__.r(__webpack_exports__);

      __webpack_require__.d(__webpack_exports__, {
        bcd: () => ( /* binding */ bcd),
        "default": () => ( /* binding */ addContentTest)
      });

      // b.js代码-start
      function addContentTest() {
        let a = 'bb'
        document.write(a)
      }
      
      function bcd() {
        console.log('bcd')
      }
      // b.js代码-end

    })

  });

  // webpack固定代码-start
  // 模块缓存
  var __webpack_module_cache__ = {};
  // require方法，可以理解为CommonJs的require. e.g: const a = require('a.js)
  function __webpack_require__(moduleId) {
    // 1.有缓存，取缓存
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // 2.没有缓存，新建一个module
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };
    // 3.产生key对应的模块
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    // 4.返回
    return module.exports;
  }

  /**
   * __webpack_require__自身的方法-start
   * 1. __webpack_require__.d => exports对象 定义新属性
   * 2. __webpack_require__.o => hasOwnProperty
   * 3. __webpack_require__.r => 把 exports对象 定义为一个Module（具体原因我也不知道，求留言评论）
   */
  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
        }
      }
    };
  })();

  (() => {
    __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  })();

  (() => {
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
      }
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
    };
  })();
  // __webpack_require__自身的方法-start
  // webpack固定代码-end

  var __webpack_exports__ = {};
  // entry 入口文件的执行
  (() => {
    __webpack_require__.r(__webpack_exports__);
    var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./a.js */ "./a.js");
    (0, _a_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
  })();

})();