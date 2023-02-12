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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n/**\n   * Add border box sizing in all browsers (opinionated).\n   */\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\n   * 1. Use the default cursor in all browsers (opinionated).\n   */\n\nhtml {\n  cursor: default;\n}\n\nbody {\n  background-color: black;\n}\n\n.content {\n  --board-side-length: 430px;\n\n  height: 100vh;\n  width: 100vw;\n  background-color: blue;\n\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.player-board,\n.cpu-board {\n  height: var(--board-side-length);\n  width: var(--board-side-length);\n\n  border: 2px solid red;\n  border-radius: 5px;\n\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.player-board > div,\n.cpu-board > div {\n  height: calc(10%);\n  width: calc(10%);\n  border: 1px solid whitesmoke;\n}\n\n.attacked-cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.attack-mark {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background-color: red;\n}\n\n.occupied {\n  background-color: black;\n}\n\n.cpu-took-hit {\n  background-color: springgreen;\n}\n", "",{"version":3,"sources":["webpack://./src/components/style.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;;IAEI;;AAEJ;;;EAGE,sBAAsB;AACxB;;AAEA;;IAEI;;AAEJ;EACE,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;;EAE1B,aAAa;EACb,YAAY;EACZ,sBAAsB;;EAEtB,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;;EAEE,gCAAgC;EAChC,+BAA+B;;EAE/B,qBAAqB;EACrB,kBAAkB;;EAElB,aAAa;EACb,eAAe;AACjB;;AAEA;;EAEE,iBAAiB;EACjB,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;AAC/B","sourcesContent":["/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n/**\n   * Add border box sizing in all browsers (opinionated).\n   */\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\n   * 1. Use the default cursor in all browsers (opinionated).\n   */\n\nhtml {\n  cursor: default;\n}\n\nbody {\n  background-color: black;\n}\n\n.content {\n  --board-side-length: 430px;\n\n  height: 100vh;\n  width: 100vw;\n  background-color: blue;\n\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.player-board,\n.cpu-board {\n  height: var(--board-side-length);\n  width: var(--board-side-length);\n\n  border: 2px solid red;\n  border-radius: 5px;\n\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.player-board > div,\n.cpu-board > div {\n  height: calc(10%);\n  width: calc(10%);\n  border: 1px solid whitesmoke;\n}\n\n.attacked-cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.attack-mark {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background-color: red;\n}\n\n.occupied {\n  background-color: black;\n}\n\n.cpu-took-hit {\n  background-color: springgreen;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session */ "./src/components/session.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/components/player.js");






const head = document.querySelector("head");
const link = document.createElement("link");

link.setAttribute("rel", "shortcut icon");
link.setAttribute("type", "image/x-icon");
link.setAttribute("href", _assets_favicon_png__WEBPACK_IMPORTED_MODULE_1__);
head.appendChild(link);

const user = (0,_player__WEBPACK_IMPORTED_MODULE_3__.humanPlayerFactory)();
const cpu = (0,_player__WEBPACK_IMPORTED_MODULE_3__.cpuPlayerFactory)();

// start game immediately
const playSession = (0,_session__WEBPACK_IMPORTED_MODULE_2__["default"])(user, cpu);

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

/***/ "./src/components/render.js":
/*!**********************************!*\
  !*** ./src/components/render.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
function render(cell) {
  cell.classList.add("attacked-cell");
  const attackMark = document.createElement("div");
  attackMark.classList.add("attack-mark");
  cell.appendChild(attackMark);
}

// console.log(document.querySelector(".player-board > .E-6"));


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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/components/ship.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/components/render.js");



function switchTurn(attacker) {
  // eslint-disable-next-line no-param-reassign
  attacker.validTurn = !attacker.validTurn;
}

const session = (user, cpu) => {
  const humanPlayer = user;
  const cpuPlayer = cpu;

  const hShip1 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5, 0, "Aircraft Carrier");
  const hShip2 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4, 0, "Cruiser");
  const hShip3 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 0, "Submarine");
  const hShip4 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 0, "Destroyer");
  const hShip5 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2, 0, "Patrol");

  const cShip1 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5, 0, "Aircraft Carrier");
  const cShip2 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4, 0, "Cruiser");
  const cShip3 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 0, "Submarine");
  const cShip4 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 0, "Destroyer");
  const cShip5 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2, 0, "Patrol");

  humanPlayer.ownBoard.placeShip(
    { col: "B", row: 3 },
    { col: "B", row: 6 },
    hShip2
  );
  humanPlayer.ownBoard.placeShip(
    { col: "E", row: 5 },
    { col: "E", row: 7 },
    hShip3
  );
  humanPlayer.ownBoard.placeShip(
    { col: "A", row: 9 },
    { col: "E", row: 9 },
    hShip1
  );
  humanPlayer.ownBoard.placeShip(
    { col: "H", row: 10 },
    { col: "I", row: 10 },
    hShip5
  );
  humanPlayer.ownBoard.placeShip(
    { col: "G", row: 2 },
    { col: "I", row: 2 },
    hShip4
  );

  cpuPlayer.ownBoard.placeShip(
    { col: "B", row: 3 },
    { col: "B", row: 6 },
    cShip2
  );
  cpuPlayer.ownBoard.placeShip(
    { col: "E", row: 5 },
    { col: "E", row: 7 },
    cShip3
  );
  cpuPlayer.ownBoard.placeShip(
    { col: "A", row: 9 },
    { col: "E", row: 9 },
    cShip1
  );
  cpuPlayer.ownBoard.placeShip(
    { col: "H", row: 10 },
    { col: "I", row: 10 },
    cShip5
  );
  cpuPlayer.ownBoard.placeShip(
    { col: "G", row: 2 },
    { col: "I", row: 2 },
    cShip4
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
      (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(cell);
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
    else console.log("game over, player won");
  };

  const cpuAttack = function cpuAttack() {
    function generateRandomPoints() {
      const randomRow = Math.floor(Math.random() * 10) + 1;
      const randomCol = String.fromCharCode(
        Math.floor(Math.random() * (74 - 65 + 1)) + 65
      );
      return { randomCol, randomRow };
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
      return { col: randomPoint.randomCol, row: randomPoint.randomRow };
    }

    if (cpuPlayer.validTurn === true) {
      const coordinate = getRandomPoints();
      humanPlayer.ownBoard.recieveAttack(coordinate);
      const cell = selectCell(coordinate, "player-board");
      (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(cell);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/dom.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC8uL3NyYy9jb21wb25lbnRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC8uL3NyYy9jb21wb25lbnRzL3N0eWxlLmNzcz9iNWMyIiwid2VicGFjazovL2JhdHRsZXNoaXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHAvLi9zcmMvY29tcG9uZW50cy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHAvLi9zcmMvY29tcG9uZW50cy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHAvLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC8uL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC8uL3NyYy9jb21wb25lbnRzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC8uL3NyYy9jb21wb25lbnRzL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHAvLi9zcmMvY29tcG9uZW50cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgYm9yZGVyIGJveCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICAgKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBVc2UgdGhlIGRlZmF1bHQgY3Vyc29yIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAgICovXFxuXFxuaHRtbCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIC0tYm9hcmQtc2lkZS1sZW5ndGg6IDQzMHB4O1xcblxcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkLFxcbi5jcHUtYm9hcmQge1xcbiAgaGVpZ2h0OiB2YXIoLS1ib2FyZC1zaWRlLWxlbmd0aCk7XFxuICB3aWR0aDogdmFyKC0tYm9hcmQtc2lkZS1sZW5ndGgpO1xcblxcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnBsYXllci1ib2FyZCA+IGRpdixcXG4uY3B1LWJvYXJkID4gZGl2IHtcXG4gIGhlaWdodDogY2FsYygxMCUpO1xcbiAgd2lkdGg6IGNhbGMoMTAlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxufVxcblxcbi5hdHRhY2tlZC1jZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hdHRhY2stbWFyayB7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm9jY3VwaWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY3B1LXRvb2staGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNwcmluZ2dyZWVuO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBOztJQUVJOztBQUVKOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCOztFQUUxQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjs7RUFFdEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZ0NBQWdDO0VBQ2hDLCtCQUErQjs7RUFFL0IscUJBQXFCO0VBQ3JCLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCBib3JkZXIgYm94IHNpemluZyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gICAqL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIFVzZSB0aGUgZGVmYXVsdCBjdXJzb3IgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICAgKi9cXG5cXG5odG1sIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgLS1ib2FyZC1zaWRlLWxlbmd0aDogNDMwcHg7XFxuXFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQsXFxuLmNwdS1ib2FyZCB7XFxuICBoZWlnaHQ6IHZhcigtLWJvYXJkLXNpZGUtbGVuZ3RoKTtcXG4gIHdpZHRoOiB2YXIoLS1ib2FyZC1zaWRlLWxlbmd0aCk7XFxuXFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkID4gZGl2LFxcbi5jcHUtYm9hcmQgPiBkaXYge1xcbiAgaGVpZ2h0OiBjYWxjKDEwJSk7XFxuICB3aWR0aDogY2FsYygxMCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXG59XFxuXFxuLmF0dGFja2VkLWNlbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmF0dGFjay1tYXJrIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ub2NjdXBpZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5jcHUtdG9vay1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogc3ByaW5nZ3JlZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwbGF5U2Vzc2lvbiBmcm9tIFwiLi9pbmRleFwiO1xuXG5jb25zdCBjcHVCb2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcHUtYm9hcmQgPiBkaXZcIik7XG5cbmZ1bmN0aW9uIHBhcnNlQ29vcmRpbmF0ZXMoY2VsbCkge1xuICBjb25zdCBjZWxsQ2xhc3NlcyA9IGNlbGwuY2xhc3NMaXN0O1xuICBjb25zdCBjb2wgPSBjZWxsQ2xhc3Nlc1swXS5zcGxpdChcIi1cIilbMF07XG4gIGNvbnN0IHJvdyA9IE51bWJlcihjZWxsQ2xhc3Nlc1swXS5zcGxpdChcIi1cIilbMV0pO1xuICByZXR1cm4geyBjb2wsIHJvdyB9O1xufVxuXG5jcHVCb2FyZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHBvaW50ID0geyAuLi5wYXJzZUNvb3JkaW5hdGVzKGNlbGwpIH07XG4gICAgcGxheVNlc3Npb24uaHVtYW5BdHRhY2socG9pbnQpO1xuICB9KTtcbn0pO1xuIiwiY29uc3QgZ2FtZUJvYXJkRmFjdG9yeSA9ICgpID0+ICh7XG4gIGF0dGFja0F0dGVtcHRzOiBbXSxcbiAgbWlzc0hpdHM6IFtdLFxuICBmbGVldDogW10sXG4gIGFsbFNoaXBTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmZsZWV0LmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpID09PSB0cnVlKTtcbiAgfSxcbiAgZ2V0Q2xhc3NOYW1lKHBvaW50KSB7XG4gICAgcmV0dXJuIGAke3BvaW50LmNvbH0tJHtwb2ludC5yb3d9YDtcbiAgfSxcbiAgc2hvd1NoaXBzKGJvYXJkQ2xhc3MpIHtcbiAgICB0aGlzLmZsZWV0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuc2hvd1NoaXAoYm9hcmRDbGFzcyk7XG4gICAgfSk7XG4gIH0sXG4gIGdldE9jY3VwaWVkR3JpZHMoc2hpcCkge1xuICAgIGNvbnN0IGFsbFBvaW50cyA9IFtdO1xuICAgIGNvbnN0IGNvbE9uZSA9IHNoaXAuc3RhcnRQb3MuY29sO1xuICAgIGNvbnN0IGNvbFR3byA9IHNoaXAuZW5kUG9zLmNvbDtcbiAgICBjb25zdCByb3dPbmUgPSBzaGlwLnN0YXJ0UG9zLnJvdztcbiAgICBjb25zdCByb3dUd28gPSBzaGlwLmVuZFBvcy5yb3c7XG4gICAgaWYgKGNvbE9uZSA9PT0gY29sVHdvKSB7XG4gICAgICBmb3IgKGxldCBpID0gcm93T25lOyBpIDw9IHJvd1R3bzsgaSsrKSB7XG4gICAgICAgIGFsbFBvaW50cy5wdXNoKHsgY29sOiBjb2xPbmUsIHJvdzogaSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJvd09uZSA9PT0gcm93VHdvKSB7XG4gICAgICBmb3IgKGxldCBpID0gY29sT25lLmNoYXJDb2RlQXQoMCk7IGkgPD0gY29sVHdvLmNoYXJDb2RlQXQoMCk7IGkrKykge1xuICAgICAgICBhbGxQb2ludHMucHVzaCh7IGNvbDogU3RyaW5nLmZyb21DaGFyQ29kZShpKSwgcm93OiByb3dPbmUgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhbGxQb2ludHM7XG4gIH0sXG4gIGV2YWx1YXRlQXR0YWNrKGF0dGFja2VkR3JpZCkge1xuICAgIGxldCBzaWduYWwgPSBmYWxzZTtcbiAgICB0aGlzLmZsZWV0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IGFsbFBvaW50cyA9IHRoaXMuZ2V0T2NjdXBpZWRHcmlkcyhzaGlwKTtcbiAgICAgIGFsbFBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgICBpZiAoYXR0YWNrZWRHcmlkLmNvbCA9PT0gcG9pbnQuY29sICYmIGF0dGFja2VkR3JpZC5yb3cgPT09IHBvaW50LnJvdylcbiAgICAgICAgICBzaWduYWwgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNpZ25hbDtcbiAgfSxcbiAgaWRlbnRpZnlTaGlwKGF0dGFja2VkR3JpZCkge1xuICAgIGxldCBhdHRhY2tlZFNoaXAgPSBudWxsO1xuICAgIHRoaXMuZmxlZXQuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgY29uc3QgYWxsUG9pbnRzID0gdGhpcy5nZXRPY2N1cGllZEdyaWRzKHNoaXApO1xuICAgICAgYWxsUG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgICAgIGlmIChhdHRhY2tlZEdyaWQuY29sID09PSBwb2ludC5jb2wgJiYgYXR0YWNrZWRHcmlkLnJvdyA9PT0gcG9pbnQucm93KVxuICAgICAgICAgIGF0dGFja2VkU2hpcCA9IHsgLi4uc2hpcCB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGF0dGFja2VkU2hpcDtcbiAgfSxcbiAgc2VuZEhpdEZ1bmN0aW9uKHNoaXBIaXQpIHtcbiAgICBjb25zdCBzaGlwTmFtZSA9IHNoaXBIaXQubmFtZTtcbiAgICB0aGlzLmZsZWV0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLm5hbWUgPT09IHNoaXBOYW1lKSBzaGlwLmhpdCgpO1xuICAgIH0pO1xuICB9LFxuICBwbGFjZVNoaXAoc3RhcnRQb3MsIGVuZFBvcywgc2hpcCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHNoaXAuc3RhcnRQb3MuY29sID0gc3RhcnRQb3MuY29sO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHNoaXAuc3RhcnRQb3Mucm93ID0gc3RhcnRQb3Mucm93O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHNoaXAuZW5kUG9zLmNvbCA9IGVuZFBvcy5jb2w7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgc2hpcC5lbmRQb3Mucm93ID0gZW5kUG9zLnJvdztcbiAgICB0aGlzLmZsZWV0LnB1c2goc2hpcCk7XG4gIH0sXG4gIHJlY2lldmVBdHRhY2socG9pbnQpIHtcbiAgICB0aGlzLmF0dGFja0F0dGVtcHRzLnB1c2gocG9pbnQpO1xuICAgIGlmICghdGhpcy5ldmFsdWF0ZUF0dGFjayhwb2ludCkpIHtcbiAgICAgIHRoaXMubWlzc0hpdHMucHVzaChwb2ludCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0F0dGFja2VkOiBmYWxzZSxcbiAgICAgICAgc2hpcDogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHNoaXBIaXQgPSB0aGlzLmlkZW50aWZ5U2hpcChwb2ludCk7XG4gICAgdGhpcy5zZW5kSGl0RnVuY3Rpb24oc2hpcEhpdCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQXR0YWNrZWQ6IHRydWUsXG4gICAgICBzaGlwOiBzaGlwSGl0LFxuICAgIH07XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUJvYXJkRmFjdG9yeTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZmF2aWNvbiBmcm9tIFwiLi4vYXNzZXRzL2Zhdmljb24ucG5nXCI7XG5cbmltcG9ydCBzZXNzaW9uIGZyb20gXCIuL3Nlc3Npb25cIjtcbmltcG9ydCB7IGh1bWFuUGxheWVyRmFjdG9yeSwgY3B1UGxheWVyRmFjdG9yeSB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7XG5jb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cbmxpbmsuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic2hvcnRjdXQgaWNvblwiKTtcbmxpbmsuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImltYWdlL3gtaWNvblwiKTtcbmxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBmYXZpY29uKTtcbmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG5cbmNvbnN0IHVzZXIgPSBodW1hblBsYXllckZhY3RvcnkoKTtcbmNvbnN0IGNwdSA9IGNwdVBsYXllckZhY3RvcnkoKTtcblxuLy8gc3RhcnQgZ2FtZSBpbW1lZGlhdGVseVxuY29uc3QgcGxheVNlc3Npb24gPSBzZXNzaW9uKHVzZXIsIGNwdSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXlTZXNzaW9uO1xuIiwiaW1wb3J0IGdhbWVCb2FyZEZhY3RvcnkgZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5cbmNvbnN0IGh1bWFuUGxheWVyRmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IG93bkJvYXJkID0gZ2FtZUJvYXJkRmFjdG9yeSgpO1xuICBjb25zdCB2YWxpZFR1cm4gPSB0cnVlO1xuICByZXR1cm4geyBuYW1lLCBvd25Cb2FyZCwgdmFsaWRUdXJuIH07XG59O1xuXG5jb25zdCBjcHVQbGF5ZXJGYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBvd25Cb2FyZCA9IGdhbWVCb2FyZEZhY3RvcnkoKTtcbiAgY29uc3QgdmFsaWRUdXJuID0gZmFsc2U7XG4gIHJldHVybiB7IG5hbWU6IFwiQ1BVXCIsIG93bkJvYXJkLCB2YWxpZFR1cm4gfTtcbn07XG5cbmV4cG9ydCB7IGh1bWFuUGxheWVyRmFjdG9yeSwgY3B1UGxheWVyRmFjdG9yeSB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKGNlbGwpIHtcbiAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrZWQtY2VsbFwiKTtcbiAgY29uc3QgYXR0YWNrTWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGF0dGFja01hcmsuY2xhc3NMaXN0LmFkZChcImF0dGFjay1tYXJrXCIpO1xuICBjZWxsLmFwcGVuZENoaWxkKGF0dGFja01hcmspO1xufVxuXG4vLyBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ib2FyZCA+IC5FLTZcIikpO1xuIiwiaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmZ1bmN0aW9uIHN3aXRjaFR1cm4oYXR0YWNrZXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGF0dGFja2VyLnZhbGlkVHVybiA9ICFhdHRhY2tlci52YWxpZFR1cm47XG59XG5cbmNvbnN0IHNlc3Npb24gPSAodXNlciwgY3B1KSA9PiB7XG4gIGNvbnN0IGh1bWFuUGxheWVyID0gdXNlcjtcbiAgY29uc3QgY3B1UGxheWVyID0gY3B1O1xuXG4gIGNvbnN0IGhTaGlwMSA9IHNoaXBGYWN0b3J5KDUsIDAsIFwiQWlyY3JhZnQgQ2FycmllclwiKTtcbiAgY29uc3QgaFNoaXAyID0gc2hpcEZhY3RvcnkoNCwgMCwgXCJDcnVpc2VyXCIpO1xuICBjb25zdCBoU2hpcDMgPSBzaGlwRmFjdG9yeSgzLCAwLCBcIlN1Ym1hcmluZVwiKTtcbiAgY29uc3QgaFNoaXA0ID0gc2hpcEZhY3RvcnkoMywgMCwgXCJEZXN0cm95ZXJcIik7XG4gIGNvbnN0IGhTaGlwNSA9IHNoaXBGYWN0b3J5KDIsIDAsIFwiUGF0cm9sXCIpO1xuXG4gIGNvbnN0IGNTaGlwMSA9IHNoaXBGYWN0b3J5KDUsIDAsIFwiQWlyY3JhZnQgQ2FycmllclwiKTtcbiAgY29uc3QgY1NoaXAyID0gc2hpcEZhY3RvcnkoNCwgMCwgXCJDcnVpc2VyXCIpO1xuICBjb25zdCBjU2hpcDMgPSBzaGlwRmFjdG9yeSgzLCAwLCBcIlN1Ym1hcmluZVwiKTtcbiAgY29uc3QgY1NoaXA0ID0gc2hpcEZhY3RvcnkoMywgMCwgXCJEZXN0cm95ZXJcIik7XG4gIGNvbnN0IGNTaGlwNSA9IHNoaXBGYWN0b3J5KDIsIDAsIFwiUGF0cm9sXCIpO1xuXG4gIGh1bWFuUGxheWVyLm93bkJvYXJkLnBsYWNlU2hpcChcbiAgICB7IGNvbDogXCJCXCIsIHJvdzogMyB9LFxuICAgIHsgY29sOiBcIkJcIiwgcm93OiA2IH0sXG4gICAgaFNoaXAyXG4gICk7XG4gIGh1bWFuUGxheWVyLm93bkJvYXJkLnBsYWNlU2hpcChcbiAgICB7IGNvbDogXCJFXCIsIHJvdzogNSB9LFxuICAgIHsgY29sOiBcIkVcIiwgcm93OiA3IH0sXG4gICAgaFNoaXAzXG4gICk7XG4gIGh1bWFuUGxheWVyLm93bkJvYXJkLnBsYWNlU2hpcChcbiAgICB7IGNvbDogXCJBXCIsIHJvdzogOSB9LFxuICAgIHsgY29sOiBcIkVcIiwgcm93OiA5IH0sXG4gICAgaFNoaXAxXG4gICk7XG4gIGh1bWFuUGxheWVyLm93bkJvYXJkLnBsYWNlU2hpcChcbiAgICB7IGNvbDogXCJIXCIsIHJvdzogMTAgfSxcbiAgICB7IGNvbDogXCJJXCIsIHJvdzogMTAgfSxcbiAgICBoU2hpcDVcbiAgKTtcbiAgaHVtYW5QbGF5ZXIub3duQm9hcmQucGxhY2VTaGlwKFxuICAgIHsgY29sOiBcIkdcIiwgcm93OiAyIH0sXG4gICAgeyBjb2w6IFwiSVwiLCByb3c6IDIgfSxcbiAgICBoU2hpcDRcbiAgKTtcblxuICBjcHVQbGF5ZXIub3duQm9hcmQucGxhY2VTaGlwKFxuICAgIHsgY29sOiBcIkJcIiwgcm93OiAzIH0sXG4gICAgeyBjb2w6IFwiQlwiLCByb3c6IDYgfSxcbiAgICBjU2hpcDJcbiAgKTtcbiAgY3B1UGxheWVyLm93bkJvYXJkLnBsYWNlU2hpcChcbiAgICB7IGNvbDogXCJFXCIsIHJvdzogNSB9LFxuICAgIHsgY29sOiBcIkVcIiwgcm93OiA3IH0sXG4gICAgY1NoaXAzXG4gICk7XG4gIGNwdVBsYXllci5vd25Cb2FyZC5wbGFjZVNoaXAoXG4gICAgeyBjb2w6IFwiQVwiLCByb3c6IDkgfSxcbiAgICB7IGNvbDogXCJFXCIsIHJvdzogOSB9LFxuICAgIGNTaGlwMVxuICApO1xuICBjcHVQbGF5ZXIub3duQm9hcmQucGxhY2VTaGlwKFxuICAgIHsgY29sOiBcIkhcIiwgcm93OiAxMCB9LFxuICAgIHsgY29sOiBcIklcIiwgcm93OiAxMCB9LFxuICAgIGNTaGlwNVxuICApO1xuICBjcHVQbGF5ZXIub3duQm9hcmQucGxhY2VTaGlwKFxuICAgIHsgY29sOiBcIkdcIiwgcm93OiAyIH0sXG4gICAgeyBjb2w6IFwiSVwiLCByb3c6IDIgfSxcbiAgICBjU2hpcDRcbiAgKTtcblxuICBodW1hblBsYXllci5vd25Cb2FyZC5zaG93U2hpcHMoXCJwbGF5ZXItYm9hcmRcIik7XG5cbiAgY29uc3QgaXNHYW1lT3ZlciA9IGZ1bmN0aW9uIGlzR2FtZU92ZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGh1bWFuUGxheWVyLm93bkJvYXJkLmFsbFNoaXBTdW5rKCkgfHwgY3B1UGxheWVyLm93bkJvYXJkLmFsbFNoaXBTdW5rKClcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdENlbGwgPSBmdW5jdGlvbiBzZWxlY3RDZWxsKGNvb3JkaW5hdGUsIGJvYXJkQ2xhc3MpIHtcbiAgICBjb25zdCBjZWxsQ2xhc3MgPSBgLiR7Ym9hcmRDbGFzc30gPiAuJHtjb29yZGluYXRlLmNvbH0tJHtjb29yZGluYXRlLnJvd31gO1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNlbGxDbGFzcyk7XG4gICAgcmV0dXJuIGNlbGw7XG4gIH07XG5cbiAgY29uc3QgaHVtYW5BdHRhY2sgPSBmdW5jdGlvbiBodW1hbkF0dGFjayhwb2ludCkge1xuICAgIGlmIChodW1hblBsYXllci52YWxpZFR1cm4gPT09IHRydWUpIHtcbiAgICAgIGNwdVBsYXllci5vd25Cb2FyZC5yZWNpZXZlQXR0YWNrKHBvaW50KTtcbiAgICAgIGNvbnN0IGNlbGwgPSBzZWxlY3RDZWxsKHBvaW50LCBcImNwdS1ib2FyZFwiKTtcbiAgICAgIHJlbmRlcihjZWxsKTtcbiAgICAgIGlmIChcbiAgICAgICAgIUpTT04uc3RyaW5naWZ5KGNwdVBsYXllci5vd25Cb2FyZC5taXNzSGl0cykuaW5jbHVkZXMoXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkocG9pbnQpXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY3B1LXRvb2staGl0XCIpO1xuICAgICAgc3dpdGNoVHVybihodW1hblBsYXllcik7XG4gICAgICBzd2l0Y2hUdXJuKGNwdVBsYXllcik7XG4gICAgfVxuICAgIGlmICghaXNHYW1lT3ZlcigpKSBjcHVBdHRhY2soKTtcbiAgICBlbHNlIGNvbnNvbGUubG9nKFwiZ2FtZSBvdmVyLCBwbGF5ZXIgd29uXCIpO1xuICB9O1xuXG4gIGNvbnN0IGNwdUF0dGFjayA9IGZ1bmN0aW9uIGNwdUF0dGFjaygpIHtcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVBvaW50cygpIHtcbiAgICAgIGNvbnN0IHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICBjb25zdCByYW5kb21Db2wgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNzQgLSA2NSArIDEpKSArIDY1XG4gICAgICApO1xuICAgICAgcmV0dXJuIHsgcmFuZG9tQ29sLCByYW5kb21Sb3cgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VuaXF1ZShwb2ludCkge1xuICAgICAgY29uc3QgYWxsQXR0YWNrZWRQb2ludHMgPSBbLi4uaHVtYW5QbGF5ZXIub3duQm9hcmQuYXR0YWNrQXR0ZW1wdHNdO1xuICAgICAgY29uc3QganNvbkFyciA9IGFsbEF0dGFja2VkUG9pbnRzLm1hcChKU09OLnN0cmluZ2lmeSk7XG4gICAgICByZXR1cm4ganNvbkFyci5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShwb2ludCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbVBvaW50cygpIHtcbiAgICAgIGxldCByYW5kb21Qb2ludCA9IHsgLi4uZ2VuZXJhdGVSYW5kb21Qb2ludHMoKSB9O1xuICAgICAgd2hpbGUgKGNoZWNrVW5pcXVlKHJhbmRvbVBvaW50KSkge1xuICAgICAgICByYW5kb21Qb2ludCA9IHsgLi4uZ2VuZXJhdGVSYW5kb21Qb2ludHMoKSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgY29sOiByYW5kb21Qb2ludC5yYW5kb21Db2wsIHJvdzogcmFuZG9tUG9pbnQucmFuZG9tUm93IH07XG4gICAgfVxuXG4gICAgaWYgKGNwdVBsYXllci52YWxpZFR1cm4gPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBnZXRSYW5kb21Qb2ludHMoKTtcbiAgICAgIGh1bWFuUGxheWVyLm93bkJvYXJkLnJlY2lldmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgICBjb25zdCBjZWxsID0gc2VsZWN0Q2VsbChjb29yZGluYXRlLCBcInBsYXllci1ib2FyZFwiKTtcbiAgICAgIHJlbmRlcihjZWxsKTtcbiAgICAgIHN3aXRjaFR1cm4oY3B1UGxheWVyKTtcbiAgICAgIHN3aXRjaFR1cm4oaHVtYW5QbGF5ZXIpO1xuICAgICAgaWYgKGlzR2FtZU92ZXIoKSkgY29uc29sZS5sb2coXCJnYW1lIG92ZXIsIENQVSB3b25cIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaHVtYW5QbGF5ZXIsXG4gICAgY3B1UGxheWVyLFxuICAgIGh1bWFuQXR0YWNrLFxuICAgIGNwdUF0dGFjayxcbiAgICBpc0dhbWVPdmVyLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2Vzc2lvbjtcbiIsImNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbmd0aCwgaGl0c1Rha2VuLCBuYW1lKSA9PiAoe1xuICBuYW1lLFxuICBzdGFydFBvczoge30sXG4gIGVuZFBvczoge30sXG4gIGxlbmd0aCxcbiAgaGl0c1Rha2VuLFxuICBzaG93U2hpcChib2FyZENsYXNzKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRQb3Mucm93ID09PSB0aGlzLmVuZFBvcy5yb3cpIHtcbiAgICAgIGxldCB1bmljb2RlID0gdGhpcy5zdGFydFBvcy5jb2wuY2hhckNvZGVBdCgwKTtcbiAgICAgIGZvciAobGV0IGkgPSBsZW5ndGg7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC4ke2JvYXJkQ2xhc3N9ID4gLiR7U3RyaW5nLmZyb21DaGFyQ29kZSh1bmljb2RlKX0tJHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRQb3Mucm93XG4gICAgICAgICAgfWBcbiAgICAgICAgKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib2NjdXBpZWRcIik7XG4gICAgICAgIHVuaWNvZGUgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhcnRQb3MuY29sID09PSB0aGlzLmVuZFBvcy5jb2wpIHtcbiAgICAgIGZvciAobGV0IGkgPSBsZW5ndGg7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC4ke2JvYXJkQ2xhc3N9ID4gLiR7dGhpcy5zdGFydFBvcy5jb2x9LSR7dGhpcy5zdGFydFBvcy5yb3d9YFxuICAgICAgICApO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiKTtcbiAgICAgICAgdGhpcy5zdGFydFBvcy5yb3cgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdHNUYWtlbiArPSAxO1xuICB9LFxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0c1Rha2VuID09PSB0aGlzLmxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXBGYWN0b3J5O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jb21wb25lbnRzL2luZGV4LmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvbXBvbmVudHMvc2hpcC5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jb21wb25lbnRzL3Nlc3Npb24uanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY29tcG9uZW50cy9nYW1lQm9hcmQuanNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jb21wb25lbnRzL2RvbS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==