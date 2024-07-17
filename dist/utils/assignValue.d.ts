declare function assignValue<T extends object, K extends keyof T>(object: T, key: K, value: T[K]): void;

export { assignValue as default };
