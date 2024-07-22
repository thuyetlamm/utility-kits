// src/checkTypes.ts
var checkType = (value) => Object.prototype.toString.call(value).slice(8, -1);
var isNumber = (value) => checkType(value) === "Number" /* Number */;
var isSymbol = (value) => checkType(value) === "Symbol" /* Symbol */;

// src/utils/isIndex.ts
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length = MAX_SAFE_INTEGER) {
  return !!length && (isNumber(value) || !isSymbol(value) && reIsUint.test(value)) && (Number(value) > -1 && Number(value) % 1 === 0 && Number(value) < length);
}
var isIndex_default = isIndex;
export {
  isIndex_default as default
};
//# sourceMappingURL=isIndex.mjs.map