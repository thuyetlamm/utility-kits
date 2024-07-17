import { NestedKeyOf, NestedKeyValue } from '../types/get.d.js';

declare function baseSet<T extends object, K extends NestedKeyOf<T>>(object: T, path: K, value: NestedKeyValue<T, K>): T;

export { baseSet as default };
