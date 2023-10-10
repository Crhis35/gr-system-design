import React from 'react';
import {
  SpacingType,
  SizeType,
  PolymorphicComponentPropWithRef,
} from '../../types/theme';

/**
 * This is the updated component props using PolymorphicComponentPropWithRef
 */
export type CardProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    {
      clickable?: boolean;

      title: string;
      content: string;
      image?: string;
      more?: React.ReactNode;
      to?: string;

      icon?: React.ElementType;

      width?: SizeType;
      height?: SizeType;
      center?: boolean;

      m?: SpacingType;
      mx?: SpacingType;
      my?: SpacingType;
      mr?: SpacingType;
      mt?: SpacingType;
      mb?: SpacingType;
      ml?: SpacingType;
    }
  >;
