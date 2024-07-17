type Nullable<T> = T | null;
type Maybe<T> = T | undefined;
declare enum DATATYPE {
    Number = "Number",
    String = "String",
    Array = "Array",
    Boolean = "Boolean",
    Object = "Object",
    Null = "Null",
    Undefined = "Undefined",
    Function = "Function",
    NaN = "NaN",
    Symbol = "Symbol"
}

export { DATATYPE, type Maybe, type Nullable };
