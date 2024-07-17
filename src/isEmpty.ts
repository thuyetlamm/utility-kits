import {checkTypes} from "./index";

const isEmpty = <T>(val: T) => {

    if(!val) return true;

    // Check for an empty array
    if(checkTypes.isArray(val) && val instanceof Array) {
        return !val.length;
    }
    // Check for an empty string or array

    if (checkTypes.isString(val) && val instanceof String) return !(val.trim().length === 0)

    // Check for an empty Map or Set

    if(val instanceof Map || val instanceof Set) {
        return !val.size
    }

    return !Object.keys(val ?? {}).length
}
export default isEmpty
