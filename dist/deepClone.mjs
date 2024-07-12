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
export {
  deepClone_default as default
};
//# sourceMappingURL=deepClone.mjs.map