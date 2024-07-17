import { NestedKeyOf, NestedKeyValue } from './types/get.d.js';

declare const set: <T extends object, K extends NestedKeyOf<T>>(object: T, path: K, value: NestedKeyValue<T, K>) => T;

export { set as default };
