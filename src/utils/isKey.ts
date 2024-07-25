import { checkType } from "../checkTypes"
import { DATATYPE } from "../types/common"

/** Used to match property names within property paths. */
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
const reIsPlainProp = /^\w*$/

/**
 * Checks if `value` is a property name and not a property path.
 *
 */
const isKey = <T extends string>(value: T, object: object): boolean => {
  if (Array.isArray(value)) {
    return false
  }

  if (
    [
      DATATYPE.Number,
      DATATYPE.Boolean,
      DATATYPE.Null,
      DATATYPE.Symbol,
    ].includes(checkType(value))
  ) {
    return true
  }
  return (
    reIsPlainProp.test(value) ||
    !reIsDeepProp.test(value) ||
    (object != null && value in Object(object))
  )
}

export default isKey
