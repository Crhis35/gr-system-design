import type { Property } from 'csstype';

export type SpacingType = string | number;
export type FlexDirectionType = Property.FlexDirection;
export type AlignItemsType = Property.AlignItems;
export type JustifyContentType = Property.JustifyContent;
export type SizeType = number | 'full' | 'screen' | 'max' | 'min' | 'fit';

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

// This is the first reusable type utility we built
type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = NonNullable<unknown>,
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

// This is a new type utitlity with ref!
export type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = NonNullable<unknown>,
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

// This is the type for the "ref" only
type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];
