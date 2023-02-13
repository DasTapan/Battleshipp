/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/BungeeSpice-Regular.ttf */ "./src/assets/fonts/BungeeSpice-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/RubikVinyl-Regular.ttf */ "./src/assets/fonts/RubikVinyl-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/LakkiReddy-Regular.ttf */ "./src/assets/fonts/LakkiReddy-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: BungeeSpice;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-style: normal;\n}\n\n@font-face {\n  font-family: RubikVinyl;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-style: normal;\n}\n\n@font-face {\n  font-family: LakkiReddy;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-style: normal;\n}\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n/**\n   * Add border box sizing in all browsers (opinionated).\n   */\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n}\n\n/**\n   * 1. Use the default cursor in all browsers (opinionated).\n   */\n\nhtml {\n  cursor: default;\n}\n\nbody {\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Oxygen, Ubuntu,\n    \"Open Sans\", sans-serif;\n  font-size: 16px;\n}\n\n.content {\n  --board-side-length: 430px;\n\n  height: 100vh;\n  width: 100vw;\n  background-color: #fffefe;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 10px;\n  position: relative;\n}\n\n.footer {\n  color: #f5f5f5;\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n  background-color: #354259;\n  text-align: center;\n  height: 45px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer span:nth-child(3) > a {\n  color: magenta;\n}\n\n.footer img:hover {\n  cursor: pointer;\n}\n\n.game-title {\n  height: 110px;\n  width: 60vw;\n  position: absolute;\n  top: 20px;\n  font-family: RubikVinyl;\n  font-size: 6rem;\n  text-align: center;\n  letter-spacing: 6.6px;\n}\n\n.result {\n  position: absolute;\n  bottom: 110px;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n.result > span:first-child {\n  font-style: italic;\n  margin-right: 6px;\n}\n\n.player-banner,\n.cpu-banner {\n  height: 215px;\n  width: 60px;\n  padding: 28px 0;\n  font-size: 40px;\n  font-weight: bold;\n  writing-mode: vertical-rl;\n  text-orientation: upright;\n  font-family: LakkiReddy;\n}\n\n.vs {\n  height: 60px;\n  width: 60px;\n  text-align: center;\n  padding: 10px 0;\n  font-family: BungeeSpice;\n  font-style: italic;\n  font-size: 30px;\n}\n\n.player-board,\n.cpu-board {\n  height: var(--board-side-length);\n  width: var(--board-side-length);\n\n  border-radius: 5px;\n\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.player-board > div,\n.cpu-board > div {\n  height: calc(10%);\n  width: calc(10%);\n  border: 1.6px solid whitesmoke;\n}\n\n.cpu-board > div:hover {\n  cursor: pointer;\n}\n\n.cpu-board > div:hover {\n  background-color: #ff8989;\n}\n\n.player-board > div {\n  background-color: #8babe8cc;\n}\n\n.cpu-board > div {\n  background-color: #ffc3c3;\n}\n\n.attacked-cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.attack-mark {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background-color: red;\n}\n\n.occupied {\n  background-color: #a4a2a2ed !important;\n  border-radius: 5px;\n}\n\n.cpu-took-hit {\n  background-color: #9896d1 !important;\n}\n", "",{"version":3,"sources":["webpack://./src/components/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAAmD;EACnD,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,4CAAkD;EAClD,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,4CAAkD;EAClD,kBAAkB;AACpB;;AAEA;;EAEE;;AAEF;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;;IAEI;;AAEJ;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;;IAEI;;AAEJ;EACE,eAAe;AACjB;;AAEA;EACE;2BACyB;EACzB,eAAe;AACjB;;AAEA;EACE,0BAA0B;;EAE1B,aAAa;EACb,YAAY;EACZ,yBAAyB;;EAEzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,SAAS;EACT,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;;EAEZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,WAAW;EACX,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,wBAAwB;EACxB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,gCAAgC;EAChC,+BAA+B;;EAE/B,kBAAkB;;EAElB,aAAa;EACb,eAAe;AACjB;;AAEA;;EAEE,iBAAiB;EACjB,gBAAgB;EAChB,8BAA8B;AAChC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":["@font-face {\n  font-family: BungeeSpice;\n  src: url(\"../assets/fonts/BungeeSpice-Regular.ttf\");\n  font-style: normal;\n}\n\n@font-face {\n  font-family: RubikVinyl;\n  src: url(\"../assets/fonts/RubikVinyl-Regular.ttf\");\n  font-style: normal;\n}\n\n@font-face {\n  font-family: LakkiReddy;\n  src: url(\"../assets/fonts/LakkiReddy-Regular.ttf\");\n  font-style: normal;\n}\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n/**\n   * Add border box sizing in all browsers (opinionated).\n   */\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n}\n\n/**\n   * 1. Use the default cursor in all browsers (opinionated).\n   */\n\nhtml {\n  cursor: default;\n}\n\nbody {\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Oxygen, Ubuntu,\n    \"Open Sans\", sans-serif;\n  font-size: 16px;\n}\n\n.content {\n  --board-side-length: 430px;\n\n  height: 100vh;\n  width: 100vw;\n  background-color: #fffefe;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 10px;\n  position: relative;\n}\n\n.footer {\n  color: #f5f5f5;\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n  background-color: #354259;\n  text-align: center;\n  height: 45px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer span:nth-child(3) > a {\n  color: magenta;\n}\n\n.footer img:hover {\n  cursor: pointer;\n}\n\n.game-title {\n  height: 110px;\n  width: 60vw;\n  position: absolute;\n  top: 20px;\n  font-family: RubikVinyl;\n  font-size: 6rem;\n  text-align: center;\n  letter-spacing: 6.6px;\n}\n\n.result {\n  position: absolute;\n  bottom: 110px;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n.result > span:first-child {\n  font-style: italic;\n  margin-right: 6px;\n}\n\n.player-banner,\n.cpu-banner {\n  height: 215px;\n  width: 60px;\n  padding: 28px 0;\n  font-size: 40px;\n  font-weight: bold;\n  writing-mode: vertical-rl;\n  text-orientation: upright;\n  font-family: LakkiReddy;\n}\n\n.vs {\n  height: 60px;\n  width: 60px;\n  text-align: center;\n  padding: 10px 0;\n  font-family: BungeeSpice;\n  font-style: italic;\n  font-size: 30px;\n}\n\n.player-board,\n.cpu-board {\n  height: var(--board-side-length);\n  width: var(--board-side-length);\n\n  border-radius: 5px;\n\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.player-board > div,\n.cpu-board > div {\n  height: calc(10%);\n  width: calc(10%);\n  border: 1.6px solid whitesmoke;\n}\n\n.cpu-board > div:hover {\n  cursor: pointer;\n}\n\n.cpu-board > div:hover {\n  background-color: #ff8989;\n}\n\n.player-board > div {\n  background-color: #8babe8cc;\n}\n\n.cpu-board > div {\n  background-color: #ffc3c3;\n}\n\n.attacked-cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.attack-mark {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background-color: red;\n}\n\n.occupied {\n  background-color: #a4a2a2ed !important;\n  border-radius: 5px;\n}\n\n.cpu-took-hit {\n  background-color: #9896d1 !important;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/components/style.css":
/*!**********************************!*\
  !*** ./src/components/style.css ***!
  \**********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/components/dom.js":
/*!*******************************!*\
  !*** ./src/components/dom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/components/index.js");


const cpuBoardCells = document.querySelectorAll(".cpu-board > div");

function parseCoordinates(cell) {
  const cellClasses = cell.classList;
  const col = cellClasses[0].split("-")[0];
  const row = Number(cellClasses[0].split("-")[1]);
  return { col, row };
}

cpuBoardCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const point = { ...parseCoordinates(cell) };
    _index__WEBPACK_IMPORTED_MODULE_0__["default"].humanAttack(point);
  });
});


/***/ }),

/***/ "./src/components/gameBoard.js":
/*!*************************************!*\
  !*** ./src/components/gameBoard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const gameBoardFactory = () => ({
  attackAttempts: [],
  missHits: [],
  fleet: [],
  allShipSunk() {
    return this.fleet.every((ship) => ship.isSunk() === true);
  },
  getClassName(point) {
    return `${point.col}-${point.row}`;
  },
  showShips(boardClass) {
    this.fleet.forEach((ship) => {
      ship.showShip(boardClass);
    });
  },
  getOccupiedGrids(ship) {
    const allPoints = [];
    const colOne = ship.startPos.col;
    const colTwo = ship.endPos.col;
    const rowOne = ship.startPos.row;
    const rowTwo = ship.endPos.row;
    if (colOne === colTwo) {
      for (let i = rowOne; i <= rowTwo; i++) {
        allPoints.push({ col: colOne, row: i });
      }
    }
    if (rowOne === rowTwo) {
      for (let i = colOne.charCodeAt(0); i <= colTwo.charCodeAt(0); i++) {
        allPoints.push({ col: String.fromCharCode(i), row: rowOne });
      }
    }
    return allPoints;
  },
  evaluateAttack(attackedGrid) {
    let signal = false;
    this.fleet.forEach((ship) => {
      const allPoints = this.getOccupiedGrids(ship);
      allPoints.forEach((point) => {
        if (attackedGrid.col === point.col && attackedGrid.row === point.row)
          signal = true;
      });
    });
    return signal;
  },
  identifyShip(attackedGrid) {
    let attackedShip = null;
    this.fleet.forEach((ship) => {
      const allPoints = this.getOccupiedGrids(ship);
      allPoints.forEach((point) => {
        if (attackedGrid.col === point.col && attackedGrid.row === point.row)
          attackedShip = { ...ship };
      });
    });
    return attackedShip;
  },
  sendHitFunction(shipHit) {
    const shipName = shipHit.name;
    this.fleet.forEach((ship) => {
      if (ship.name === shipName) ship.hit();
    });
  },
  placeShip(startPos, endPos, ship) {
    // eslint-disable-next-line no-param-reassign
    ship.startPos.col = startPos.col;
    // eslint-disable-next-line no-param-reassign
    ship.startPos.row = startPos.row;
    // eslint-disable-next-line no-param-reassign
    ship.endPos.col = endPos.col;
    // eslint-disable-next-line no-param-reassign
    ship.endPos.row = endPos.row;
    this.fleet.push(ship);
  },
  recieveAttack(point) {
    this.attackAttempts.push(point);
    if (!this.evaluateAttack(point)) {
      this.missHits.push(point);
      return {
        isAttacked: false,
        ship: null,
      };
    }
    const shipHit = this.identifyShip(point);
    this.sendHitFunction(shipHit);
    return {
      isAttacked: true,
      ship: shipHit,
    };
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoardFactory);


/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/style.css");
/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/favicon.png */ "./src/assets/favicon.png");
/* harmony import */ var _assets_github_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/github-icon.png */ "./src/assets/github-icon.png");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session */ "./src/components/session.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ "./src/components/player.js");







