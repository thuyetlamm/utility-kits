import { NestedKeyOf } from './types/get.d.js';

type NotNestedKeyOf<T extends object, K> = K extends NestedKeyOf<T> ? never : K;
type ValueType<K> = K | (() => K);
declare const setNew: <T extends object, K extends string>(object: T, path: NotNestedKeyOf<T, K>, value: ValueType<K>) => T;

export { setNew as default };
