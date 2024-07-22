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

// src/checkTypes.ts
var checkType = (value) => Object.prototype.toString.call(value).slice(8, -1);
var isFunction = (value) => checkType(value) === "Function" /* Function */;
var isString = (value) => checkType(value) === "String" /* String */;

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

// src/components/Each/Each.tsx
var import_react2 = __toESM(require("react"));

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

// src/utils/baseSet.ts
var INFINITY = 1 / 0;

// src/tests/get.test.ts
test("get one floor", () => {
  const result = get_default({ a: 10 }, "a");
  expect(result).toBe(10);
});
test("is undifined", () => {
  const result = get_default(void 0, "a");
  expect(result).toBe(void 0);
});
test("get function", () => {
  const result = get_default({ a: 10, b: { z: 1 } }, "b.z");
  expect(result).toBe(1);
});
test("get array", () => {
  const result = get_default([{ a: "name" }], "0.a");
  expect(result).toBe("name");
});
//# sourceMappingURL=get.test.js.map