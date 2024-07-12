type NestedKeyOf<ObjectType extends object> = {
    [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
        ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
        : `${Key}`
}[keyof ObjectType & (string | number)]

type NestedKeyValue<
    T extends object,
    Key,
> = Key extends `${infer First}.${infer Rest}`
    ? First extends keyof T
        ? T[First] extends object
            ? Rest extends NestedKeyOf<T[First]>
                ? NestedKeyValue<T[First], Rest>
                : never
            : never
        : never
    : Key extends keyof T
        ? T[Key]
        : never

 const get = <T extends object, K extends NestedKeyOf<T>>(
    obj: T,
    key: K,
    defaultValue?: NestedKeyValue<T, K>,
): NestedKeyValue<T, K> => {
    if (!obj || !key) return undefined as NestedKeyValue<T, K>

    const keyParts = key.split(".") as Array<keyof T>
    let value = { ...obj }

    for (const part of keyParts) {
        value = (value as Record<keyof T, T>)?.[part as keyof T]
        if (value === undefined) {
            break
        }
    }
    return (value || defaultValue) as NestedKeyValue<T, K>
}

export default get