const head = document.querySelector("head");
const link = document.createElement("link");

link.setAttribute("rel", "shortcut icon");
link.setAttribute("type", "image/x-icon");
link.setAttribute("href", _assets_favicon_png__WEBPACK_IMPORTED_MODULE_1__);
head.appendChild(link);

const imageTag = document.querySelector(".footer > a img");
imageTag.src = _assets_github_icon_png__WEBPACK_IMPORTED_MODULE_2__;

const user = (0,_player__WEBPACK_IMPORTED_MODULE_4__.humanPlayerFactory)();
const cpu = (0,_player__WEBPACK_IMPORTED_MODULE_4__.cpuPlayerFactory)();

// start game immediately
const playSession = (0,_session__WEBPACK_IMPORTED_MODULE_3__["default"])(user, cpu);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playSession);


/***/ }),

/***/ "./src/components/player.js":
/*!**********************************!*\
  !*** ./src/components/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cpuPlayerFactory": () => (/* binding */ cpuPlayerFactory),
/* harmony export */   "humanPlayerFactory": () => (/* binding */ humanPlayerFactory)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/components/gameBoard.js");


const humanPlayerFactory = (name) => {
  const ownBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const validTurn = true;
  return { name, ownBoard, validTurn };
};

const cpuPlayerFactory = () => {
  const ownBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const validTurn = false;
  return { name: "CPU", ownBoard, validTurn };
};




/***/ }),

/***/ "./src/components/randomPlacement.js":
/*!*******************************************!*\
  !*** ./src/components/randomPlacement.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cpuPlacement": () => (/* binding */ cpuPlacement),
/* harmony export */   "userPlacement": () => (/* binding */ userPlacement)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/components/ship.js");


const userACarrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5, 0, "Aircraft Carrier");
const userCruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4, 0, "Cruiser");
const userSubmarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 0, "Submarine");
const userDestroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 0, "Destroyer");
const userPatrol = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2, 0, "Patrol");

const cpuACarrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5, 0, "Aircraft Carrier");
const cpuCruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4, 0, "Cruiser");
const cpuSubmarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 0, "Submarine");
const cpuDestroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 0, "Destroyer");
const cpuPatrol = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2, 0, "Patrol");

const userPlacement = [
  [
    [{ col: "A", row: 9 }, { col: "E", row: 9 }, userACarrier],
    [{ col: "B", row: 3 }, { col: "B", row: 6 }, userCruiser],
    [{ col: "E", row: 5 }, { col: "E", row: 7 }, userSubmarine],
    [{ col: "G", row: 2 }, { col: "I", row: 2 }, userDestroyer],
    [{ col: "H", row: 10 }, { col: "I", row: 10 }, userPatrol],
  ],
  [
    [{ col: "C", row: 4 }, { col: "G", row: 4 }, userACarrier],
    [{ col: "B", row: 1 }, { col: "E", row: 1 }, userCruiser],
    [{ col: "B", row: 8 }, { col: "B", row: 10 }, userSubmarine],
    [{ col: "G", row: 2 }, { col: "I", row: 2 }, userDestroyer],
    [{ col: "J", row: 7 }, { col: "J", row: 8 }, userPatrol],
  ],
  [
    [{ col: "D", row: 1 }, { col: "H", row: 1 }, userACarrier],
    [{ col: "D", row: 4 }, { col: "D", row: 7 }, userCruiser],
    [{ col: "B", row: 8 }, { col: "B", row: 10 }, userSubmarine],
    [{ col: "H", row: 6 }, { col: "J", row: 6 }, userDestroyer],
    [{ col: "A", row: 2 }, { col: "A", row: 3 }, userPatrol],
  ],
  [
    [{ col: "D", row: 3 }, { col: "D", row: 7 }, userACarrier],
    [{ col: "F", row: 10 }, { col: "I", row: 10 }, userCruiser],
    [{ col: "A", row: 8 }, { col: "A", row: 10 }, userSubmarine],
    [{ col: "H", row: 1 }, { col: "J", row: 1 }, userDestroyer],
    [{ col: "F", row: 6 }, { col: "G", row: 6 }, userPatrol],
  ],
];

const cpuPlacement = [
  [
    [{ col: "J", row: 6 }, { col: "J", row: 10 }, cpuACarrier],
    [{ col: "B", row: 2 }, { col: "B", row: 5 }, cpuCruiser],
    [{ col: "E", row: 1 }, { col: "G", row: 1 }, cpuSubmarine],
    [{ col: "E", row: 8 }, { col: "E", row: 10 }, cpuDestroyer],
    [{ col: "F", row: 4 }, { col: "G", row: 4 }, cpuPatrol],
  ],
  [
    [{ col: "C", row: 10 }, { col: "G", row: 10 }, cpuACarrier],
    [{ col: "A", row: 1 }, { col: "D", row: 1 }, cpuCruiser],
    [{ col: "H", row: 2 }, { col: "J", row: 2 }, cpuSubmarine],
    [{ col: "F", row: 3 }, { col: "F", row: 5 }, cpuDestroyer],
    [{ col: "A", row: 7 }, { col: "A", row: 8 }, cpuPatrol],
  ],
  [
    [{ col: "B", row: 3 }, { col: "F", row: 3 }, cpuACarrier],
    [{ col: "D", row: 6 }, { col: "D", row: 9 }, cpuCruiser],
    [{ col: "H", row: 5 }, { col: "J", row: 5 }, cpuSubmarine],
    [{ col: "A", row: 6 }, { col: "A", row: 8 }, cpuDestroyer],
    [{ col: "I", row: 1 }, { col: "I", row: 2 }, cpuPatrol],
  ],
  [
    [{ col: "B", row: 3 }, { col: "B", row: 7 }, cpuACarrier],
    [{ col: "F", row: 3 }, { col: "F", row: 6 }, cpuCruiser],
    [{ col: "H", row: 9 }, { col: "J", row: 9 }, cpuSubmarine],
    [{ col: "C", row: 10 }, { col: "E", row: 10 }, cpuDestroyer],
    [{ col: "I", row: 1 }, { col: "I", row: 2 }, cpuPatrol],
  ],
];




/***/ }),

