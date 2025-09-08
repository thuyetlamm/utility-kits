import { isArray, isString } from "../types/checkTypes"

const isEmpty = <T>(val: T): boolean => {
  if (!val) return true

  // Check for an empty array
  if (isArray(val)) {
    return (val as unknown[]).length === 0
  }

  // Check for an empty string
  if (isString(val)) {
    return (val as string).trim().length === 0
  }

  // Check for an empty Map or Set
  if (val instanceof Map || val instanceof Set) {
    return val.size === 0
  }

  // Check for empty object
  return Object.keys(val as Record<string, unknown>).length === 0
}
export default isEmpty
