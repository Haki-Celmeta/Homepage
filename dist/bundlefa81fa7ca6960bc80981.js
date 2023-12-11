/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;800&family=Whisper&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  background-color: #101820;
  color: #fff;
  position: fixed;
  width: 100%;
  z-index: 10;
}
header h1 {
  font-size: 1.8rem;
  font-family: "Whisper", sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  position: relative;
  padding: 0px 8px;
}
header h1:hover {
  transform: scale(1.1);
}
header h1::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 0;
  width: 1px;
  background-color: #FEE715;
  transition: 0.3s ease-in-out;
}
header h1:hover::before {
  height: 100%;
}
header h1::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0;
  width: 1px;
  background-color: #FEE715;
  transition: 0.3s ease-in-out;
}
header h1:hover::after {
  height: 100%;
}
header .menu-container {
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 20px;
}
header .menu-container li {
  cursor: pointer;
  position: relative;
  padding-bottom: 4px;
}
header .menu-container li:hover::after {
  width: 100%;
}
header .menu-container li::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #FEE715;
  transition: 0.3s ease-in-out;
}
header .menu-container li a {
  color: white;
  text-decoration-line: none;
}

#home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ff889a;
  color: #fff;
  height: 90vh;
}
#home h1 {
  font-family: "Whisper", sans-serif;
  font-weight: 700;
  font-size: 4rem;
  padding-bottom: 2rem;
}
#home h2 {
  font-weight: 500;
  animation: 2s appear-text-right 1 alternate;
}
#home p {
  animation: 2s appear-text-left 1 alternate;
}
#home h2, #home p {
  font-size: 2.5rem;
}
#home a {
  text-transform: uppercase;
  text-decoration: none;
  color: #FEE715;
  position: relative;
}
#home a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #FEE715;
  transition: 0.3s ease-in-out;
}
#home a:hover::after {
  width: 100%;
}

#about {
  padding: 3rem 4rem;
  background-color: #101820;
  color: #fff;
}
#about h2 {
  font-size: 2.5rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  font-weight: 500;
}
#about p {
  font-size: 0.9rem;
  line-height: 1.5rem;
}
#about .skills-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  margin-top: 2.5rem;
  padding: 0rem 8rem;
}
#about .skills-container div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  border: 1px solid #FEE715;
  border-radius: 16px;
  position: relative;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}
#about .skills-container div h4 {
  position: absolute;
  top: 1%;
  font-weight: 500;
}
#about .skills-container div:hover {
  background-color: #cab811;
}
#about .skills-container .skill {
  width: 100px;
  padding: 1rem;
}

#my-work {
  background-color: rgb(228, 228, 228);
  padding: 3rem 4rem;
}
#my-work h2 {
  font-size: 2.5rem;
  letter-spacing: 1px;
  font-weight: 500;
}

