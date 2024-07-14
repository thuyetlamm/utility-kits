// src/get.ts
var get = (obj, key, defaultValue) => {
  if (!obj || !key) return void 0;
  const keyParts = key.split(".");
  let value = { ...obj };
  for (const part of keyParts) {
    value = value?.[part];
    if (value === void 0) {
      break;
    }
  }
  return value || defaultValue;
};
var get_default = get;
export {
  get_default as default
};
//# sourceMappingURL=get.mjs.map