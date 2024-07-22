import { NestedKeyOf, NestedKeyValue } from './types/get.d.mjs';

type ValueType<T extends object, K> = NestedKeyValue<T, K> | (() => NestedKeyValue<T, K>);
declare const set: <T extends object, K extends NestedKeyOf<T>>(object: T, path: K, value: ValueType<T, K>) => T;

export { set as default };
