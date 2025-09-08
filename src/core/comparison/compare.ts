import { isSameType, isNaN, checkType } from "../types/checkTypes"
import { DATATYPE } from "../../types/common"
import convertFn from "../../utils/convert"

const message =
  "Invalid input: The result of the operation is NaN (Not a Number). Please ensure that all provided values are valid numbers."

// Helper function to validate and convert numbers
const validateNumbers = (value: number, other: number): [number, number] => {
  const convertValue = Number(value)
  const convertOther = Number(other)
  if (isNaN(convertOther + convertValue)) throw message
  return [convertValue, convertOther]
}

export const gte = (value: number, other: number): boolean => {
  const [convertValue, convertOther] = validateNumbers(value, other)
  return convertValue >= convertOther
}

export const gt = (value: number, other: number): boolean => {
  const [convertValue, convertOther] = validateNumbers(value, other)
  return convertValue > convertOther
}

export const lte = (value: number, other: number): boolean => {
  const [convertValue, convertOther] = validateNumbers(value, other)
  return convertValue <= convertOther
}

export const lt = (value: number, other: number): boolean => {
  const [convertValue, convertOther] = validateNumbers(value, other)
  return convertValue < convertOther
}

export const isEqual = <T>(...args: T[]): boolean => {
  if (!args || args.length <= 1) return Boolean(args?.length)
  if (!isSameType(...args)) return false
  const [firstItem, ...otherItem] = args

  const typeOfAnItem = checkType(firstItem)

  switch (typeOfAnItem) {
    case DATATYPE.Number:
    case DATATYPE.Boolean:
    case DATATYPE.Null:
    case DATATYPE.Undefined:
    case DATATYPE.String:
      return otherItem.every((arg) => arg === firstItem)

    case DATATYPE.Date:
      if (!(firstItem instanceof Date)) return false
      const firstTime = firstItem.getTime()
      return otherItem.every(
        (arg) => arg instanceof Date && arg.getTime() === firstTime,
      )

    case DATATYPE.Function:
    case DATATYPE.GeneratorFunction:
      if (!(firstItem instanceof Function)) return false
      return otherItem.every((arg) => {
        if (!(arg instanceof Function)) return false
        if (arg === firstItem || arg.name === firstItem.name) return true
        return convertFn(arg) === convertFn(firstItem)
      })

    case DATATYPE.Object:
      if (!(firstItem instanceof Object)) return false
      const keysOfFirstItem = Object.keys(firstItem) as Array<keyof T>
      const firstKeysLength = keysOfFirstItem.length

      return otherItem.every((arg) => {
        if (!(arg instanceof Object)) return false
        const argKeys = Object.keys(arg)
        if (argKeys.length !== firstKeysLength) return false
        if (firstKeysLength === 0) return true

        return keysOfFirstItem.every((key) =>
          isEqual(arg[key] as any, firstItem[key]),
        )
      })

    case DATATYPE.Array:
      if (!(firstItem instanceof Array)) return false
      const firstLength = firstItem.length

      return otherItem.every((arg) => {
        if (!(arg instanceof Array)) return false
        if (arg.length !== firstLength) return false
        if (firstLength === 0) return true
        return firstItem.every((item, index) => isEqual(arg[index], item))
      })

    default:
      return false
  }
}
