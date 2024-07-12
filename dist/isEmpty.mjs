// src/isEmpty.ts
var isEmpty = (obj) => {
  if (typeof obj === "string" && obj.trim().length === 0) return true;
  return !Object.keys(obj != null ? obj : {}).length;
};
var isEmpty_default = isEmpty;
export {
  isEmpty_default as default
};
//# sourceMappingURL=isEmpty.mjs.map