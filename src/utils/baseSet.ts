import castPath from "./cashPath";
import {checkTypes} from "../index";
import isIndex from "./isIndex";
import assignValue from "./assignValue";
import {DATATYPE} from "../types/common";
import {NestedKeyOf, NestedKeyValue} from "../types/get";


const INFINITY = 1 / 0

function toKey<T>(value : T) {
    if ([DATATYPE.Symbol,DATATYPE.String].includes(checkTypes.checkType(value))) {
        return value
    }
    const result = `${value}`
    return (result === '0' && (1 / Number(value)) === -INFINITY) ? '-0' : result
}


function baseSet<T extends object,K extends NestedKeyOf<T>>(object : T, path : K, value : NestedKeyValue<T, K>) {
    if (!checkTypes.isObject(object)) {
        return object
    }
    path = castPath(path as any, object)

    const length = path.length
    const lastIndex = length - 1

    let index = -1
    let nested = object

    while (nested != null && ++index < length) {
        const key = toKey(path[index])
        let newValue = value

        if (index !== lastIndex) {
            const objValue = nested[key as keyof T]
                newValue = checkTypes.isObject(objValue)
                    ? objValue as NestedKeyValue<T, K>
                    : (isIndex(path[index + 1]) ? [] : {}) as NestedKeyValue<T, K>

        }
        assignValue(nested, key as any, newValue)
        nested = nested[key as keyof T] as T
    }
    return object
}

export default baseSet