@keyframes appear-text-right {
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes appear-text-left {
  from {
    transform: translateX(-100vw);
  }
  to {
    transform: translateX(0);
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/_variables.scss"],"names":[],"mappings":"AAIA;EACE,UAAA;EACA,SAAA;EACA,kBAAA;EACA,oBAAA;EACA,sBAAA;EACA,mJAAA;AAFF;;AAKA;ECZE,aAAA;EACA,mBDYqB;EACrB,8BAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBElBe;EFmBf,WAAA;EACA,eAAA;EACA,WAAA;EACA,WAAA;AADF;AAGE;EACE,iBAAA;EACA,kCAAA;EACA,gBAAA;EACA,eAAA;EACA,4BEzBgB;EF0BhB,kBAAA;EACA,gBAAA;AADJ;AAGE;EACE,qBAAA;AADJ;AAGE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,yBE1CW;EF2CX,4BExCgB;AFuCpB;AAGE;EACE,YAAA;AADJ;AAGE;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,yBEvDW;EFwDX,4BErDgB;AFoDpB;AAGE;EACE,YAAA;AADJ;AAIE;EC9DA,aAAA;EACA,mBD8DuB;EACrB,gBAAA;EACA,SAAA;AADJ;AAGI;EACE,eAAA;EACA,kBAAA;EACA,mBAAA;AADN;AAGI;EACE,WAAA;AADN;AAGI;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,yBElFS;EFmFT,4BEhFc;AF+EpB;AAGI;EACE,YAAA;EACA,0BAAA;AADN;;AAMA;EC5FE,aAAA;EACA,sBD4FqB;EACrB,uBAAA;EACA,mBAAA;EACA,yBE/FW;EFgGX,WAAA;EACA,YAAA;AAFF;AAIE;EACE,kCAAA;EACA,gBAAA;EACA,eAAA;EACA,oBAAA;AAFJ;AAKE;EACE,gBAAA;EACA,2CAAA;AAHJ;AAME;EACE,0CAAA;AAJJ;AAOE;EACE,iBAAA;AALJ;AAQE;EACE,yBAAA;EACA,qBAAA;EACA,cE3HW;EF4HX,kBAAA;AANJ;AAQE;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,yBErIW;EFsIX,4BEnIgB;AF6HpB;AAQE;EACE,WAAA;AANJ;;AAUA;EACE,kBAAA;EACA,yBEhJe;EFiJf,WAAA;AAPF;AASE;EACE,iBAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;AAPJ;AAUE;EACE,iBAAA;EACA,mBAAA;AARJ;AAWE;EC9JA,aAAA;EACA,mBD8JuB;EACrB,eAAA;EACA,mBAAA;EACA,SAAA;EACA,kBAAA;EACA,kBAAA;AARJ;AAUI;ECtKF,aAAA;EACA,sBDsKyB;EACrB,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,4BE5Kc;AFqKpB;AASM;EACE,kBAAA;EACA,OAAA;EACA,gBAAA;AAPR;AAWI;EACE,yBAAA;AATN;AAYI;EACE,YAAA;EACA,aAAA;AAVN;;AAeA;EACE,oCAAA;EACA,kBAAA;AAZF;AAcE;EACE,iBAAA;EACA,mBAAA;EACA,gBAAA;AAZJ;;AAgBA;EACE;IACE,4BAAA;EAbF;EAgBA;IACE,wBAAA;EAdF;AACF;AAiBA;EACE;IACE,6BAAA;EAfF;EAkBA;IACE,wBAAA;EAhBF;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;800&family=Whisper&display=swap');\r\n@import 'mixins';\r\n@import 'variables';\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: inherit;\r\n  font-weight: inherit;\r\n  box-sizing: border-box;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\nheader {\r\n  @include displayFlex(row);\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem 4rem;\r\n  background-color: $charcoal-color;\r\n  color: #fff;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 10;\r\n\r\n  h1 {\r\n    font-size: 1.8rem;\r\n    font-family: 'Whisper', sans-serif;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    transition: $transtion-primary;\r\n    position: relative;\r\n    padding: 0px 8px;\r\n  }\r\n  h1:hover {\r\n    transform: scale(1.1);\r\n  }\r\n  h1::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    height: 0;\r\n    width: 1px;\r\n    background-color: $yellow-color;\r\n    transition: $transtion-primary;\r\n  }\r\n  h1:hover::before {\r\n    height: 100%;\r\n  }\r\n  h1::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    height: 0;\r\n    width: 1px;\r\n    background-color: $yellow-color;\r\n    transition: $transtion-primary;\r\n  }\r\n  h1:hover::after {\r\n    height: 100%;\r\n  }\r\n\r\n  .menu-container {\r\n    @include displayFlex(row);\r\n    list-style: none;\r\n    gap: 20px;\r\n\r\n    li {\r\n      cursor: pointer;\r\n      position: relative;\r\n      padding-bottom: 4px;\r\n    }\r\n    li:hover::after {\r\n      width: 100%;\r\n    }\r\n    li::after {\r\n      content: \"\";\r\n      position: absolute;\r\n      bottom: 0;\r\n      left: 0;\r\n      width: 0;\r\n      height: 1px;\r\n      background-color: $yellow-color;\r\n      transition: $transtion-primary;\r\n    }\r\n    li a {\r\n      color: white;\r\n      text-decoration-line: none;\r\n    }\r\n  }\r\n} \r\n\r\n#home {\r\n  @include displayFlex(column);\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: $pink-color;\r\n  color: #fff;\r\n  height: 90vh;\r\n\r\n  h1 {\r\n    font-family: 'Whisper', sans-serif;\r\n    font-weight: 700;\r\n    font-size: 4rem;\r\n    padding-bottom: 2rem;\r\n  }\r\n\r\n  h2 {\r\n    font-weight: 500;\r\n    animation: 2s appear-text-right 1 alternate;\r\n  }\r\n\r\n  p {\r\n    animation: 2s appear-text-left 1 alternate;\r\n  }\r\n\r\n  h2, p {\r\n    font-size: 2.5rem;\r\n  }\r\n  \r\n  a {\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    color: $yellow-color;\r\n    position: relative;\r\n  }\r\n  a::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: $yellow-color;\r\n    transition: $transtion-primary;\r\n  }\r\n  a:hover::after {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n#about {\r\n  padding: 3rem 4rem;\r\n  background-color: $charcoal-color;\r\n  color: #fff;\r\n\r\n  h2 {\r\n    font-size: 2.5rem;\r\n    letter-spacing: 1px;\r\n    margin-bottom: 1rem;\r\n    font-weight: 500;\r\n  }\r\n\r\n  p {\r\n    font-size: 0.9rem;\r\n    line-height: 1.5rem;\r\n  }\r\n\r\n  .skills-container {\r\n    @include displayFlex(row);\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    gap: 20px;\r\n    margin-top: 2.5rem;\r\n    padding: 0rem 8rem;\r\n\r\n    div {\r\n      @include displayFlex(column);\r\n      align-items: center;\r\n      justify-content: center;\r\n      height: 150px;\r\n      border: 1px solid $yellow-color;\r\n      border-radius: 16px;\r\n      position: relative;\r\n      cursor: pointer;\r\n      transition: $transtion-primary;\r\n\r\n      h4 {\r\n        position: absolute;\r\n        top: 1%;\r\n        font-weight: 500;\r\n      }\r\n    }\r\n\r\n    div:hover {\r\n      background-color: #cab811;\r\n    }\r\n\r\n    .skill {\r\n      width: 100px;\r\n      padding: 1rem;\r\n    }\r\n  }\r\n}\r\n\r\n#my-work {\r\n  background-color: rgb(228, 228, 228);\r\n  padding: 3rem 4rem;\r\n\r\n  h2 {\r\n    font-size: 2.5rem;\r\n    letter-spacing: 1px;\r\n    font-weight: 500;\r\n  }\r\n}\r\n\r\n@keyframes appear-text-right {\r\n  from {\r\n    transform: translateX(100vw);\r\n  }\r\n\r\n  to {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes appear-text-left {\r\n  from {\r\n    transform: translateX(-100vw);\r\n  }\r\n\r\n  to {\r\n    transform: translateX(0);\r\n  }\r\n}","@mixin displayFlex($direction) {\r\n  display: flex;\r\n  flex-direction: $direction;\r\n}","$charcoal-color: #101820;\r\n$yellow-color: #FEE715;\r\n$pink-color: #ff889a;\r\n\r\n$transtion-primary: 0.3s ease-in-out;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/css.png":
/*!****************************!*\
  !*** ./src/assets/css.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "css.png";

/***/ }),

/***/ "./src/assets/django.png":
/*!*******************************!*\
  !*** ./src/assets/django.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "django.png";

/***/ }),

