/* eslint-disable @typescript-eslint/ban-types */
import * as React from "react"

type BaseProps<M extends OverridableTypeMap> = M["props"]

interface OverridableTypeMap {
  props: {}
  defaultComponent: React.ElementType
}

type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never

type DefaultComponentProps<M extends OverridableTypeMap> = BaseProps<M> &
  DistributiveOmit<
    React.ComponentPropsWithRef<M["defaultComponent"]>,
    keyof BaseProps<M>
  >

export type OverrideProps<
  M extends OverridableTypeMap,
  C extends React.ElementType,
> = BaseProps<M> &
  DistributiveOmit<React.ComponentPropsWithRef<C>, keyof BaseProps<M>>

export interface OverridableComponent<M extends OverridableTypeMap> {
  <C extends React.ElementType>(
    props: {
      component: C
    } & OverrideProps<M, C>,
  ): React.JSX.Element | null
  (props: DefaultComponentProps<M>): React.JSX.Element | null
  propTypes?: any
}

export interface BoxTypeMap<
  AdditionalProps = {},
  RootComponent extends React.ElementType = "div",
> {
  props: AdditionalProps
  defaultComponent: RootComponent
}

export type BoxProps<
  RootComponent extends React.ElementType = BoxTypeMap["defaultComponent"],
  AdditionalProps extends Record<string, unknown> = {},
> = OverrideProps<BoxTypeMap<AdditionalProps, RootComponent>, RootComponent>

export type SlotCommonProps = {
  component?: React.ElementType
}

export type SlotComponentProps<
  TSlotComponent extends React.ElementType,
  TOverrides,
  TOwnerState,
> =
  | (Partial<React.ComponentPropsWithRef<TSlotComponent>> & TOverrides)
  | ((
      ownerState: TOwnerState,
    ) => Partial<React.ComponentPropsWithRef<TSlotComponent>> & TOverrides)

export type SlotProps<
  TSlotComponent extends React.ElementType,
  TOverrides,
  TOwnerState,
> = SlotComponentProps<
  TSlotComponent,
  SlotCommonProps & TOverrides,
  TOwnerState
>

export type CreateSlotsAndSlotProps<
  Slots,
  K extends Record<keyof Slots, any>,
> = {
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: Partial<Slots>
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps?: {
    [P in keyof K]?: K[P]
  }
}

export type CreateSlot<Slots extends string> = Record<Slots, React.ElementType>

export type Overwrite<T, U> = DistributiveOmit<T, keyof U> & U

export type GenerateStringUnion<T> = Extract<
  {
    [Key in keyof T]: true extends T[Key] ? Key : never
  }[keyof T],
  string
>
