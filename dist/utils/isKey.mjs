// src/checkTypes.ts
var checkType = (value) => Object.prototype.toString.call(value).slice(8, -1);

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
export {
  isKey_default as default
};
//# sourceMappingURL=isKey.mjs.map