import { DATATYPE } from './types/common.mjs';

declare const checkType: <T>(value: T) => DATATYPE;
declare const isObject: <T>(value: T) => boolean;
declare const isArray: <T>(value: T) => boolean;
declare const isNaN: <T>(value: T) => boolean;
declare const isFunction: <T>(value: T) => boolean;
declare const isNumber: <T>(value: T) => boolean;
declare const isString: <T>(value: T) => boolean;
declare const isSymbol: <T>(value: T) => boolean;
declare const isNull: <T>(value: T) => boolean;
declare const isUndefined: <T>(value: T) => boolean;
declare const checkTypeInstance: {
    isObject: <T>(value: T) => boolean;
    isArray: <T>(value: T) => boolean;
    isNaN: <T>(value: T) => boolean;
    isFunction: <T>(value: T) => boolean;
    checkType: <T>(value: T) => DATATYPE;
    isString: <T>(value: T) => boolean;
    isNumber: <T>(value: T) => boolean;
    isSymbol: <T>(value: T) => boolean;
    isNull: <T>(value: T) => boolean;
    isUndefined: <T>(value: T) => boolean;
};

export { checkType, checkTypeInstance as default, isArray, isFunction, isNaN, isNull, isNumber, isObject, isString, isSymbol, isUndefined };
