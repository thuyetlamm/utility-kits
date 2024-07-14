import React from 'react';

interface DataListProps<T> {
    list: T[];
    render: (item: T, index: number) => React.ReactNode;
    empty?: React.ReactNode;
}
declare const DataList: <T>({ list, render, empty }: DataListProps<T>) => React.JSX.Element;

export { DataList as default };
