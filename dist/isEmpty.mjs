// src/checkTypes.ts
var checkType = (value) => Object.prototype.toString.call(value).slice(8, -1);
var isArray = (value) => checkType(value) === "Array" /* Array */;
var isString = (value) => checkType(value) === "String" /* String */;

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
export {
  isEmpty_default as default
};
//# sourceMappingURL=isEmpty.mjs.map