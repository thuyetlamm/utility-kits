import { NestedKeyOf, NestedKeyValue } from "../../types/get"
import cashPath from "../../utils/cashPath"

const get = <T extends object, K extends NestedKeyOf<T> = NestedKeyOf<T>>(
  obj: T,
  key: K,
  defaultValue?: any,
): NestedKeyValue<T, K> => {
  if (!obj || !key) return undefined as NestedKeyValue<T, K>

  const keyParts = cashPath(key as any, obj)
  let value: any = obj

  for (const part of keyParts) {
    if (value === null || value === undefined) {
      return defaultValue as NestedKeyValue<T, K>
    }
    value = value[part]
  }

  return (value !== undefined ? value : defaultValue) as NestedKeyValue<T, K>
}

export default get