/***/ "./src/components/render.js":
/*!**********************************!*\
  !*** ./src/components/render.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayWinner": () => (/* binding */ displayWinner),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
const resultDiv = document.querySelector(".result");

function displayWinner(str1, str2) {
  const spanOne = document.createElement("span");
  const spanTwo = document.createElement("span");
  spanOne.textContent = str1;
  spanTwo.textContent = str2;
  resultDiv.append(spanOne, spanTwo);
}

function render(cell) {
  cell.classList.add("attacked-cell");
  const attackMark = document.createElement("div");
  attackMark.classList.add("attack-mark");
  cell.appendChild(attackMark);
  cell.setAttribute("style", "pointer-events:none");
}




/***/ }),

/***/ "./src/components/session.js":
/*!***********************************!*\
  !*** ./src/components/session.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _randomPlacement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomPlacement */ "./src/components/randomPlacement.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/components/render.js");



function switchTurn(attacker) {
  // eslint-disable-next-line no-param-reassign
  attacker.validTurn = !attacker.validTurn;
}

const session = (user, cpu) => {
  const humanPlayer = user;
  const cpuPlayer = cpu;

  const userIndex = Math.floor(Math.random() * 4);
  const cpuIndex = Math.floor(Math.random() * 4);

  // user ship placement
  humanPlayer.ownBoard.placeShip(
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.userPlacement[userIndex][0][0],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.userPlacement[userIndex][0][1],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.userPlacement[userIndex][0][2]
  );

  humanPlayer.ownBoard.placeShip(
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.userPlacement[userIndex][1][0],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.userPlacement[userIndex][1][1],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.userPlacement[userIndex][1][2]
  );
  humanPlayer.ownBoard.placeShip(
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.userPlacement[userIndex][2][0],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.userPlacement[userIndex][2][1],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.userPlacement[userIndex][2][2]
  );
  humanPlayer.ownBoard.placeShip(
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.userPlacement[userIndex][3][0],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.userPlacement[userIndex][3][1],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.userPlacement[userIndex][3][2]
  );
  humanPlayer.ownBoard.placeShip(
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.userPlacement[userIndex][4][0],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.userPlacement[userIndex][4][1],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.userPlacement[userIndex][4][2]
  );
  // cpu ship placement
  cpuPlayer.ownBoard.placeShip(
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.cpuPlacement[cpuIndex][0][0],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.cpuPlacement[cpuIndex][0][1],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.cpuPlacement[cpuIndex][0][2]
  );
  cpuPlayer.ownBoard.placeShip(
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.cpuPlacement[cpuIndex][1][0],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.cpuPlacement[cpuIndex][1][1],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.cpuPlacement[cpuIndex][1][2]
  );
  cpuPlayer.ownBoard.placeShip(
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.cpuPlacement[cpuIndex][2][0],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.cpuPlacement[cpuIndex][2][1],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.cpuPlacement[cpuIndex][2][2]
  );
  cpuPlayer.ownBoard.placeShip(
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.cpuPlacement[cpuIndex][3][0],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.cpuPlacement[cpuIndex][3][1],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.cpuPlacement[cpuIndex][3][2]
  );
  cpuPlayer.ownBoard.placeShip(
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.cpuPlacement[cpuIndex][4][0],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.cpuPlacement[cpuIndex][4][1],
    _randomPlacement__WEBPACK_IMPORTED_MODULE_0__.cpuPlacement[cpuIndex][4][2]
  );

  humanPlayer.ownBoard.showShips("player-board");

  const isGameOver = function isGameOver() {
    return (
      humanPlayer.ownBoard.allShipSunk() || cpuPlayer.ownBoard.allShipSunk()
    );
  };

  const selectCell = function selectCell(coordinate, boardClass) {
    const cellClass = `.${boardClass} > .${coordinate.col}-${coordinate.row}`;
    const cell = document.querySelector(cellClass);
    return cell;
  };

  const humanAttack = function humanAttack(point) {
    if (humanPlayer.validTurn === true) {
      cpuPlayer.ownBoard.recieveAttack(point);
      const cell = selectCell(point, "cpu-board");
      (0,_render__WEBPACK_IMPORTED_MODULE_1__.render)(cell);
      if (
        !JSON.stringify(cpuPlayer.ownBoard.missHits).includes(
          JSON.stringify(point)
        )
      )
        cell.classList.add("cpu-took-hit");
      switchTurn(humanPlayer);
      switchTurn(cpuPlayer);
    }
    if (!isGameOver()) cpuAttack();
    else (0,_render__WEBPACK_IMPORTED_MODULE_1__.displayWinner)("Congratulations!", "You won");
  };

  const cpuAttack = function cpuAttack() {
    function generateRandomPoints() {
      const row = Math.floor(Math.random() * 10) + 1;
      const col = String.fromCharCode(
        Math.floor(Math.random() * (74 - 65 + 1)) + 65
      );
      return { col, row };
    }

    function checkUnique(point) {
      const allAttackedPoints = [...humanPlayer.ownBoard.attackAttempts];
      const jsonArr = allAttackedPoints.map(JSON.stringify);
      return jsonArr.includes(JSON.stringify(point));
    }

    function getRandomPoints() {
      let randomPoint = { ...generateRandomPoints() };
      while (checkUnique(randomPoint)) {
        randomPoint = { ...generateRandomPoints() };
      }
      return { col: randomPoint.col, row: randomPoint.row };
    }

    if (cpuPlayer.validTurn === true) {
      const coordinate = getRandomPoints();
      humanPlayer.ownBoard.recieveAttack(coordinate);
      const cell = selectCell(coordinate, "player-board");
      (0,_render__WEBPACK_IMPORTED_MODULE_1__.render)(cell);
      switchTurn(cpuPlayer);
      switchTurn(humanPlayer);
      if (isGameOver()) console.log("game over, CPU won");
    }
  };

  return {
    humanPlayer,
    cpuPlayer,
    humanAttack,
    cpuAttack,
    isGameOver,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (session);


/***/ }),

/***/ "./src/components/ship.js":
/*!********************************!*\
  !*** ./src/components/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const shipFactory = (length, hitsTaken, name) => ({
  name,
  startPos: {},
  endPos: {},
  length,
  hitsTaken,
  showShip(boardClass) {
    if (this.startPos.row === this.endPos.row) {
      let unicode = this.startPos.col.charCodeAt(0);
      for (let i = length; i > 0; i--) {
        const cell = document.querySelector(
          `.${boardClass} > .${String.fromCharCode(unicode)}-${
            this.startPos.row
          }`
        );
        cell.classList.add("occupied");
        unicode += 1;
      }
    }
    if (this.startPos.col === this.endPos.col) {
      for (let i = length; i > 0; i--) {
        const cell = document.querySelector(
          `.${boardClass} > .${this.startPos.col}-${this.startPos.row}`
        );
        cell.classList.add("occupied");
        this.startPos.row += 1;
      }
    }
  },
  hit() {
    this.hitsTaken += 1;
  },
  isSunk() {
    if (this.hitsTaken === this.length) return true;
    return false;
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipFactory);


/***/ }),

/***/ "./src/assets/favicon.png":
/*!********************************!*\
  !*** ./src/assets/favicon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4a0406380f6e0348029.png";

/***/ }),

/***/ "./src/assets/fonts/BungeeSpice-Regular.ttf":
/*!**************************************************!*\
  !*** ./src/assets/fonts/BungeeSpice-Regular.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eddfbab9ae86f463b66c.ttf";

/***/ }),

/***/ "./src/assets/fonts/LakkiReddy-Regular.ttf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/LakkiReddy-Regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35fc6b0f14c32cd0ac19.ttf";

/***/ }),

/***/ "./src/assets/fonts/RubikVinyl-Regular.ttf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/RubikVinyl-Regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22b1fe5789e386a0db07.ttf";

/***/ }),

