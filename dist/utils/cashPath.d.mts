import { TKey } from './memoize.mjs';

declare function castPath<T extends TKey>(value: T, object: object): T | T[];

export { castPath as default };
