import React from 'react';
import {
  SpacingType,
  SizeType,
  PolymorphicComponentPropWithRef,
} from 'lib/types/theme';

type InputSizes = 'small' | 'regular' | 'large';

/**
 * This is the updated component props using PolymorphicComponentPropWithRef
 */
export type TextareaProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    {
      required?: boolean;
      placeholder?: string;

      value?: string;
      onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;

      name?: string;

      error?: boolean;

      success?: boolean;

      size?: InputSizes;
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
