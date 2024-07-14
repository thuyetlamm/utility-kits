import { NestedKeyOf, NestedKeyValue } from './types/get.d.js';

declare const get: <T extends object, K extends NestedKeyOf<T>>(obj: T, key: K, defaultValue?: NestedKeyValue<T, K>) => NestedKeyValue<T, K>;

export { get as default };
