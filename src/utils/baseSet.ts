import { DATATYPE } from "../types/common"
import { checkType, isNull, isObject } from "../checkTypes"
import castPath from "./cashPath"
import assignValue from "./assignValue"
import isIndex from "./isIndex"
import { type NestedKeyOf, type NestedKeyValue } from "../types/get"

const INFINITY = 1 / 0

function toKey<T>(value: T) {
  if ([DATATYPE.Symbol, DATATYPE.String].includes(checkType(value))) {
    return value
  }
  const result = `${value}`
  return result === "0" && 1 / Number(value) === -INFINITY ? "-0" : result
}

function baseSet<T extends object, K extends NestedKeyOf<T>>(
  object: T,
  path: K,
  value: NestedKeyValue<T, K>,
) {
  if (!isObject(object)) {
    return object
  }
  path = castPath(path as any, object)
  const { length } = path
  const lastIndex = length - 1

  let index = -1
  let nested = object

  while (!isNull(nested) && ++index < length) {
    const key = toKey(path[index]) as keyof T

    let newValue = value as T[keyof T]

    if (index !== lastIndex) {
      const objValue = nested[key]
      newValue = isObject(objValue)
        ? (objValue as T[keyof T])
        : ((isIndex(path[index + 1]) ? [] : {}) as T[keyof T])
    }
    assignValue(nested, key as keyof T, newValue)
    nested = nested[key] as T
  }
  return object
}

export default baseSet
