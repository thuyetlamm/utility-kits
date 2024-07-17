import { checkTypes } from   "./index"
import {NestedKeyOf, NestedKeyValue} from "./types/get";
import baseSet from "./utils/baseSet";



const set = <T extends object,K extends NestedKeyOf<T>>(object : T, path : K, value :NestedKeyValue<T, K>) =>  {
    if(!object || !checkTypes.isObject(object)) return object
    return checkTypes.isNull(object) ? object : baseSet(object, path as any, value);

}

export default set;