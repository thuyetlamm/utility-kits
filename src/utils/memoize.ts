import {checkTypes} from "../index";

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
*/
export type TKey =  [key?: TKey, ...rest: any[]]
export type TFunction = (...args:  TKey) => string[]
export type MemFunction = TFunction & {
    cache? :Map<any,any>
};

const memoize = (func:TFunction, resolver :TFunction) => {
    if (!checkTypes.isFunction(func) || !checkTypes.isFunction(resolver)) {
        throw new TypeError('Expected a function');
    }
    const memoized = (...args: TKey) => {
        const key = resolver ? resolver.apply(null, args) : args[0];
        const cache = memoized.cache as Map<any,any>;

        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = func.apply(null, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
    memoized.cache = new (memoize.Cache || Map)();
    return memoized;
}

memoize.Cache = Map;

export default memoize;