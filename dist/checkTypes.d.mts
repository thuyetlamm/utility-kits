declare const checkTypeInstance: {
    isObject: (value: unknown) => boolean;
    isArray: (value: unknown) => boolean;
    isNaN: (value: unknown) => boolean;
    isFunction: (value: unknown) => boolean;
    checkType: (value: unknown) => string;
    isString: (value: unknown) => boolean;
    isNumber: (value: unknown) => boolean;
};

export { checkTypeInstance as default };
