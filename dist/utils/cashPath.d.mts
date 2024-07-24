import { TKey } from './memoize.mjs';

type ReturnCashPath<T> = T | T[];
declare function castPath<T extends TKey>(value: T, object: object): ReturnCashPath<T>;

export { castPath as default };
