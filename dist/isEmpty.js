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

// src/isEmpty.ts
var isEmpty_exports = {};
__export(isEmpty_exports, {
  default: () => isEmpty_default
});
module.exports = __toCommonJS(isEmpty_exports);

// src/checkTypes.ts
var checkType = (value) => Object.prototype.toString.call(value).slice(8, -1);
var isArray = (value) => checkType(value) === "Array" /* Array */;
var isString = (value) => checkType(value) === "String" /* String */;

// src/isEmpty.ts
var isEmpty = (val) => {
  if (!val) return true;
  if (isArray(val) && val instanceof Array) {
    return !val.length;
  }
  if (isString(val) && val instanceof String) return !(val.trim().length === 0);
  if (val instanceof Map || val instanceof Set) {
    return !val.size;
  }
  return !Object.keys(val != null ? val : {}).length;
};
var isEmpty_default = isEmpty;
//# sourceMappingURL=isEmpty.js.map