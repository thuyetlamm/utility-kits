import { DATATYPE } from "./types/common"

const checkType = <T>(value:T)  =>
    Object.prototype.toString.call(value).slice(8, -1) as DATATYPE

const isObject = <T>(value: T) => checkType(value) === DATATYPE.Object
const isArray  = <T>(value: T) => checkType(value) === DATATYPE.Array
const isNaN    = <T>(value: T) => checkType(value) === DATATYPE.NaN
const isFunction = <T>(value: T) => checkType(value) === DATATYPE.Function
const isNumber = <T>(value: T) => checkType(value) === DATATYPE.Number
const isString = <T>(value: T) => checkType(value) === DATATYPE.String
const isSymbol = <T>(value: T) => checkType(value) === DATATYPE.Symbol
const isNull   = <T>(value: T) => checkType(value) === DATATYPE.Null
const isUndefined   = <T>(value: T) => checkType(value) === DATATYPE.Undefined

const checkTypeInstance = {
    isObject,
    isArray,
    isNaN,
    isFunction,
    checkType,
    isString,
    isNumber,
    isSymbol,
    isNull,
    isUndefined
}
export default checkTypeInstance

