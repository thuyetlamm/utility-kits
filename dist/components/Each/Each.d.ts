import React from 'react';

interface EachProps<T> {
    list: T[] | readonly T[];
    render: (item: T, index: number) => React.ReactNode;
    empty?: React.ReactNode;
}
declare const Each: <T>({ list, render, empty }: EachProps<T>) => React.JSX.Element;

export { Each as default };
