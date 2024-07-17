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

// src/utils/isKey.ts
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
var isKey = (value, object) => {
  if (Array.isArray(value)) {
    return false;
  }
  if (["Number" /* Number */, "Boolean" /* Boolean */, "Null" /* Null */, "Symbol" /* Symbol */].includes(checkTypes_default.checkType(value))) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
};
var isKey_default = isKey;

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
  return !!length && (checkTypes_default.isNumber(value) || !checkTypes_default.isSymbol(value) && reIsUint.test(value)) && (Number(value) > -1 && Number(value) % 1 === 0 && Number(value) < length);
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
  if (["Symbol" /* Symbol */, "String" /* String */].includes(checkTypes_default.checkType(value))) {
    return value;
  }
  const result = `${value}`;
  return result === "0" && 1 / Number(value) === -INFINITY ? "-0" : result;
}
function baseSet(object, path, value) {
  if (!checkTypes_default.isObject(object)) {
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
      newValue = checkTypes_default.isObject(objValue) ? objValue : isIndex_default(path[index + 1]) ? [] : {};
    }
    assignValue_default(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var baseSet_default = baseSet;

// src/set.ts
var set = (object, path, value) => {
  if (!object || !checkTypes_default.isObject(object)) return object;
  return checkTypes_default.isNull(object) ? object : baseSet_default(object, path, value);
};
var set_default = set;
export {
  set_default as default
};
//# sourceMappingURL=set.mjs.map