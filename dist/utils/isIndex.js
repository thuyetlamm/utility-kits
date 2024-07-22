"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/isIndex.ts
var isIndex_exports = {};
__export(isIndex_exports, {
  default: () => isIndex_default
});
module.exports = __toCommonJS(isIndex_exports);

// src/checkTypes.ts
var checkType = (value) => Object.prototype.toString.call(value).slice(8, -1);
var isNumber = (value) => checkType(value) === "Number" /* Number */;
var isSymbol = (value) => checkType(value) === "Symbol" /* Symbol */;

// src/utils/isIndex.ts
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length = MAX_SAFE_INTEGER) {
  return !!length && (isNumber(value) || !isSymbol(value) && reIsUint.test(value)) && (Number(value) > -1 && Number(value) % 1 === 0 && Number(value) < length);
}
var isIndex_default = isIndex;
//# sourceMappingURL=isIndex.js.map