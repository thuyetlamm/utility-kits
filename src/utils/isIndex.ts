import {checkTypes} from "../index";

/** Used as references for various `Number` constants. */
const MAX_SAFE_INTEGER = 9007199254740991

/** Used to detect unsigned integer values. */
const reIsUint = /^(?:0|[1-9]\d*)$/


function isIndex<T extends string | symbol | number>(value :T, length : number = MAX_SAFE_INTEGER) : boolean {

    return !!length &&
        (checkTypes.isNumber(value as number) ||
            (!checkTypes.isSymbol(value as string) && reIsUint.test(value as string))) &&
        (Number(value) > -1 && Number(value) % 1 === 0 && Number(value) < length)
}


export default isIndex