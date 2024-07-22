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

// src/utils/cashPath.ts
var cashPath_exports = {};
__export(cashPath_exports, {
  default: () => cashPath_default
});
module.exports = __toCommonJS(cashPath_exports);

// src/checkTypes.ts
var checkType = (value) => Object.prototype.toString.call(value).slice(8, -1);
var isFunction = (value) => checkType(value) === "Function" /* Function */;
var isString = (value) => checkType(value) === "String" /* String */;

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

// src/utils/memoize.ts
var memoize = (func, resolver) => {
  if (!isFunction(func) || !isFunction(resolver)) {
    throw new TypeError("Expected a function");
  }
  const memoized = (...args) => {
    const key = resolver ? resolver.apply(null, args) : args[0];
    const cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(null, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || Map)();
  return memoized;
};
memoize.Cache = Map;
var memoize_default = memoize;

// src/utils/memoizeCapped.ts
var MAX_MEMOIZE_SIZE = 500;
var memoizeCapped = (func) => {
  const result = memoize_default(func, (...key) => {
    const { cache } = result;
    if ((cache == null ? void 0 : cache.size) === MAX_MEMOIZE_SIZE) {
      cache == null ? void 0 : cache.clear();
    }
    return key;
  });
  return result;
};
var memoizeCapped_default = memoizeCapped;

// src/utils/stringToPath.ts
var charCodeOfDot = ".".charCodeAt(0);
var reEscapeChar = /\\(\\)?/g;
var rePropName = RegExp(
  // Match anything that isn't a dot or bracket.
  `[^.[\\]]+|\\[(?:([^"'][^[]*)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))`,
  "g"
);
var stringToPath = memoizeCapped_default((str) => {
  const result = [];
  if (!isString(str)) return result;
  if ((str == null ? void 0 : str.charCodeAt(0)) === charCodeOfDot) {
    result.push("");
  }
  str == null ? void 0 : str.replace(rePropName, (match, expression, quote, subString) => {
    var _a;
    let key = match;
    if (quote) {
      key = (_a = subString == null ? void 0 : subString.replace(reEscapeChar, "$1")) != null ? _a : "";
    } else if (expression) {
      key = expression.trim();
    }
    result.push(key);
  });
  return result;
});
var stringToPath_default = stringToPath;

// src/utils/cashPath.ts
function castPath(value, object) {
  if (Array.isArray(value)) {
    return value;
  }
  return isKey_default(value, object) ? [value] : stringToPath_default(value);
}
var cashPath_default = castPath;
//# sourceMappingURL=cashPath.js.map