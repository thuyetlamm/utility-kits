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
type TKey = [key?: TKey, ...rest: any[]];
type TFunction = (...args: TKey) => string[];
type MemFunction = TFunction & {
    cache?: Map<any, any>;
};
declare const memoize: {
    (func: TFunction, resolver: TFunction): {
        (key?: TKey | undefined, ...rest: any[]): any;
        cache: Map<any, any>;
    };
    Cache: MapConstructor;
};

export { type MemFunction, type TFunction, type TKey, memoize as default };
