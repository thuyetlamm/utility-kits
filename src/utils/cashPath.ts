import isKey from "./isKey";
import stringToPath from "./stringToPath";
import { TKey } from "./memoize";

type ReturnCashPath<T> = T | T[]

function castPath<T extends TKey>(value :T, object : object) : ReturnCashPath<T> {
    if (Array.isArray(value)) {
        return value
    }
    return isKey(value, object) ? [value] : stringToPath(value) as ReturnCashPath<T>
}

export default castPath