/***/ "./src/assets/github-icon.png":
/*!************************************!*\
  !*** ./src/assets/github-icon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de6012bd2aea9addfb5d.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"page": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/components/index.js");
/******/ 	__webpack_require__("./src/components/ship.js");
/******/ 	__webpack_require__("./src/components/session.js");
/******/ 	__webpack_require__("./src/components/player.js");
/******/ 	__webpack_require__("./src/components/gameBoard.js");
/******/ 	__webpack_require__("./src/components/dom.js");
/******/ 	__webpack_require__("./src/components/randomPlacement.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/render.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHAvLi9zcmMvY29tcG9uZW50cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBwLy4vc3JjL2NvbXBvbmVudHMvc3R5bGUuY3NzP2I1YzIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC8uL3NyYy9jb21wb25lbnRzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC8uL3NyYy9jb21wb25lbnRzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBwLy4vc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBwLy4vc3JjL2NvbXBvbmVudHMvcmFuZG9tUGxhY2VtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBwLy4vc3JjL2NvbXBvbmVudHMvcmVuZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBwLy4vc3JjL2NvbXBvbmVudHMvc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC8uL3NyYy9jb21wb25lbnRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9CdW5nZWVTcGljZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9SdWJpa1ZpbnlsLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL0xha2tpUmVkZHktUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IEJ1bmdlZVNwaWNlO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSdWJpa1ZpbnlsO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBMYWtraVJlZGR5O1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCBib3JkZXIgYm94IHNpemluZyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gICAqL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBVc2UgdGhlIGRlZmF1bHQgY3Vyc29yIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAgICovXFxuXFxuaHRtbCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSxcXG4gICAgXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIC0tYm9hcmQtc2lkZS1sZW5ndGg6IDQzMHB4O1xcblxcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZlZmU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sdW1uLWdhcDogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBjb2xvcjogI2Y1ZjVmNTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQyNTk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIHNwYW46bnRoLWNoaWxkKDMpID4gYSB7XFxuICBjb2xvcjogbWFnZW50YTtcXG59XFxuXFxuLmZvb3RlciBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ2FtZS10aXRsZSB7XFxuICBoZWlnaHQ6IDExMHB4O1xcbiAgd2lkdGg6IDYwdnc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICBmb250LWZhbWlseTogUnViaWtWaW55bDtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxldHRlci1zcGFjaW5nOiA2LjZweDtcXG59XFxuXFxuLnJlc3VsdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDExMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5yZXN1bHQgPiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIG1hcmdpbi1yaWdodDogNnB4O1xcbn1cXG5cXG4ucGxheWVyLWJhbm5lcixcXG4uY3B1LWJhbm5lciB7XFxuICBoZWlnaHQ6IDIxNXB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICBwYWRkaW5nOiAyOHB4IDA7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XFxuICB0ZXh0LW9yaWVudGF0aW9uOiB1cHJpZ2h0O1xcbiAgZm9udC1mYW1pbHk6IExha2tpUmVkZHk7XFxufVxcblxcbi52cyB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICB3aWR0aDogNjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGZvbnQtZmFtaWx5OiBCdW5nZWVTcGljZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLnBsYXllci1ib2FyZCxcXG4uY3B1LWJvYXJkIHtcXG4gIGhlaWdodDogdmFyKC0tYm9hcmQtc2lkZS1sZW5ndGgpO1xcbiAgd2lkdGg6IHZhcigtLWJvYXJkLXNpZGUtbGVuZ3RoKTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQgPiBkaXYsXFxuLmNwdS1ib2FyZCA+IGRpdiB7XFxuICBoZWlnaHQ6IGNhbGMoMTAlKTtcXG4gIHdpZHRoOiBjYWxjKDEwJSk7XFxuICBib3JkZXI6IDEuNnB4IHNvbGlkIHdoaXRlc21va2U7XFxufVxcblxcbi5jcHUtYm9hcmQgPiBkaXY6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY3B1LWJvYXJkID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjg5ODk7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQgPiBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiYWJlOGNjO1xcbn1cXG5cXG4uY3B1LWJvYXJkID4gZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMzYzM7XFxufVxcblxcbi5hdHRhY2tlZC1jZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hdHRhY2stbWFyayB7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm9jY3VwaWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNGEyYTJlZCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY3B1LXRvb2staGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ODk2ZDEgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUFtRDtFQUNuRCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsNENBQWtEO0VBQ2xELGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qiw0Q0FBa0Q7RUFDbEQsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7SUFFSTs7QUFFSjs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBOztJQUVJOztBQUVKO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFOzJCQUN5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCOztFQUUxQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5Qjs7RUFFekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7O0VBRVosYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGdDQUFnQztFQUNoQywrQkFBK0I7O0VBRS9CLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IEJ1bmdlZVNwaWNlO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9CdW5nZWVTcGljZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSdWJpa1ZpbnlsO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9SdWJpa1ZpbnlsLVJlZ3VsYXIudHRmXFxcIik7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IExha2tpUmVkZHk7XFxuICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL0xha2tpUmVkZHktUmVndWxhci50dGZcXFwiKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgYm9yZGVyIGJveCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICAgKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogMS4gVXNlIHRoZSBkZWZhdWx0IGN1cnNvciBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gICAqL1xcblxcbmh0bWwge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsXFxuICAgIFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAtLWJvYXJkLXNpZGUtbGVuZ3RoOiA0MzBweDtcXG5cXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWZlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgY29sb3I6ICNmNWY1ZjU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU0MjU5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA0NXB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciBzcGFuOm50aC1jaGlsZCgzKSA+IGEge1xcbiAgY29sb3I6IG1hZ2VudGE7XFxufVxcblxcbi5mb290ZXIgaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdhbWUtdGl0bGUge1xcbiAgaGVpZ2h0OiAxMTBweDtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IFJ1YmlrVmlueWw7XFxuICBmb250LXNpemU6IDZyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogNi42cHg7XFxufVxcblxcbi5yZXN1bHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ucmVzdWx0ID4gc3BhbjpmaXJzdC1jaGlsZCB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBtYXJnaW4tcmlnaHQ6IDZweDtcXG59XFxuXFxuLnBsYXllci1iYW5uZXIsXFxuLmNwdS1iYW5uZXIge1xcbiAgaGVpZ2h0OiAyMTVweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgcGFkZGluZzogMjhweCAwO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xcbiAgdGV4dC1vcmllbnRhdGlvbjogdXByaWdodDtcXG4gIGZvbnQtZmFtaWx5OiBMYWtraVJlZGR5O1xcbn1cXG5cXG4udnMge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBmb250LWZhbWlseTogQnVuZ2VlU3BpY2U7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQsXFxuLmNwdS1ib2FyZCB7XFxuICBoZWlnaHQ6IHZhcigtLWJvYXJkLXNpZGUtbGVuZ3RoKTtcXG4gIHdpZHRoOiB2YXIoLS1ib2FyZC1zaWRlLWxlbmd0aCk7XFxuXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkID4gZGl2LFxcbi5jcHUtYm9hcmQgPiBkaXYge1xcbiAgaGVpZ2h0OiBjYWxjKDEwJSk7XFxuICB3aWR0aDogY2FsYygxMCUpO1xcbiAgYm9yZGVyOiAxLjZweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4uY3B1LWJvYXJkID4gZGl2OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNwdS1ib2FyZCA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4OTg5O1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkID4gZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YmFiZThjYztcXG59XFxuXFxuLmNwdS1ib2FyZCA+IGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjM2MzO1xcbn1cXG5cXG4uYXR0YWNrZWQtY2VsbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXR0YWNrLW1hcmsge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5vY2N1cGllZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTRhMmEyZWQgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNwdS10b29rLWhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5NmQxICFpbXBvcnRhbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcGxheVNlc3Npb24gZnJvbSBcIi4vaW5kZXhcIjtcblxuY29uc3QgY3B1Qm9hcmRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3B1LWJvYXJkID4gZGl2XCIpO1xuXG5mdW5jdGlvbiBwYXJzZUNvb3JkaW5hdGVzKGNlbGwpIHtcbiAgY29uc3QgY2VsbENsYXNzZXMgPSBjZWxsLmNsYXNzTGlzdDtcbiAgY29uc3QgY29sID0gY2VsbENsYXNzZXNbMF0uc3BsaXQoXCItXCIpWzBdO1xuICBjb25zdCByb3cgPSBOdW1iZXIoY2VsbENsYXNzZXNbMF0uc3BsaXQoXCItXCIpWzFdKTtcbiAgcmV0dXJuIHsgY29sLCByb3cgfTtcbn1cblxuY3B1Qm9hcmRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwb2ludCA9IHsgLi4ucGFyc2VDb29yZGluYXRlcyhjZWxsKSB9O1xuICAgIHBsYXlTZXNzaW9uLmh1bWFuQXR0YWNrKHBvaW50KTtcbiAgfSk7XG59KTtcbiIsImNvbnN0IGdhbWVCb2FyZEZhY3RvcnkgPSAoKSA9PiAoe1xuICBhdHRhY2tBdHRlbXB0czogW10sXG4gIG1pc3NIaXRzOiBbXSxcbiAgZmxlZXQ6IFtdLFxuICBhbGxTaGlwU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5mbGVldC5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSA9PT0gdHJ1ZSk7XG4gIH0sXG4gIGdldENsYXNzTmFtZShwb2ludCkge1xuICAgIHJldHVybiBgJHtwb2ludC5jb2x9LSR7cG9pbnQucm93fWA7XG4gIH0sXG4gIHNob3dTaGlwcyhib2FyZENsYXNzKSB7XG4gICAgdGhpcy5mbGVldC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLnNob3dTaGlwKGJvYXJkQ2xhc3MpO1xuICAgIH0pO1xuICB9LFxuICBnZXRPY2N1cGllZEdyaWRzKHNoaXApIHtcbiAgICBjb25zdCBhbGxQb2ludHMgPSBbXTtcbiAgICBjb25zdCBjb2xPbmUgPSBzaGlwLnN0YXJ0UG9zLmNvbDtcbiAgICBjb25zdCBjb2xUd28gPSBzaGlwLmVuZFBvcy5jb2w7XG4gICAgY29uc3Qgcm93T25lID0gc2hpcC5zdGFydFBvcy5yb3c7XG4gICAgY29uc3Qgcm93VHdvID0gc2hpcC5lbmRQb3Mucm93O1xuICAgIGlmIChjb2xPbmUgPT09IGNvbFR3bykge1xuICAgICAgZm9yIChsZXQgaSA9IHJvd09uZTsgaSA8PSByb3dUd287IGkrKykge1xuICAgICAgICBhbGxQb2ludHMucHVzaCh7IGNvbDogY29sT25lLCByb3c6IGkgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChyb3dPbmUgPT09IHJvd1R3bykge1xuICAgICAgZm9yIChsZXQgaSA9IGNvbE9uZS5jaGFyQ29kZUF0KDApOyBpIDw9IGNvbFR3by5jaGFyQ29kZUF0KDApOyBpKyspIHtcbiAgICAgICAgYWxsUG9pbnRzLnB1c2goeyBjb2w6IFN0cmluZy5mcm9tQ2hhckNvZGUoaSksIHJvdzogcm93T25lIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWxsUG9pbnRzO1xuICB9LFxuICBldmFsdWF0ZUF0dGFjayhhdHRhY2tlZEdyaWQpIHtcbiAgICBsZXQgc2lnbmFsID0gZmFsc2U7XG4gICAgdGhpcy5mbGVldC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBjb25zdCBhbGxQb2ludHMgPSB0aGlzLmdldE9jY3VwaWVkR3JpZHMoc2hpcCk7XG4gICAgICBhbGxQb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICAgICAgaWYgKGF0dGFja2VkR3JpZC5jb2wgPT09IHBvaW50LmNvbCAmJiBhdHRhY2tlZEdyaWQucm93ID09PSBwb2ludC5yb3cpXG4gICAgICAgICAgc2lnbmFsID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBzaWduYWw7XG4gIH0sXG4gIGlkZW50aWZ5U2hpcChhdHRhY2tlZEdyaWQpIHtcbiAgICBsZXQgYXR0YWNrZWRTaGlwID0gbnVsbDtcbiAgICB0aGlzLmZsZWV0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IGFsbFBvaW50cyA9IHRoaXMuZ2V0T2NjdXBpZWRHcmlkcyhzaGlwKTtcbiAgICAgIGFsbFBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgICBpZiAoYXR0YWNrZWRHcmlkLmNvbCA9PT0gcG9pbnQuY29sICYmIGF0dGFja2VkR3JpZC5yb3cgPT09IHBvaW50LnJvdylcbiAgICAgICAgICBhdHRhY2tlZFNoaXAgPSB7IC4uLnNoaXAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBhdHRhY2tlZFNoaXA7XG4gIH0sXG4gIHNlbmRIaXRGdW5jdGlvbihzaGlwSGl0KSB7XG4gICAgY29uc3Qgc2hpcE5hbWUgPSBzaGlwSGl0Lm5hbWU7XG4gICAgdGhpcy5mbGVldC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5uYW1lID09PSBzaGlwTmFtZSkgc2hpcC5oaXQoKTtcbiAgICB9KTtcbiAgfSxcbiAgcGxhY2VTaGlwKHN0YXJ0UG9zLCBlbmRQb3MsIHNoaXApIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBzaGlwLnN0YXJ0UG9zLmNvbCA9IHN0YXJ0UG9zLmNvbDtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBzaGlwLnN0YXJ0UG9zLnJvdyA9IHN0YXJ0UG9zLnJvdztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBzaGlwLmVuZFBvcy5jb2wgPSBlbmRQb3MuY29sO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHNoaXAuZW5kUG9zLnJvdyA9IGVuZFBvcy5yb3c7XG4gICAgdGhpcy5mbGVldC5wdXNoKHNoaXApO1xuICB9LFxuICByZWNpZXZlQXR0YWNrKHBvaW50KSB7XG4gICAgdGhpcy5hdHRhY2tBdHRlbXB0cy5wdXNoKHBvaW50KTtcbiAgICBpZiAoIXRoaXMuZXZhbHVhdGVBdHRhY2socG9pbnQpKSB7XG4gICAgICB0aGlzLm1pc3NIaXRzLnB1c2gocG9pbnQpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNBdHRhY2tlZDogZmFsc2UsXG4gICAgICAgIHNoaXA6IG51bGwsXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBzaGlwSGl0ID0gdGhpcy5pZGVudGlmeVNoaXAocG9pbnQpO1xuICAgIHRoaXMuc2VuZEhpdEZ1bmN0aW9uKHNoaXBIaXQpO1xuICAgIHJldHVybiB7XG4gICAgICBpc0F0dGFja2VkOiB0cnVlLFxuICAgICAgc2hpcDogc2hpcEhpdCxcbiAgICB9O1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVCb2FyZEZhY3Rvcnk7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGZhdmljb24gZnJvbSBcIi4uL2Fzc2V0cy9mYXZpY29uLnBuZ1wiO1xuaW1wb3J0IGdpdGh1Ykljb24gZnJvbSBcIi4uL2Fzc2V0cy9naXRodWItaWNvbi5wbmdcIjtcblxuaW1wb3J0IHNlc3Npb24gZnJvbSBcIi4vc2Vzc2lvblwiO1xuaW1wb3J0IHsgaHVtYW5QbGF5ZXJGYWN0b3J5LCBjcHVQbGF5ZXJGYWN0b3J5IH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKTtcbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxubGluay5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzaG9ydGN1dCBpY29uXCIpO1xubGluay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaW1hZ2UveC1pY29uXCIpO1xubGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGZhdmljb24pO1xuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcblxuY29uc3QgaW1hZ2VUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3RlciA+IGEgaW1nXCIpO1xuaW1hZ2VUYWcuc3JjID0gZ2l0aHViSWNvbjtcblxuY29uc3QgdXNlciA9IGh1bWFuUGxheWVyRmFjdG9yeSgpO1xuY29uc3QgY3B1ID0gY3B1UGxheWVyRmFjdG9yeSgpO1xuXG4vLyBzdGFydCBnYW1lIGltbWVkaWF0ZWx5XG5jb25zdCBwbGF5U2Vzc2lvbiA9IHNlc3Npb24odXNlciwgY3B1KTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheVNlc3Npb247XG4iLCJpbXBvcnQgZ2FtZUJvYXJkRmFjdG9yeSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcblxuY29uc3QgaHVtYW5QbGF5ZXJGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgY29uc3Qgb3duQm9hcmQgPSBnYW1lQm9hcmRGYWN0b3J5KCk7XG4gIGNvbnN0IHZhbGlkVHVybiA9IHRydWU7XG4gIHJldHVybiB7IG5hbWUsIG93bkJvYXJkLCB2YWxpZFR1cm4gfTtcbn07XG5cbmNvbnN0IGNwdVBsYXllckZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IG93bkJvYXJkID0gZ2FtZUJvYXJkRmFjdG9yeSgpO1xuICBjb25zdCB2YWxpZFR1cm4gPSBmYWxzZTtcbiAgcmV0dXJuIHsgbmFtZTogXCJDUFVcIiwgb3duQm9hcmQsIHZhbGlkVHVybiB9O1xufTtcblxuZXhwb3J0IHsgaHVtYW5QbGF5ZXJGYWN0b3J5LCBjcHVQbGF5ZXJGYWN0b3J5IH07XG4iLCJpbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSBcIi4vc2hpcFwiO1xuXG5jb25zdCB1c2VyQUNhcnJpZXIgPSBzaGlwRmFjdG9yeSg1LCAwLCBcIkFpcmNyYWZ0IENhcnJpZXJcIik7XG5jb25zdCB1c2VyQ3J1aXNlciA9IHNoaXBGYWN0b3J5KDQsIDAsIFwiQ3J1aXNlclwiKTtcbmNvbnN0IHVzZXJTdWJtYXJpbmUgPSBzaGlwRmFjdG9yeSgzLCAwLCBcIlN1Ym1hcmluZVwiKTtcbmNvbnN0IHVzZXJEZXN0cm95ZXIgPSBzaGlwRmFjdG9yeSgzLCAwLCBcIkRlc3Ryb3llclwiKTtcbmNvbnN0IHVzZXJQYXRyb2wgPSBzaGlwRmFjdG9yeSgyLCAwLCBcIlBhdHJvbFwiKTtcblxuY29uc3QgY3B1QUNhcnJpZXIgPSBzaGlwRmFjdG9yeSg1LCAwLCBcIkFpcmNyYWZ0IENhcnJpZXJcIik7XG5jb25zdCBjcHVDcnVpc2VyID0gc2hpcEZhY3RvcnkoNCwgMCwgXCJDcnVpc2VyXCIpO1xuY29uc3QgY3B1U3VibWFyaW5lID0gc2hpcEZhY3RvcnkoMywgMCwgXCJTdWJtYXJpbmVcIik7XG5jb25zdCBjcHVEZXN0cm95ZXIgPSBzaGlwRmFjdG9yeSgzLCAwLCBcIkRlc3Ryb3llclwiKTtcbmNvbnN0IGNwdVBhdHJvbCA9IHNoaXBGYWN0b3J5KDIsIDAsIFwiUGF0cm9sXCIpO1xuXG5jb25zdCB1c2VyUGxhY2VtZW50ID0gW1xuICBbXG4gICAgW3sgY29sOiBcIkFcIiwgcm93OiA5IH0sIHsgY29sOiBcIkVcIiwgcm93OiA5IH0sIHVzZXJBQ2Fycmllcl0sXG4gICAgW3sgY29sOiBcIkJcIiwgcm93OiAzIH0sIHsgY29sOiBcIkJcIiwgcm93OiA2IH0sIHVzZXJDcnVpc2VyXSxcbiAgICBbeyBjb2w6IFwiRVwiLCByb3c6IDUgfSwgeyBjb2w6IFwiRVwiLCByb3c6IDcgfSwgdXNlclN1Ym1hcmluZV0sXG4gICAgW3sgY29sOiBcIkdcIiwgcm93OiAyIH0sIHsgY29sOiBcIklcIiwgcm93OiAyIH0sIHVzZXJEZXN0cm95ZXJdLFxuICAgIFt7IGNvbDogXCJIXCIsIHJvdzogMTAgfSwgeyBjb2w6IFwiSVwiLCByb3c6IDEwIH0sIHVzZXJQYXRyb2xdLFxuICBdLFxuICBbXG4gICAgW3sgY29sOiBcIkNcIiwgcm93OiA0IH0sIHsgY29sOiBcIkdcIiwgcm93OiA0IH0sIHVzZXJBQ2Fycmllcl0sXG4gICAgW3sgY29sOiBcIkJcIiwgcm93OiAxIH0sIHsgY29sOiBcIkVcIiwgcm93OiAxIH0sIHVzZXJDcnVpc2VyXSxcbiAgICBbeyBjb2w6IFwiQlwiLCByb3c6IDggfSwgeyBjb2w6IFwiQlwiLCByb3c6IDEwIH0sIHVzZXJTdWJtYXJpbmVdLFxuICAgIFt7IGNvbDogXCJHXCIsIHJvdzogMiB9LCB7IGNvbDogXCJJXCIsIHJvdzogMiB9LCB1c2VyRGVzdHJveWVyXSxcbiAgICBbeyBjb2w6IFwiSlwiLCByb3c6IDcgfSwgeyBjb2w6IFwiSlwiLCByb3c6IDggfSwgdXNlclBhdHJvbF0sXG4gIF0sXG4gIFtcbiAgICBbeyBjb2w6IFwiRFwiLCByb3c6IDEgfSwgeyBjb2w6IFwiSFwiLCByb3c6IDEgfSwgdXNlckFDYXJyaWVyXSxcbiAgICBbeyBjb2w6IFwiRFwiLCByb3c6IDQgfSwgeyBjb2w6IFwiRFwiLCByb3c6IDcgfSwgdXNlckNydWlzZXJdLFxuICAgIFt7IGNvbDogXCJCXCIsIHJvdzogOCB9LCB7IGNvbDogXCJCXCIsIHJvdzogMTAgfSwgdXNlclN1Ym1hcmluZV0sXG4gICAgW3sgY29sOiBcIkhcIiwgcm93OiA2IH0sIHsgY29sOiBcIkpcIiwgcm93OiA2IH0sIHVzZXJEZXN0cm95ZXJdLFxuICAgIFt7IGNvbDogXCJBXCIsIHJvdzogMiB9LCB7IGNvbDogXCJBXCIsIHJvdzogMyB9LCB1c2VyUGF0cm9sXSxcbiAgXSxcbiAgW1xuICAgIFt7IGNvbDogXCJEXCIsIHJvdzogMyB9LCB7IGNvbDogXCJEXCIsIHJvdzogNyB9LCB1c2VyQUNhcnJpZXJdLFxuICAgIFt7IGNvbDogXCJGXCIsIHJvdzogMTAgfSwgeyBjb2w6IFwiSVwiLCByb3c6IDEwIH0sIHVzZXJDcnVpc2VyXSxcbiAgICBbeyBjb2w6IFwiQVwiLCByb3c6IDggfSwgeyBjb2w6IFwiQVwiLCByb3c6IDEwIH0sIHVzZXJTdWJtYXJpbmVdLFxuICAgIFt7IGNvbDogXCJIXCIsIHJvdzogMSB9LCB7IGNvbDogXCJKXCIsIHJvdzogMSB9LCB1c2VyRGVzdHJveWVyXSxcbiAgICBbeyBjb2w6IFwiRlwiLCByb3c6IDYgfSwgeyBjb2w6IFwiR1wiLCByb3c6IDYgfSwgdXNlclBhdHJvbF0sXG4gIF0sXG5dO1xuXG5jb25zdCBjcHVQbGFjZW1lbnQgPSBbXG4gIFtcbiAgICBbeyBjb2w6IFwiSlwiLCByb3c6IDYgfSwgeyBjb2w6IFwiSlwiLCByb3c6IDEwIH0sIGNwdUFDYXJyaWVyXSxcbiAgICBbeyBjb2w6IFwiQlwiLCByb3c6IDIgfSwgeyBjb2w6IFwiQlwiLCByb3c6IDUgfSwgY3B1Q3J1aXNlcl0sXG4gICAgW3sgY29sOiBcIkVcIiwgcm93OiAxIH0sIHsgY29sOiBcIkdcIiwgcm93OiAxIH0sIGNwdVN1Ym1hcmluZV0sXG4gICAgW3sgY29sOiBcIkVcIiwgcm93OiA4IH0sIHsgY29sOiBcIkVcIiwgcm93OiAxMCB9LCBjcHVEZXN0cm95ZXJdLFxuICAgIFt7IGNvbDogXCJGXCIsIHJvdzogNCB9LCB7IGNvbDogXCJHXCIsIHJvdzogNCB9LCBjcHVQYXRyb2xdLFxuICBdLFxuICBbXG4gICAgW3sgY29sOiBcIkNcIiwgcm93OiAxMCB9LCB7IGNvbDogXCJHXCIsIHJvdzogMTAgfSwgY3B1QUNhcnJpZXJdLFxuICAgIFt7IGNvbDogXCJBXCIsIHJvdzogMSB9LCB7IGNvbDogXCJEXCIsIHJvdzogMSB9LCBjcHVDcnVpc2VyXSxcbiAgICBbeyBjb2w6IFwiSFwiLCByb3c6IDIgfSwgeyBjb2w6IFwiSlwiLCByb3c6IDIgfSwgY3B1U3VibWFyaW5lXSxcbiAgICBbeyBjb2w6IFwiRlwiLCByb3c6IDMgfSwgeyBjb2w6IFwiRlwiLCByb3c6IDUgfSwgY3B1RGVzdHJveWVyXSxcbiAgICBbeyBjb2w6IFwiQVwiLCByb3c6IDcgfSwgeyBjb2w6IFwiQVwiLCByb3c6IDggfSwgY3B1UGF0cm9sXSxcbiAgXSxcbiAgW1xuICAgIFt7IGNvbDogXCJCXCIsIHJvdzogMyB9LCB7IGNvbDogXCJGXCIsIHJvdzogMyB9LCBjcHVBQ2Fycmllcl0sXG4gICAgW3sgY29sOiBcIkRcIiwgcm93OiA2IH0sIHsgY29sOiBcIkRcIiwgcm93OiA5IH0sIGNwdUNydWlzZXJdLFxuICAgIFt7IGNvbDogXCJIXCIsIHJvdzogNSB9LCB7IGNvbDogXCJKXCIsIHJvdzogNSB9LCBjcHVTdWJtYXJpbmVdLFxuICAgIFt7IGNvbDogXCJBXCIsIHJvdzogNiB9LCB7IGNvbDogXCJBXCIsIHJvdzogOCB9LCBjcHVEZXN0cm95ZXJdLFxuICAgIFt7IGNvbDogXCJJXCIsIHJvdzogMSB9LCB7IGNvbDogXCJJXCIsIHJvdzogMiB9LCBjcHVQYXRyb2xdLFxuICBdLFxuICBbXG4gICAgW3sgY29sOiBcIkJcIiwgcm93OiAzIH0sIHsgY29sOiBcIkJcIiwgcm93OiA3IH0sIGNwdUFDYXJyaWVyXSxcbiAgICBbeyBjb2w6IFwiRlwiLCByb3c6IDMgfSwgeyBjb2w6IFwiRlwiLCByb3c6IDYgfSwgY3B1Q3J1aXNlcl0sXG4gICAgW3sgY29sOiBcIkhcIiwgcm93OiA5IH0sIHsgY29sOiBcIkpcIiwgcm93OiA5IH0sIGNwdVN1Ym1hcmluZV0sXG4gICAgW3sgY29sOiBcIkNcIiwgcm93OiAxMCB9LCB7IGNvbDogXCJFXCIsIHJvdzogMTAgfSwgY3B1RGVzdHJveWVyXSxcbiAgICBbeyBjb2w6IFwiSVwiLCByb3c6IDEgfSwgeyBjb2w6IFwiSVwiLCByb3c6IDIgfSwgY3B1UGF0cm9sXSxcbiAgXSxcbl07XG5cbmV4cG9ydCB7IHVzZXJQbGFjZW1lbnQsIGNwdVBsYWNlbWVudCB9O1xuIiwiY29uc3QgcmVzdWx0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIik7XG5cbmZ1bmN0aW9uIGRpc3BsYXlXaW5uZXIoc3RyMSwgc3RyMikge1xuICBjb25zdCBzcGFuT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IHNwYW5Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbk9uZS50ZXh0Q29udGVudCA9IHN0cjE7XG4gIHNwYW5Ud28udGV4dENvbnRlbnQgPSBzdHIyO1xuICByZXN1bHREaXYuYXBwZW5kKHNwYW5PbmUsIHNwYW5Ud28pO1xufVxuXG5mdW5jdGlvbiByZW5kZXIoY2VsbCkge1xuICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2tlZC1jZWxsXCIpO1xuICBjb25zdCBhdHRhY2tNYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYXR0YWNrTWFyay5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrLW1hcmtcIik7XG4gIGNlbGwuYXBwZW5kQ2hpbGQoYXR0YWNrTWFyayk7XG4gIGNlbGwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJwb2ludGVyLWV2ZW50czpub25lXCIpO1xufVxuXG5leHBvcnQgeyByZW5kZXIsIGRpc3BsYXlXaW5uZXIgfTtcbiIsImltcG9ydCB7IHVzZXJQbGFjZW1lbnQsIGNwdVBsYWNlbWVudCB9IGZyb20gXCIuL3JhbmRvbVBsYWNlbWVudFwiO1xuaW1wb3J0IHsgcmVuZGVyLCBkaXNwbGF5V2lubmVyIH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmZ1bmN0aW9uIHN3aXRjaFR1cm4oYXR0YWNrZXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGF0dGFja2VyLnZhbGlkVHVybiA9ICFhdHRhY2tlci52YWxpZFR1cm47XG59XG5cbmNvbnN0IHNlc3Npb24gPSAodXNlciwgY3B1KSA9PiB7XG4gIGNvbnN0IGh1bWFuUGxheWVyID0gdXNlcjtcbiAgY29uc3QgY3B1UGxheWVyID0gY3B1O1xuXG4gIGNvbnN0IHVzZXJJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuICBjb25zdCBjcHVJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuXG4gIC8vIHVzZXIgc2hpcCBwbGFjZW1lbnRcbiAgaHVtYW5QbGF5ZXIub3duQm9hcmQucGxhY2VTaGlwKFxuICAgIHVzZXJQbGFjZW1lbnRbdXNlckluZGV4XVswXVswXSxcbiAgICB1c2VyUGxhY2VtZW50W3VzZXJJbmRleF1bMF1bMV0sXG4gICAgdXNlclBsYWNlbWVudFt1c2VySW5kZXhdWzBdWzJdXG4gICk7XG5cbiAgaHVtYW5QbGF5ZXIub3duQm9hcmQucGxhY2VTaGlwKFxuICAgIHVzZXJQbGFjZW1lbnRbdXNlckluZGV4XVsxXVswXSxcbiAgICB1c2VyUGxhY2VtZW50W3VzZXJJbmRleF1bMV1bMV0sXG4gICAgdXNlclBsYWNlbWVudFt1c2VySW5kZXhdWzFdWzJdXG4gICk7XG4gIGh1bWFuUGxheWVyLm93bkJvYXJkLnBsYWNlU2hpcChcbiAgICB1c2VyUGxhY2VtZW50W3VzZXJJbmRleF1bMl1bMF0sXG4gICAgdXNlclBsYWNlbWVudFt1c2VySW5kZXhdWzJdWzFdLFxuICAgIHVzZXJQbGFjZW1lbnRbdXNlckluZGV4XVsyXVsyXVxuICApO1xuICBodW1hblBsYXllci5vd25Cb2FyZC5wbGFjZVNoaXAoXG4gICAgdXNlclBsYWNlbWVudFt1c2VySW5kZXhdWzNdWzBdLFxuICAgIHVzZXJQbGFjZW1lbnRbdXNlckluZGV4XVszXVsxXSxcbiAgICB1c2VyUGxhY2VtZW50W3VzZXJJbmRleF1bM11bMl1cbiAgKTtcbiAgaHVtYW5QbGF5ZXIub3duQm9hcmQucGxhY2VTaGlwKFxuICAgIHVzZXJQbGFjZW1lbnRbdXNlckluZGV4XVs0XVswXSxcbiAgICB1c2VyUGxhY2VtZW50W3VzZXJJbmRleF1bNF1bMV0sXG4gICAgdXNlclBsYWNlbWVudFt1c2VySW5kZXhdWzRdWzJdXG4gICk7XG4gIC8vIGNwdSBzaGlwIHBsYWNlbWVudFxuICBjcHVQbGF5ZXIub3duQm9hcmQucGxhY2VTaGlwKFxuICAgIGNwdVBsYWNlbWVudFtjcHVJbmRleF1bMF1bMF0sXG4gICAgY3B1UGxhY2VtZW50W2NwdUluZGV4XVswXVsxXSxcbiAgICBjcHVQbGFjZW1lbnRbY3B1SW5kZXhdWzBdWzJdXG4gICk7XG4gIGNwdVBsYXllci5vd25Cb2FyZC5wbGFjZVNoaXAoXG4gICAgY3B1UGxhY2VtZW50W2NwdUluZGV4XVsxXVswXSxcbiAgICBjcHVQbGFjZW1lbnRbY3B1SW5kZXhdWzFdWzFdLFxuICAgIGNwdVBsYWNlbWVudFtjcHVJbmRleF1bMV1bMl1cbiAgKTtcbiAgY3B1UGxheWVyLm93bkJvYXJkLnBsYWNlU2hpcChcbiAgICBjcHVQbGFjZW1lbnRbY3B1SW5kZXhdWzJdWzBdLFxuICAgIGNwdVBsYWNlbWVudFtjcHVJbmRleF1bMl1bMV0sXG4gICAgY3B1UGxhY2VtZW50W2NwdUluZGV4XVsyXVsyXVxuICApO1xuICBjcHVQbGF5ZXIub3duQm9hcmQucGxhY2VTaGlwKFxuICAgIGNwdVBsYWNlbWVudFtjcHVJbmRleF1bM11bMF0sXG4gICAgY3B1UGxhY2VtZW50W2NwdUluZGV4XVszXVsxXSxcbiAgICBjcHVQbGFjZW1lbnRbY3B1SW5kZXhdWzNdWzJdXG4gICk7XG4gIGNwdVBsYXllci5vd25Cb2FyZC5wbGFjZVNoaXAoXG4gICAgY3B1UGxhY2VtZW50W2NwdUluZGV4XVs0XVswXSxcbiAgICBjcHVQbGFjZW1lbnRbY3B1SW5kZXhdWzRdWzFdLFxuICAgIGNwdVBsYWNlbWVudFtjcHVJbmRleF1bNF1bMl1cbiAgKTtcblxuICBodW1hblBsYXllci5vd25Cb2FyZC5zaG93U2hpcHMoXCJwbGF5ZXItYm9hcmRcIik7XG5cbiAgY29uc3QgaXNHYW1lT3ZlciA9IGZ1bmN0aW9uIGlzR2FtZU92ZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGh1bWFuUGxheWVyLm93bkJvYXJkLmFsbFNoaXBTdW5rKCkgfHwgY3B1UGxheWVyLm93bkJvYXJkLmFsbFNoaXBTdW5rKClcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdENlbGwgPSBmdW5jdGlvbiBzZWxlY3RDZWxsKGNvb3JkaW5hdGUsIGJvYXJkQ2xhc3MpIHtcbiAgICBjb25zdCBjZWxsQ2xhc3MgPSBgLiR7Ym9hcmRDbGFzc30gPiAuJHtjb29yZGluYXRlLmNvbH0tJHtjb29yZGluYXRlLnJvd31gO1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNlbGxDbGFzcyk7XG4gICAgcmV0dXJuIGNlbGw7XG4gIH07XG5cbiAgY29uc3QgaHVtYW5BdHRhY2sgPSBmdW5jdGlvbiBodW1hbkF0dGFjayhwb2ludCkge1xuICAgIGlmIChodW1hblBsYXllci52YWxpZFR1cm4gPT09IHRydWUpIHtcbiAgICAgIGNwdVBsYXllci5vd25Cb2FyZC5yZWNpZXZlQXR0YWNrKHBvaW50KTtcbiAgICAgIGNvbnN0IGNlbGwgPSBzZWxlY3RDZWxsKHBvaW50LCBcImNwdS1ib2FyZFwiKTtcbiAgICAgIHJlbmRlcihjZWxsKTtcbiAgICAgIGlmIChcbiAgICAgICAgIUpTT04uc3RyaW5naWZ5KGNwdVBsYXllci5vd25Cb2FyZC5taXNzSGl0cykuaW5jbHVkZXMoXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkocG9pbnQpXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY3B1LXRvb2staGl0XCIpO1xuICAgICAgc3dpdGNoVHVybihodW1hblBsYXllcik7XG4gICAgICBzd2l0Y2hUdXJuKGNwdVBsYXllcik7XG4gICAgfVxuICAgIGlmICghaXNHYW1lT3ZlcigpKSBjcHVBdHRhY2soKTtcbiAgICBlbHNlIGRpc3BsYXlXaW5uZXIoXCJDb25ncmF0dWxhdGlvbnMhXCIsIFwiWW91IHdvblwiKTtcbiAgfTtcblxuICBjb25zdCBjcHVBdHRhY2sgPSBmdW5jdGlvbiBjcHVBdHRhY2soKSB7XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21Qb2ludHMoKSB7XG4gICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgY29uc3QgY29sID0gU3RyaW5nLmZyb21DaGFyQ29kZShcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDc0IC0gNjUgKyAxKSkgKyA2NVxuICAgICAgKTtcbiAgICAgIHJldHVybiB7IGNvbCwgcm93IH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVbmlxdWUocG9pbnQpIHtcbiAgICAgIGNvbnN0IGFsbEF0dGFja2VkUG9pbnRzID0gWy4uLmh1bWFuUGxheWVyLm93bkJvYXJkLmF0dGFja0F0dGVtcHRzXTtcbiAgICAgIGNvbnN0IGpzb25BcnIgPSBhbGxBdHRhY2tlZFBvaW50cy5tYXAoSlNPTi5zdHJpbmdpZnkpO1xuICAgICAgcmV0dXJuIGpzb25BcnIuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkocG9pbnQpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSYW5kb21Qb2ludHMoKSB7XG4gICAgICBsZXQgcmFuZG9tUG9pbnQgPSB7IC4uLmdlbmVyYXRlUmFuZG9tUG9pbnRzKCkgfTtcbiAgICAgIHdoaWxlIChjaGVja1VuaXF1ZShyYW5kb21Qb2ludCkpIHtcbiAgICAgICAgcmFuZG9tUG9pbnQgPSB7IC4uLmdlbmVyYXRlUmFuZG9tUG9pbnRzKCkgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGNvbDogcmFuZG9tUG9pbnQuY29sLCByb3c6IHJhbmRvbVBvaW50LnJvdyB9O1xuICAgIH1cblxuICAgIGlmIChjcHVQbGF5ZXIudmFsaWRUdXJuID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBjb29yZGluYXRlID0gZ2V0UmFuZG9tUG9pbnRzKCk7XG4gICAgICBodW1hblBsYXllci5vd25Cb2FyZC5yZWNpZXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xuICAgICAgY29uc3QgY2VsbCA9IHNlbGVjdENlbGwoY29vcmRpbmF0ZSwgXCJwbGF5ZXItYm9hcmRcIik7XG4gICAgICByZW5kZXIoY2VsbCk7XG4gICAgICBzd2l0Y2hUdXJuKGNwdVBsYXllcik7XG4gICAgICBzd2l0Y2hUdXJuKGh1bWFuUGxheWVyKTtcbiAgICAgIGlmIChpc0dhbWVPdmVyKCkpIGNvbnNvbGUubG9nKFwiZ2FtZSBvdmVyLCBDUFUgd29uXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGh1bWFuUGxheWVyLFxuICAgIGNwdVBsYXllcixcbiAgICBodW1hbkF0dGFjayxcbiAgICBjcHVBdHRhY2ssXG4gICAgaXNHYW1lT3ZlcixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlc3Npb247XG4iLCJjb25zdCBzaGlwRmFjdG9yeSA9IChsZW5ndGgsIGhpdHNUYWtlbiwgbmFtZSkgPT4gKHtcbiAgbmFtZSxcbiAgc3RhcnRQb3M6IHt9LFxuICBlbmRQb3M6IHt9LFxuICBsZW5ndGgsXG4gIGhpdHNUYWtlbixcbiAgc2hvd1NoaXAoYm9hcmRDbGFzcykge1xuICAgIGlmICh0aGlzLnN0YXJ0UG9zLnJvdyA9PT0gdGhpcy5lbmRQb3Mucm93KSB7XG4gICAgICBsZXQgdW5pY29kZSA9IHRoaXMuc3RhcnRQb3MuY29sLmNoYXJDb2RlQXQoMCk7XG4gICAgICBmb3IgKGxldCBpID0gbGVuZ3RoOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuJHtib2FyZENsYXNzfSA+IC4ke1N0cmluZy5mcm9tQ2hhckNvZGUodW5pY29kZSl9LSR7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0UG9zLnJvd1xuICAgICAgICAgIH1gXG4gICAgICAgICk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkXCIpO1xuICAgICAgICB1bmljb2RlICs9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXJ0UG9zLmNvbCA9PT0gdGhpcy5lbmRQb3MuY29sKSB7XG4gICAgICBmb3IgKGxldCBpID0gbGVuZ3RoOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuJHtib2FyZENsYXNzfSA+IC4ke3RoaXMuc3RhcnRQb3MuY29sfS0ke3RoaXMuc3RhcnRQb3Mucm93fWBcbiAgICAgICAgKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib2NjdXBpZWRcIik7XG4gICAgICAgIHRoaXMuc3RhcnRQb3Mucm93ICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzVGFrZW4gKz0gMTtcbiAgfSxcbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdHNUYWtlbiA9PT0gdGhpcy5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzaGlwRmFjdG9yeTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicGFnZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY29tcG9uZW50cy9pbmRleC5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jb21wb25lbnRzL3NoaXAuanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY29tcG9uZW50cy9zZXNzaW9uLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvbXBvbmVudHMvZ2FtZUJvYXJkLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvbXBvbmVudHMvZG9tLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvbXBvbmVudHMvcmFuZG9tUGxhY2VtZW50LmpzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY29tcG9uZW50cy9yZW5kZXIuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=