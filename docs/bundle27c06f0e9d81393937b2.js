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

#logo {
  font-size: 1.8rem;
  font-family: "Whisper", sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  position: relative;
  padding: 0px 8px;
}

#logo:hover {
  transform: scale(1.1);
}

#logo::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 0;
  width: 1px;
  background-color: #FEE715;
  transition: 0.3s ease-in-out;
}

#logo:hover::before {
  height: 100%;
}

#logo::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0;
  width: 1px;
  background-color: #FEE715;
  transition: 0.3s ease-in-out;
}

#logo:hover::after {
  height: 100%;
}

#hamburger-menu {
  width: 35px;
  color: #fff;
  display: none;
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
  padding: 4rem 3rem 6rem 3rem;
}
#my-work h2 {
  font-size: 2.5rem;
  letter-spacing: 1px;
  font-weight: 500;
  margin-bottom: 5rem;
}
#my-work .projects-container {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.project {
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid rgb(116, 116, 116);
  border-radius: 10px;
  gap: 3rem;
}
.project img {
  border-radius: 16px;
}
.project .summary {
  display: flex;
  flex-direction: column;
}
.project .summary h4 {
  font-size: 1.75rem;
  font-weight: 500;
  padding: 1rem 0rem;
}
.project .summary p {
  font-size: 0.9rem;
  line-height: 1.5rem;
  color: rgb(70, 70, 70);
}
.project .summary .buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  margin-top: auto;
  margin-bottom: 1rem;
  padding-top: 1rem;
}
.project .summary .buttons a {
  color: rgb(70, 70, 70);
  text-decoration: none;
  padding: 0.8rem 1.8rem;
  border: 1px solid rgb(70, 70, 70);
  border-radius: 10px;
  transition: 0.3s ease-in-out;
}
.project .summary .buttons a:hover {
  background-color: #101820;
  color: #fff;
}

