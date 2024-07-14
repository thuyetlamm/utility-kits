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

// src/merge.ts
var merge = (target, source) => {
  if (!target || !source) return target ?? source;
  const clonedTarget = deepClone_default(target);
  const clonedSource = deepClone_default(source);
  if (Array.isArray(clonedTarget) && Array.isArray(clonedSource)) {
    return [...clonedTarget, ...clonedSource];
  }
  if (typeof target === "object" && typeof source === "object") {
    const result = { ...clonedTarget };
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
export {
  merge_default as default
};
//# sourceMappingURL=merge.mjs.map