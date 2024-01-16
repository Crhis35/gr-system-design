import React from 'react';
import {
  SpacingType,
  AlignItemsType,
  FlexDirectionType,
  JustifyContentType,
  SizeType,
  PolymorphicComponentPropWithRef,
} from '../../types/theme';
import { Variants } from './button.styles';

/**
 * This is the updated component props using PolymorphicComponentPropWithRef
 */
export type StackProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    {
      variant: Variants;
      label?: string;
      bgColor?: string;
      path?: string;
      path2?: string;
      path3?: string;
      txtColor?: string;
      onchage?: () => void;
      onclick?: () => void;
      iconRight?: React.ReactNode;
      iconLeft?: React.ReactNode;
      Social?: string;
      component?: React.ElementType;
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
    }
  >;
