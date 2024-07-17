import isKey from "./isKey";
import stringToPath from "./stringToPath";
import {TKey} from "./memoize";


function castPath<T extends TKey>(value :T, object : object) : T | T[] {
    if (Array.isArray(value)) {
        return value
    }
    return isKey(value, object) ? [value] : stringToPath(value) as any
}

export default castPath