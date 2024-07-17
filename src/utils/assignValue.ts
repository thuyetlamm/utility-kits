
/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent.
 */

function baseAssignValue<T extends object,K extends keyof T>(object : T, key:K, value: T[K]) {
    if (key === '__proto__') {
        Object.defineProperty(object, key, {
            'configurable': true,
            'enumerable': true,
            'value': value,
            'writable': true
        })
    } else {
        object[key] = value
    }
}

function eq<T>(value :T, other :T) {
    return value === other || (value !== value && other !== other);
}


function assignValue<T extends object,K extends keyof T>(object :T, key : K, value : T[K]) {
    const objValue = object[key]

    if (!(hasOwnProperty.call(object, key) && eq(objValue, value))) {
        if (value !== 0 || (1 / Number(value)) === (1 / Number(objValue))) {
            baseAssignValue(object, key, value)
        }
    } else if (value === undefined && !(key in object)) {
        baseAssignValue(object, key, value)
    }
}

export default assignValue