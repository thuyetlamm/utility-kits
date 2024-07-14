import { DATATYPE } from "./types/common"

const checkType = (value: object | number | string) =>
    Object.prototype.toString.call(value).slice(8, -1)

const isObject = (value: object) => checkType(value) === DATATYPE.Object
const isArray = (value: object) => checkType(value) === DATATYPE.Array
const isNaN = (value: number) => checkType(value) === DATATYPE.NaN
const isFunction = (value: object) => checkType(value) === DATATYPE.Function
const isNumber = (value: number) => checkType(value) === DATATYPE.Number
const isString= (value: string) => checkType(value) === DATATYPE.String

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

