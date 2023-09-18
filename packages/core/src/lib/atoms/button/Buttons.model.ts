import React from 'react';
import {
  SpacingType,
  AlignItemsType,
  FlexDirectionType,
  JustifyContentType,
  SizeType,
  PolymorphicComponentPropWithRef,
} from '../../types/theme';

/**
 * This is the updated component props using PolymorphicComponentPropWithRef
 */
export type StackProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    {
      label?: string; 
      bgColor?: string; 
      txtColor?: string; 
      iconRight?: React.ReactNode;
      iconLeft?: React.ReactNode;
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