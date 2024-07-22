"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Each: () => Each_default,
  Show: () => Show_default,
  deepClone: () => deepClone_default,
  get: () => get_default,
  isArray: () => isArray,
  isEmpty: () => isEmpty_default,
  isFunction: () => isFunction,
  isNaN: () => isNaN,
  isNull: () => isNull,
  isNumber: () => isNumber,
  isObject: () => isObject,
  isString: () => isString,
  isSymbol: () => isSymbol,
  isUndefined: () => isUndefined,
  merge: () => merge_default,
  set: () => set_default,
  setNew: () => setNew_default
});
module.exports = __toCommonJS(src_exports);

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

// src/deepClone.ts
var deepClone = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    const copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }
  if (obj instanceof Object) {
    const copy = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepClone(obj[key]);
      }
    }
    return copy;
  }
  throw new Error("Unable to copy object! Its type isn't supported.");
};
var deepClone_default = deepClone;

// src/checkTypes.ts
var checkType = (value) => Object.prototype.toString.call(value).slice(8, -1);
var isObject = (value) => checkType(value) === "Object" /* Object */;
var isArray = (value) => checkType(value) === "Array" /* Array */;
var isNaN = (value) => checkType(value) === "NaN" /* NaN */;
var isFunction = (value) => checkType(value) === "Function" /* Function */;
var isNumber = (value) => checkType(value) === "Number" /* Number */;
var isString = (value) => checkType(value) === "String" /* String */;
var isSymbol = (value) => checkType(value) === "Symbol" /* Symbol */;
var isNull = (value) => checkType(value) === "Null" /* Null */;
var isUndefined = (value) => checkType(value) === "Undefined" /* Undefined */;

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

// src/merge.ts
var merge = (target, source) => {
  if (!target || !source) return target != null ? target : source;
  const clonedTarget = deepClone_default(target);
  const clonedSource = deepClone_default(source);
  if (Array.isArray(clonedTarget) && Array.isArray(clonedSource)) {
    return [...clonedTarget, ...clonedSource];
  }
  if (typeof target === "object" && typeof source === "object") {
    const result = __spreadValues({}, clonedTarget);
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        const targetValue = clonedTarget[key];
        const sourceValue = clonedSource[key];
        if (clonedSource[key] instanceof Object && key in clonedTarget) {
          result[key] = merge(
            targetValue,
            sourceValue
          );
        } else {
          result[key] = sourceValue;
        }
      }
    }
    return result;
  }
  throw new Error("Both target and source should be either objects or arrays");
};
var merge_default = merge;

// src/components/Show/Show.tsx
var import_react = require("react");
var Show = ({ children }) => {
  let when = null;
  let otherwise = null;
  import_react.Children.forEach(children, (child) => {
    if (!(0, import_react.isValidElement)(child)) return;
    if (!child.props.isTrue) {
      otherwise = child;
    } else if (child.props.isTrue && !when) {
      when = child;
    }
  });
  return when || otherwise;
};
Show.When = ({ children, isTrue }) => {
  return isTrue && children;
};
Show.Else = ({
  children,
  render
}) => {
  return render || children;
};
var Show_default = Show;

// src/components/Each/Each.tsx
var import_react2 = __toESM(require("react"));
var Each = ({ list, render, empty }) => {
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(Show_default, null, /* @__PURE__ */ import_react2.default.createElement(Show_default.When, { isTrue: Array.isArray(list) && list.length > 0 }, import_react2.Children.toArray(list.map(render))), /* @__PURE__ */ import_react2.default.createElement(Show_default.Else, null, empty)));
};
var Each_default = Each;

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

// src/utils/isIndex.ts
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length = MAX_SAFE_INTEGER) {
  return !!length && (isNumber(value) || !isSymbol(value) && reIsUint.test(value)) && (Number(value) > -1 && Number(value) % 1 === 0 && Number(value) < length);
}
var isIndex_default = isIndex;

// src/utils/assignValue.ts
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

// src/utils/baseSet.ts
var INFINITY = 1 / 0;
function toKey(value) {
  if (["Symbol" /* Symbol */, "String" /* String */].includes(checkType(value))) {
    return value;
  }
  const result = `${value}`;
  return result === "0" && 1 / Number(value) === -INFINITY ? "-0" : result;
}
function baseSet(object, path, value) {
  if (!isObject(object)) {
    return object;
  }
  path = cashPath_default(path, object);
  const length = path.length;
  const lastIndex = length - 1;
  let index = -1;
  let nested = object;
  while (nested != null && ++index < length) {
    const key = toKey(path[index]);
    let newValue = value;
    if (index !== lastIndex) {
      const objValue = nested[key];
      newValue = isObject(objValue) ? objValue : isIndex_default(path[index + 1]) ? [] : {};
    }
    assignValue_default(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var baseSet_default = baseSet;

// src/set.ts
var set = (object, path, value) => {
  if (!isObject(object) || isNull(object)) return object;
  if (isFunction(value) && value instanceof Function) {
    const currentValue = value();
    return baseSet_default(object, path, currentValue);
  }
  return baseSet_default(object, path, value);
};
var set_default = set;

// src/setNew.ts
var setNew = (object, path, value) => {
  if (!object || !isObject(object) || isNull(object)) return object;
  if (isFunction(value) && value instanceof Function) {
    const currentValue = value();
    return baseSet_default(object, path, currentValue);
  }
  return baseSet_default(object, path, value);
};
var setNew_default = setNew;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Each,
  Show,
  deepClone,
  get,
  isArray,
  isEmpty,
  isFunction,
  isNaN,
  isNull,
  isNumber,
  isObject,
  isString,
  isSymbol,
  isUndefined,
  merge,
  set,
  setNew
});
//# sourceMappingURL=index.js.map