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
var checkTypeInstance = {
  isObject,
  isArray,
  isNaN,
  isFunction,
  checkType,
  isString,
  isNumber,
  isSymbol,
  isNull,
  isUndefined
};
var checkTypes_default = checkTypeInstance;

// src/components/Show/Show.tsx
import { Children, isValidElement } from "react";
var Show = ({ children }) => {
  let when = null;
  let otherwise = null;
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;
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
import React, { Children as Children2, Fragment } from "react";

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
  if (!checkTypes_default.isString(str)) return result;
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

// src/utils/memoize.ts
var memoize = (func, resolver) => {
  if (!checkTypes_default.isFunction(func) || !checkTypes_default.isFunction(resolver)) {
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
export {
  memoizeCapped_default as default
};
//# sourceMappingURL=memoizeCapped.mjs.map