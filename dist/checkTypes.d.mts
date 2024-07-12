declare const checkTypeInstance: {
    isObject: (value: unknown) => boolean;
    isArray: (value: unknown) => boolean;
    isNaN: (value: unknown) => boolean;
    isFunction: (value: unknown) => boolean;
    checkType: (value: unknown) => string;
};

export { checkTypeInstance as default };
