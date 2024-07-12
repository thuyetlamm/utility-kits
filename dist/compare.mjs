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

// src/compare.ts
var gte = (value, other) => {
  const convertValue = Number(value);
  const convertOther = Number(other);
  if (checkTypes_default.isNaN(convertOther + convertValue)) throw "Value is NaN";
  return convertValue >= convertOther;
};
var gt = (value, other) => {
  const convertValue = Number(value);
  const convertOther = Number(other);
  if (checkTypes_default.isNaN(convertOther + convertValue)) throw "Value is NaN";
  return convertValue > convertOther;
};
var lte = (value, other) => {
  const convertValue = Number(value);
  const convertOther = Number(other);
  if (checkTypes_default.isNaN(convertOther + convertValue)) throw "Value is NaN";
  return convertValue <= convertOther;
};
var lt = (value, other) => {
  const convertValue = Number(value);
  const convertOther = Number(other);
  if (checkTypes_default.isNaN(convertOther + convertValue)) throw "Value is NaN";
  return convertValue < convertOther;
};
var compareInstance = {
  gte,
  lt,
  lte,
  gt
};
var compare_default = compareInstance;
export {
  compare_default as default
};
//# sourceMappingURL=compare.mjs.map