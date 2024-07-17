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
export {
  assignValue_default as default
};
//# sourceMappingURL=assignValue.mjs.map