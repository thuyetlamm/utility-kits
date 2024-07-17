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

// src/utils/assignValue.ts
var assignValue_exports = {};
__export(assignValue_exports, {
  default: () => assignValue_default
});
module.exports = __toCommonJS(assignValue_exports);
var hasOwnProperty = Object.prototype.hasOwnProperty;
function baseAssignValue(object, key, value) {
  if (key === "__proto__") {
    Object.defineProperty(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
function assignValue(object, key, value) {
  const objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value))) {
    if (value !== 0 || 1 / Number(value) === 1 / Number(objValue)) {
      baseAssignValue(object, key, value);
    }
  } else if (value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
var assignValue_default = assignValue;
//# sourceMappingURL=assignValue.js.map