import { isArray, isString } from "./checkTypes";

const isEmpty = <T>(val: T) => {

    if(!val) return true;

    // Check for an empty array
    if(isArray(val) && val instanceof Array) {
        return !val.length;
    }
    // Check for an empty string or array

    if (isString(val) && val instanceof String) return !(val.trim().length === 0)

    // Check for an empty Map or Set

    if(val instanceof Map || val instanceof Set) {
        return !val.size
    }

    return !Object.keys(val ?? {}).length
}
export default isEmpty
