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

// src/checkTypes.ts
var checkType = (value) => Object.prototype.toString.call(value).slice(8, -1);
var isObject = (value) => checkType(value) === "Object" /* Object */;
var isArray = (value) => checkType(value) === "Array" /* Array */;
var isNaN = (value) => checkType(value) === "NaN" /* NaN */;
var isFunction = (value) => checkType(value) === "Function" /* Function */;
var isNumber = (value) => checkType(value) === "Number" /* Number */;
var isString = (value) => checkType(value) === "String" /* String */;
var checkTypeInstance = {
  isObject,
  isArray,
  isNaN,
  isFunction,
  checkType,
  isString,
  isNumber
};
var checkTypes_default = checkTypeInstance;

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

// src/isEmpty.ts
var isEmpty = (obj) => {
  if (typeof obj === "string" && obj.trim().length === 0) return true;
  return !Object.keys(obj != null ? obj : {}).length;
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
var Show_default = Show;

// src/components/Each/Each.tsx
import React, { Children as Children2, Fragment } from "react";
var DataList = ({ list, render, empty }) => {
  return /* @__PURE__ */ React.createElement(Fragment, null, /* @__PURE__ */ React.createElement(Show_default, null, /* @__PURE__ */ React.createElement(Show_default.When, { isTrue: Array.isArray(list) && list.length > 0 }, Children2.toArray(list.map(render))), /* @__PURE__ */ React.createElement(Show_default.Else, null, empty)));
};
var Each_default = DataList;
export {
  Each_default as Each,
  Show_default as Show,
  checkTypes_default as checkTypes,
  deepClone_default as deepClone,
  get_default as get,
  isEmpty_default as isEmpty,
  merge_default as merge
};
//# sourceMappingURL=index.mjs.map