#contact {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #cab811;
  padding: 3rem 1rem;
}
#contact h1 {
  font-size: 3rem;
}
#contact h1:before {
  background-color: #101820;
}
#contact h1:after {
  background-color: #101820;
}
#contact ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  font-size: 1.1rem;
  color: rgb(70, 70, 70);
}
#contact ul li span {
  display: inline-block;
  font-weight: 500;
  width: 100px;
  text-align: end;
  margin-right: 10px;
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
}
@media (max-width: 930px) {
  .project {
    display: flex;
    flex-direction: column;
  }
  .project img {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  #about .skills-container {
    padding: 0rem;
  }
}
@media (max-width: 500px) {
  #about {
    padding: 3rem 1rem;
  }
  #about p {
    font-size: 1.1rem;
  }
  #my-work {
    padding: 3rem 0rem 5rem 0rem;
  }
  #my-work h2 {
    margin-bottom: 3rem;
  }
  .project {
    border: none;
    border-bottom: 1px solid rgb(116, 116, 116);
    border-radius: 0;
    padding-bottom: 2rem;
  }
  #contact {
    display: flex;
    flex-direction: column;
    padding: 3rem 0rem;
  }
  #contact #logo {
    margin-bottom: 2rem;
  }
  .project .summary p {
    font-size: 1.1rem;
  }
  .project .summary .buttons a {
    font-size: 1.1rem;
  }
  header {
    display: inline;
    padding: 1rem;
  }
  header .menu-container {
    display: none;
    margin-top: 1rem;
    justify-content: center;
  }
  #logo {
    display: inline-block;
  }
  #hamburger-menu {
    display: inline;
    cursor: pointer;
    float: right;
  }
  #home h2,
  #home p {
    text-align: center;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/_mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;800&family=Whisper&display=swap');\r\n@import 'mixins';\r\n@import 'variables';\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: inherit;\r\n  font-weight: inherit;\r\n  box-sizing: border-box;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n#logo {\r\n  font-size: 1.8rem;\r\n  font-family: 'Whisper', sans-serif;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  transition: $transtion-primary;\r\n  position: relative;\r\n  padding: 0px 8px;\r\n}\r\n#logo:hover {\r\n  transform: scale(1.1);\r\n}\r\n#logo::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  height: 0;\r\n  width: 1px;\r\n  background-color: $yellow-color;\r\n  transition: $transtion-primary;\r\n}\r\n#logo:hover::before {\r\n  height: 100%;\r\n}\r\n#logo::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 0;\r\n  width: 1px;\r\n  background-color: $yellow-color;\r\n  transition: $transtion-primary;\r\n}\r\n#logo:hover::after {\r\n  height: 100%;\r\n}\r\n\r\n#hamburger-menu {\r\n  width: 35px;\r\n  color: #fff;\r\n  display: none;\r\n}\r\n\r\nheader {\r\n  @include displayFlex(row);\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem 4rem;\r\n  background-color: $charcoal-color;\r\n  color: #fff;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 10;\r\n\r\n  .menu-container {\r\n    @include displayFlex(row);\r\n    list-style: none;\r\n    gap: 20px;\r\n\r\n    li {\r\n      cursor: pointer;\r\n      position: relative;\r\n      padding-bottom: 4px;\r\n    }\r\n    li:hover::after {\r\n      width: 100%;\r\n    }\r\n    li::after {\r\n      content: \"\";\r\n      position: absolute;\r\n      bottom: 0;\r\n      left: 0;\r\n      width: 0;\r\n      height: 1px;\r\n      background-color: $yellow-color;\r\n      transition: $transtion-primary;\r\n    }\r\n    li a {\r\n      color: white;\r\n      text-decoration-line: none;\r\n    }\r\n  }\r\n} \r\n\r\n#home {\r\n  @include displayFlex(column);\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: $pink-color;\r\n  color: #fff;\r\n  height: 90vh;\r\n\r\n  h1 {\r\n    font-family: 'Whisper', sans-serif;\r\n    font-weight: 700;\r\n    font-size: 4rem;\r\n    padding-bottom: 2rem;\r\n  }\r\n\r\n  h2 {\r\n    font-weight: 500;\r\n    animation: 2s appear-text-right 1 alternate;\r\n  }\r\n\r\n  p {\r\n    animation: 2s appear-text-left 1 alternate;\r\n  }\r\n\r\n  h2, p {\r\n    font-size: 2.5rem;\r\n  }\r\n  \r\n  a {\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    color: $yellow-color;\r\n    position: relative;\r\n  }\r\n  a::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: $yellow-color;\r\n    transition: $transtion-primary;\r\n  }\r\n  a:hover::after {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n#about {\r\n  padding: 3rem 4rem;\r\n  background-color: $charcoal-color;\r\n  color: #fff;\r\n\r\n  h2 {\r\n    font-size: 2.5rem;\r\n    letter-spacing: 1px;\r\n    margin-bottom: 1rem;\r\n    font-weight: 500;\r\n  }\r\n\r\n  p {\r\n    font-size: 0.9rem;\r\n    line-height: 1.5rem;\r\n  }\r\n\r\n  .skills-container {\r\n    @include displayFlex(row);\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    gap: 20px;\r\n    margin-top: 2.5rem;\r\n    padding: 0rem 8rem;\r\n\r\n    div {\r\n      @include displayFlex(column);\r\n      align-items: center;\r\n      justify-content: center;\r\n      height: 150px;\r\n      border: 1px solid $yellow-color;\r\n      border-radius: 16px;\r\n      position: relative;\r\n      cursor: pointer;\r\n      transition: $transtion-primary;\r\n\r\n      h4 {\r\n        position: absolute;\r\n        top: 1%;\r\n        font-weight: 500;\r\n      }\r\n    }\r\n\r\n    div:hover {\r\n      background-color: #cab811;\r\n    }\r\n\r\n    .skill {\r\n      width: 100px;\r\n      padding: 1rem;\r\n    }\r\n  }\r\n}\r\n\r\n#my-work {\r\n  background-color: rgb(228, 228, 228);\r\n  padding: 4rem 3rem 6rem 3rem;\r\n\r\n  h2 {\r\n    font-size: 2.5rem;\r\n    letter-spacing: 1px;\r\n    font-weight: 500;\r\n    margin-bottom: 5rem;\r\n  }\r\n\r\n  .projects-container {\r\n    @include displayFlex(column);\r\n    gap: 5rem;\r\n  }\r\n}\r\n\r\n.project {\r\n  @include displayFlex(row);\r\n  padding: 1rem;\r\n  border: 1px solid rgb(116, 116, 116);\r\n  border-radius: 10px;\r\n  gap: 3rem;\r\n\r\n  img {\r\n    border-radius: 16px;\r\n  }\r\n\r\n  .summary {\r\n    @include displayFlex(column);\r\n    \r\n    h4 {\r\n      font-size: 1.75rem;\r\n      font-weight: 500;\r\n      padding: 1rem 0rem;\r\n    }\r\n\r\n    p {\r\n      font-size: 0.9rem;\r\n      line-height: 1.5rem;\r\n      color: rgb(70, 70, 70);\r\n    }\r\n\r\n    .buttons {\r\n      @include displayFlex(row);\r\n      justify-content: center;\r\n      gap: 2rem;\r\n      margin-top: auto;\r\n      margin-bottom: 1rem;\r\n      padding-top: 1rem;\r\n      \r\n      a {\r\n        color: rgb(70, 70, 70);\r\n        text-decoration: none;\r\n        padding: 0.8rem 1.8rem;\r\n        border: 1px solid rgb(70, 70, 70);\r\n        border-radius: 10px;\r\n        transition: $transtion-primary;\r\n      }\r\n      a:hover {\r\n        background-color: $charcoal-color;\r\n        color: #fff;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n#contact {\r\n  @include displayFlex(row);\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  background-color: #cab811;\r\n  padding: 3rem 1rem;\r\n\r\n  h1 {\r\n    font-size: 3rem;\r\n  }\r\n  h1:before {\r\n    background-color: $charcoal-color;\r\n  }\r\n  h1:after {\r\n    background-color: $charcoal-color;\r\n  }\r\n\r\n  ul {\r\n    @include displayFlex(column);\r\n    gap: 10px;\r\n    list-style: none;\r\n    font-size: 1.1rem;\r\n    color: rgb(70, 70, 70);\r\n\r\n    li span {\r\n      display: inline-block;\r\n      font-weight: 500;\r\n      width: 100px;\r\n      text-align: end;\r\n      margin-right: 10px;\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes appear-text-right {\r\n  from {\r\n    transform: translateX(100vw);\r\n  }\r\n\r\n  to {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes appear-text-left {\r\n  from {\r\n    transform: translateX(-100vw);\r\n  }\r\n\r\n  to {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@media (max-width: 930px) {\r\n  .project {\r\n    @include displayFlex(column);\r\n\r\n    img {\r\n      width: 100%;\r\n      @include displayFlex(row);\r\n      justify-content: center;\r\n      align-items: center;\r\n    }\r\n  }\r\n\r\n  #about .skills-container {\r\n    padding: 0rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  #about {\r\n    padding: 3rem 1rem;\r\n\r\n    p {\r\n      font-size: 1.1rem;\r\n    }\r\n  }\r\n\r\n  #my-work {\r\n    padding: 3rem 0rem 5rem 0rem;\r\n\r\n    h2 {\r\n      margin-bottom: 3rem;\r\n    }\r\n  }\r\n\r\n  .project {\r\n    border: none;\r\n    border-bottom: 1px solid rgb(116, 116, 116);\r\n    border-radius: 0;\r\n    padding-bottom: 2rem;\r\n  }\r\n\r\n  #contact {\r\n    @include displayFlex(column);\r\n    padding: 3rem 0rem;\r\n\r\n    #logo {\r\n      margin-bottom: 2rem;\r\n    }\r\n  }\r\n\r\n  .project .summary {\r\n\r\n    p {\r\n      font-size: 1.1rem;\r\n    }\r\n\r\n    .buttons a {\r\n      font-size: 1.1rem;\r\n    }\r\n  }\r\n\r\n  header {\r\n    display: inline;\r\n    padding: 1rem;\r\n  }\r\n\r\n  header .menu-container {\r\n    display: none;\r\n    margin-top: 1rem;\r\n    justify-content: center;\r\n  }\r\n\r\n  #logo {\r\n    display: inline-block;\r\n  }\r\n\r\n  #hamburger-menu {\r\n    display: inline;\r\n    cursor: pointer;\r\n    float: right;\r\n  }\r\n\r\n  #home h2,\r\n  #home p {\r\n    text-align: center;\r\n  }\r\n}","$charcoal-color: #101820;\r\n$yellow-color: #FEE715;\r\n$pink-color: #ff889a;\r\n\r\n$transtion-primary: 0.3s ease-in-out;","@mixin displayFlex($direction) {\r\n  display: flex;\r\n  flex-direction: $direction;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/assets/J.W.png":
