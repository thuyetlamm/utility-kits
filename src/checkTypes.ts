import { DATATYPE } from "./types/common"

export const checkType = <T>(value:T)  =>
    Object.prototype.toString.call(value).slice(8, -1) as DATATYPE

export const isObject = <T>(value: T) => checkType(value) === DATATYPE.Object
export const isArray  = <T>(value: T) => checkType(value) === DATATYPE.Array
export const isNaN    = <T>(value: T) => checkType(value) === DATATYPE.NaN
export const isFunction = <T>(value: T) => checkType(value) === DATATYPE.Function
export const isNumber = <T>(value: T) => checkType(value) === DATATYPE.Number
export const isString = <T>(value: T) => checkType(value) === DATATYPE.String
export const isSymbol = <T>(value: T) => checkType(value) === DATATYPE.Symbol
export const isNull   = <T>(value: T) => checkType(value) === DATATYPE.Null
export const isUndefined   = <T>(value: T) => checkType(value) === DATATYPE.Undefined

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

