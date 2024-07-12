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

// src/compare.ts
var compare_exports = {};
__export(compare_exports, {
  default: () => compare_default
});
module.exports = __toCommonJS(compare_exports);

// src/checkTypes.ts
var checkType = (value) => Object.prototype.toString.call(value).slice(8, -1);
var isObject = (value) => checkType(value) === "Object" /* Object */;
var isArray = (value) => checkType(value) === "Array" /* Array */;
var isNaN = (value) => checkType(value) === "NaN" /* NaN */;
var isFunction = (value) => checkType(value) === "Function" /* Function */;
var checkTypeInstance = {
  isObject,
  isArray,
  isNaN,
  isFunction,
  checkType
};
var checkTypes_default = checkTypeInstance;

// src/compare.ts
var gte = (value, other) => {
  const convertValue = Number(value);
  const convertOther = Number(other);
  if (checkTypes_default.isNaN(convertOther + convertValue)) throw "Value is NaN";
  return convertValue >= convertOther;
};
var gt = (value, other) => {
  const convertValue = Number(value);
  const convertOther = Number(other);
  if (checkTypes_default.isNaN(convertOther + convertValue)) throw "Value is NaN";
  return convertValue > convertOther;
};
var lte = (value, other) => {
  const convertValue = Number(value);
  const convertOther = Number(other);
  if (checkTypes_default.isNaN(convertOther + convertValue)) throw "Value is NaN";
  return convertValue <= convertOther;
};
var lt = (value, other) => {
  const convertValue = Number(value);
  const convertOther = Number(other);
  if (checkTypes_default.isNaN(convertOther + convertValue)) throw "Value is NaN";
  return convertValue < convertOther;
};
var compareInstance = {
  gte,
  lt,
  lte,
  gt
};
var compare_default = compareInstance;
//# sourceMappingURL=compare.js.map