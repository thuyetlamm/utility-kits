import {NestedKeyOf, NestedKeyValue} from "./types/get";
import baseSet from "./utils/baseSet";
import { isNull, isObject } from "./checkTypes";



const set = <T extends object,K extends NestedKeyOf<T>>(object : T, path : K, value :NestedKeyValue<T, K>) =>  {
    if(!object || !isObject(object)) return object
    return isNull(object) ? object : baseSet(object, path as any, value);
}


export default set;