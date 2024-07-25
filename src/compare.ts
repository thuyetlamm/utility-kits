import { isNaN } from "./checkTypes"

const message =
  "Invalid input: The result of the operation is NaN (Not a Number). Please ensure that all provided values are valid numbers."

const gte = (value: number, other: number) => {
  const convertValue = Number(value)
  const convertOther = Number(other)
  if (isNaN(convertOther + convertValue)) throw message
  return convertValue >= convertOther
}

const gt = (value: number, other: number) => {
  const convertValue = Number(value)
  const convertOther = Number(other)
  if (isNaN(convertOther + convertValue)) throw message
  return convertValue > convertOther
}
const lte = (value: number, other: number) => {
  const convertValue = Number(value)
  const convertOther = Number(other)
  if (isNaN(convertOther + convertValue)) throw message
  return convertValue <= convertOther
}
const lt = (value: number, other: number) => {
  const convertValue = Number(value)
  const convertOther = Number(other)
  if (isNaN(convertOther + convertValue)) throw message
  return convertValue < convertOther
}

// const isEqual = () => {
//
// }

const compareInstance = {
  gte,
  lt,
  lte,
  gt,
}

export default compareInstance
