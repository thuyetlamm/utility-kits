import React, { Children } from "react"
import Show from "../Show/Show"
import { get, isArray } from "../../index"

interface EachProps<T> {
  list: T[] | readonly T[]
  render: (item: T, index: number) => React.ReactNode
  empty?: React.ReactNode
}

const Each = <T,>({ list, render, empty }: EachProps<T>) => {
  if (!isArray(list)) {
    throw new Error("The provided argument is not an array.")
  }
  return (
    <Show>
      <Show.When isTrue={get(list, "length", 0) > 0}>
        {Children.toArray(list.map(render))}
      </Show.When>
      <Show.Else>{empty}</Show.Else>
    </Show>
  )
}

export default Each
