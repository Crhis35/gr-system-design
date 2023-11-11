import type { Property } from 'csstype';

export type SpacingType = string | number;
export type FlexDirectionType = Property.FlexDirection;
export type AlignItemsType = Property.AlignItems;
export type JustifyContentType = Property.JustifyContent;
export type SizeType = number | 'full' | 'screen' | 'max' | 'min' | 'fit';
export type InputSizes = 'small' | 'regular' | 'large';

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

export const palette = {
  colors: {
    gray: {
      30: '#7D8283',
      50: '#F9FAFB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      700: '#374151',
      900: '#111928',
    },
    primary: {
      100: '#59E0E2',
      200: '#50CACB',
      300: '#47B3B5',
      400: '#3E9D9E',
      500: '#358688',
      600: '#245A5A',
      700: '#122D2D',
    },
    secondary: {
      100: '#262930',
      200: '#43474C',
      300: '#606567',
      400: '#7D8283',
      500: '#358688',
      600: '#B6BAB9',
      700: '#D3D6D5',
    },
    success: {
      50: '#F3FAF7',
      500: '#0E9F6E',
      600: '#057A55',
      700: '#046C4E',
    },
    error: {
      50: '#FDF2F2',
      500: '#F05252',
      600: '#E02424',
      700: '#C81E1E',
    },
  },
};
