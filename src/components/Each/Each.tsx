import React, { Children, Fragment } from 'react'
import Show from "../Show/Show";

interface DataListProps<T> {
    list: T[]
    render: (item: T, index: number) => React.ReactNode
    empty?: React.ReactNode
}

const DataList = <T,>({ list, render, empty }: DataListProps<T>) => {
    return (
        <Fragment>
            {
                <Show>
                    <Show.When isTrue={Array.isArray(list) && list.length > 0}>{Children.toArray(list.map(render))}</Show.When>
                    <Show.Else>{empty}</Show.Else>
                </Show>
            }
        </Fragment>
    )
}

export default DataList