/***/ "./src/assets/html5.png":
/*!******************************!*\
  !*** ./src/assets/html5.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "html5.png";

/***/ }),

/***/ "./src/assets/java.png":
/*!*****************************!*\
  !*** ./src/assets/java.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "java.png";

/***/ }),

/***/ "./src/assets/javascript.png":
/*!***********************************!*\
  !*** ./src/assets/javascript.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "javascript.png";

/***/ }),

/***/ "./src/assets/mongodb.png":
/*!********************************!*\
  !*** ./src/assets/mongodb.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mongodb.png";

/***/ }),

/***/ "./src/assets/node_js.png":
/*!********************************!*\
  !*** ./src/assets/node_js.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "node_js.png";

/***/ }),

/***/ "./src/assets/npm.png":
/*!****************************!*\
  !*** ./src/assets/npm.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "npm.png";

/***/ }),

/***/ "./src/assets/python.png":
/*!*******************************!*\
  !*** ./src/assets/python.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "python.png";

/***/ }),

/***/ "./src/assets/sass.png":
/*!*****************************!*\
  !*** ./src/assets/sass.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sass.png";

/***/ }),

/***/ "./src/assets/tailwind.png":
/*!*********************************!*\
  !*** ./src/assets/tailwind.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "tailwind.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _assets_css_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css.png */ "./src/assets/css.png");
/* harmony import */ var _assets_html5_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/html5.png */ "./src/assets/html5.png");
/* harmony import */ var _assets_tailwind_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/tailwind.png */ "./src/assets/tailwind.png");
/* harmony import */ var _assets_java_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/java.png */ "./src/assets/java.png");
/* harmony import */ var _assets_javascript_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/javascript.png */ "./src/assets/javascript.png");
/* harmony import */ var _assets_mongodb_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/mongodb.png */ "./src/assets/mongodb.png");
/* harmony import */ var _assets_node_js_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/node_js.png */ "./src/assets/node_js.png");
/* harmony import */ var _assets_npm_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/npm.png */ "./src/assets/npm.png");
/* harmony import */ var _assets_python_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/python.png */ "./src/assets/python.png");
/* harmony import */ var _assets_sass_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/sass.png */ "./src/assets/sass.png");
/* harmony import */ var _assets_django_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/django.png */ "./src/assets/django.png");












})();

/******/ })()
;
//# sourceMappingURL=bundlefa81fa7ca6960bc80981.js.map