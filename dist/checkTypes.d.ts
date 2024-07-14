declare const checkTypeInstance: {
    isObject: (value: object) => boolean;
    isArray: (value: object) => boolean;
    isNaN: (value: number) => boolean;
    isFunction: (value: object) => boolean;
    checkType: (value: object | number | string) => string;
    isString: (value: string) => boolean;
    isNumber: (value: number) => boolean;
};

export { checkTypeInstance as default };
