type Nullable<T> = T | null;
declare enum DATATYPE {
    Number = "Number",
    String = "String",
    Array = "Array",
    Boolean = "Boolean",
    Object = "Object",
    Null = "Null",
    Undefined = "Undefined",
    Function = "Function",
    NaN = "NaN"
}

export { DATATYPE, type Nullable };
