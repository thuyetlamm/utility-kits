import memoize, {MemFunction, TFunction, TKey} from "./memoize";

/** Used as the maximum memoize cache size. */
const MAX_MEMOIZE_SIZE = 500

/**
 * A specialized version of `memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 */
const memoizeCapped = <T extends MemFunction>(func: TFunction) : T => {
    const result = memoize(func, (...key : TKey) : string[] => {
        const { cache } = result
        if (cache?.size === MAX_MEMOIZE_SIZE) {
            cache?.clear()
        }
        return key
    }) as T

    return result
}

export default memoizeCapped