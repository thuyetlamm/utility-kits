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
export {
  checkType,
  checkTypes_default as default,
  isArray,
  isFunction,
  isNaN,
  isNull,
  isNumber,
  isObject,
  isString,
  isSymbol,
  isUndefined
};
//# sourceMappingURL=checkTypes.mjs.map