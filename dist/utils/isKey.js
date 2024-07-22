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

// src/utils/isKey.ts
var isKey_exports = {};
__export(isKey_exports, {
  default: () => isKey_default
});
module.exports = __toCommonJS(isKey_exports);

// src/checkTypes.ts
var checkType = (value) => Object.prototype.toString.call(value).slice(8, -1);

// src/utils/isKey.ts
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
var isKey = (value, object) => {
  if (Array.isArray(value)) {
    return false;
  }
  if (["Number" /* Number */, "Boolean" /* Boolean */, "Null" /* Null */, "Symbol" /* Symbol */].includes(checkType(value))) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
};
var isKey_default = isKey;
//# sourceMappingURL=isKey.js.map