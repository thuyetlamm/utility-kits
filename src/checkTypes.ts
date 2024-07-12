import { DATATYPE } from "./types/common"

const checkType = (value: unknown) =>
    Object.prototype.toString.call(value).slice(8, -1)

const isObject = (value: unknown) => checkType(value) === DATATYPE.Object
const isArray = (value: unknown) => checkType(value) === DATATYPE.Array
const isNaN = (value: unknown) => checkType(value) === DATATYPE.NaN
const isFunction = (value: unknown) => checkType(value) === DATATYPE.Function
const isNumber = (value: unknown) => checkType(value) === DATATYPE.Number
const isString= (value: unknown) => checkType(value) === DATATYPE.String

const checkTypeInstance = {
    isObject,
    isArray,
    isNaN,
    isFunction,
    checkType,
    isString,
    isNumber
}
export default checkTypeInstance
