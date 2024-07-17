import { MemFunction, TFunction } from './memoize.js';

/**
 * A specialized version of `memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 */
declare const memoizeCapped: <T extends MemFunction>(func: TFunction) => T;

export { memoizeCapped as default };
