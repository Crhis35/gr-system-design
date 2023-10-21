import React, { ReactNode } from 'react';
import {
  SpacingType,
  AlignItemsType,
  FlexDirectionType,
  JustifyContentType,
  SizeType,
  PolymorphicComponentPropWithRef,
} from 'lib/types/theme';
import { variants } from './alert.styles';

/**
 * This is the updated component props using PolymorphicComponentPropWithRef
 */
export type AlertProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    {
      spacing?: SpacingType;
      align?: AlignItemsType;
      direction?: FlexDirectionType;
      justifyContent?: JustifyContentType;
      width?: SizeType;
      height?: SizeType;
      center?: boolean;
      p?: SpacingType;
      m?: SpacingType;
      px?: SpacingType;
      py?: SpacingType;
      pr?: SpacingType;
      pt?: SpacingType;
      pb?: SpacingType;
      pl?: SpacingType;
      mx?: SpacingType;
      my?: SpacingType;
      mr?: SpacingType;
      mt?: SpacingType;
      mb?: SpacingType;
      ml?: SpacingType;
      text?: string;
      color?:
        | 'primary'
        | 'gray'
        | 'blue'
        | 'red'
        | 'orange'
        | 'yellow'
        | 'green'
        | 'teal'
        | 'indigo'
        | 'purple'
        | 'pink'
        | 'bg-teal-600';
      variant: keyof typeof variants;
      colorTone?: 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100 | 50;
    }
  >;

export type AlertHeaderProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    {
      title?: ReactNode;
      icon?: ReactNode;
      description?: ReactNode;
    }
  >;

export type AlertBodyProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    {
      content?: ReactNode;
    }
  >;

export type AlertActionsProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    {
      content?: ReactNode;
    }
  >;

export type IAlertComponentType<C extends React.ElementType> = ((
  props: AlertProps<C>,
) => JSX.Element) & {
  Header: (props: AlertHeaderProps<C>) => JSX.Element;
  Body: (props: AlertBodyProps<C>) => JSX.Element;
  Actions: (props: AlertActionsProps<C>) => JSX.Element;
};
