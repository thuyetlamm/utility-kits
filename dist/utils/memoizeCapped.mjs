// src/checkTypes.ts
var checkType = (value) => Object.prototype.toString.call(value).slice(8, -1);
var isFunction = (value) => checkType(value) === "Function" /* Function */;

// src/utils/memoize.ts
var memoize = (func, resolver) => {
  if (!isFunction(func) || !isFunction(resolver)) {
    throw new TypeError("Expected a function");
  }
  const memoized = (...args) => {
    const key = resolver ? resolver.apply(null, args) : args[0];
    const cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(null, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || Map)();
  return memoized;
};
memoize.Cache = Map;
var memoize_default = memoize;

// src/utils/memoizeCapped.ts
var MAX_MEMOIZE_SIZE = 500;
var memoizeCapped = (func) => {
  const result = memoize_default(func, (...key) => {
    const { cache } = result;
    if ((cache == null ? void 0 : cache.size) === MAX_MEMOIZE_SIZE) {
      cache == null ? void 0 : cache.clear();
    }
    return key;
  });
  return result;
};
var memoizeCapped_default = memoizeCapped;
export {
  memoizeCapped_default as default
};
//# sourceMappingURL=memoizeCapped.mjs.map