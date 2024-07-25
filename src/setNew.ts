import { NestedKeyOf, NestedKeyValue } from "./types/get"
import baseSet from "./utils/baseSet"
import { isFunction, isNull, isObject } from "./checkTypes"

type NotNestedKeyOf<T extends object, K> = K extends NestedKeyOf<T> ? never : K

// The main type you want to create
type ValueType<K> =
  | K // Pre-calculated value for the nested path
  | (() => K) // Function that returns the value

const setNew = <T extends object, K extends string>(
  object: T,
  path: NotNestedKeyOf<T, K>,
  value: ValueType<K>,
) => {
  if (!object || !isObject(object) || isNull(object)) return object

  if (isFunction(value) && value instanceof Function) {
    const currentValue = value()
    return baseSet(
      object,
      path as NestedKeyOf<T>,
      currentValue as NestedKeyValue<T, NestedKeyOf<T>>,
    )
  }
  return baseSet(
    object,
    path as NestedKeyOf<T>,
    value as NestedKeyValue<T, NestedKeyOf<T>>,
  )
}

export default setNew
