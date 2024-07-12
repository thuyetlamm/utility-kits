var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// src/get.ts
var get = (obj, key, defaultValue) => {
  if (!obj || !key) return void 0;
  const keyParts = key.split(".");
  let value = __spreadValues({}, obj);
  for (const part of keyParts) {
    value = value == null ? void 0 : value[part];
    if (value === void 0) {
      break;
    }
  }
  return value || defaultValue;
};
var get_default = get;
export {
  get_default as default
};
//# sourceMappingURL=get.mjs.map