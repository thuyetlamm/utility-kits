import { NestedKeyOf , NestedKeyValue } from "./types/get";
import baseSet from "./utils/baseSet";
import { isFunction, isNull, isObject } from "./checkTypes";




// The main type you want to create
type ValueType<T extends object, K> =
    | NestedKeyValue<T, K>  // Pre-calculated value for the nested path
    | (() => NestedKeyValue<T, K>); // Function that returns the value


const set = <T extends object,K extends NestedKeyOf<T>>(object : T, path : K, value :ValueType<T,K>) =>  {
    if(!isObject(object) || isNull(object)) return object

    if(isFunction(value) && value instanceof Function){
        const currentValue = value()
        return baseSet(object, path as NestedKeyOf<T>, currentValue as NestedKeyValue<T, NestedKeyOf<T>>);
    }
    return baseSet(object, path as NestedKeyOf<T>, value as NestedKeyValue<T, NestedKeyOf<T>>);
}



export default set;



