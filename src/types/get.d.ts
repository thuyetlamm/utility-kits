export type NestedKeyOf<ObjectType extends object> = {
    [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
        ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
        : `${Key}`
}[keyof ObjectType & (string | number)]

export type NestedKeyValue<
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