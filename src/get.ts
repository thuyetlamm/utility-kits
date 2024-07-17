import { NestedKeyOf, NestedKeyValue } from "./types/get";


const get = <T extends object, K extends NestedKeyOf<T> = NestedKeyOf<T>>(
    obj: T,
    key: K,
    defaultValue?: NestedKeyValue<T, K>,
):  NestedKeyValue<T, K> => {
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

