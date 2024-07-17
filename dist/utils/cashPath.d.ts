import { TKey } from './memoize.js';

declare function castPath<T extends TKey>(value: T, object: object): T | T[];

export { castPath as default };
