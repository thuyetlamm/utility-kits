/* eslint-disable @typescript-eslint/ban-types */

import { ElementType, forwardRef, ReactNode, JSX } from "react"

import {
  BoxTypeMap,
  OverrideProps,
  OverridableComponent,
} from "../../types/element"

function BoxInner<C extends ElementType = BoxTypeMap["defaultComponent"]>(
  props: OverrideProps<BoxTypeMap<{}, C>, C> & {
    component?: C
    children?: React.ReactNode
  },
  ref: React.Ref<Element>,
) {
  const { component = "div", children, ...other } = props

  const Comp = component as React.ElementType

  return (
    <Comp ref={ref} {...other}>
      {children}
    </Comp>
  )
}

const BoxImpl = forwardRef(BoxInner) as <
  C extends ElementType = BoxTypeMap["defaultComponent"],
>(
  props: OverrideProps<BoxTypeMap<{}, C>, C> & {
    component?: C
    children?: ReactNode
  },
) => JSX.Element | null

export default BoxImpl as OverridableComponent<BoxTypeMap<{}>>
