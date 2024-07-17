import { DATATYPE } from './types/common.js';

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

export { checkTypeInstance as default };
