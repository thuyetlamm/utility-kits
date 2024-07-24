import { TKey } from './memoize.js';

type ReturnCashPath<T> = T | T[];
declare function castPath<T extends TKey>(value: T, object: object): ReturnCashPath<T>;

export { castPath as default };
