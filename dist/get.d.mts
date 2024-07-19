import { NestedKeyOf, NestedKeyValue } from './types/get.d.mjs';

declare const get: <T extends object, K extends NestedKeyOf<T> = NestedKeyOf<T>>(obj: T, key: K, defaultValue?: NestedKeyValue<T, K>) => NestedKeyValue<T, K>;

export { get as default };