/*!****************************!*\
  !*** ./src/assets/J.W.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "J.W.png";

/***/ }),

/***/ "./src/assets/ageCalulator.PNG":
/*!*************************************!*\
  !*** ./src/assets/ageCalulator.PNG ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ageCalulator.PNG";

/***/ }),

/***/ "./src/assets/battleship.PNG":
/*!***********************************!*\
  !*** ./src/assets/battleship.PNG ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "battleship.PNG";

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

/***/ "./src/assets/hamburger-menu-svgrepo-com.svg":
/*!***************************************************!*\
  !*** ./src/assets/hamburger-menu-svgrepo-com.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hamburger-menu-svgrepo-com.svg";

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

/***/ }),

/***/ "./src/assets/weather.PNG":
/*!********************************!*\
  !*** ./src/assets/weather.PNG ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "weather.PNG";

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
/* harmony import */ var _assets_battleship_PNG__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/battleship.PNG */ "./src/assets/battleship.PNG");
/* harmony import */ var _assets_weather_PNG__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/weather.PNG */ "./src/assets/weather.PNG");
/* harmony import */ var _assets_ageCalulator_PNG__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/ageCalulator.PNG */ "./src/assets/ageCalulator.PNG");
/* harmony import */ var _assets_J_W_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/J.W.png */ "./src/assets/J.W.png");
/* harmony import */ var _assets_hamburger_menu_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/hamburger-menu-svgrepo-com.svg */ "./src/assets/hamburger-menu-svgrepo-com.svg");

















var menu = document.querySelector('#hamburger-menu');
var menuContainer = document.querySelector('.menu-container');
document.querySelectorAll('.menu-container a').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
var isOpen = false;
menu.addEventListener('click', function () {
  if (!isOpen) {
    menuContainer.style.display = 'flex';
    isOpen = true;
  } else {
    menuContainer.style.display = 'none';
    isOpen = false;
  }
});
window.addEventListener('resize', function () {
  if (window.innerWidth > 500) {
    menuContainer.style.display = 'flex';
  }
  if (window.innerWidth <= 500) {
    menuContainer.style.display = 'none';
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle27c06f0e9d81393937b2.js.map