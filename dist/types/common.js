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

// src/types/common.ts
var common_exports = {};
__export(common_exports, {
  DATATYPE: () => DATATYPE
});
module.exports = __toCommonJS(common_exports);
var DATATYPE = /* @__PURE__ */ ((DATATYPE2) => {
  DATATYPE2["Number"] = "Number";
  DATATYPE2["String"] = "String";
  DATATYPE2["Array"] = "Array";
  DATATYPE2["Boolean"] = "Boolean";
  DATATYPE2["Object"] = "Object";
  DATATYPE2["Null"] = "Null";
  DATATYPE2["Undefined"] = "Undefined";
  DATATYPE2["Function"] = "Function";
  DATATYPE2["NaN"] = "NaN";
  return DATATYPE2;
})(DATATYPE || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DATATYPE
});
//# sourceMappingURL=common.js.map