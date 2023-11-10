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
export type RadioProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    {
      required?: boolean;
      placeholder?: string;

      value?: string;
      onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

      label?: string;
      name?: string;

      error?: boolean;
      errorMessage?: boolean;

      success?: boolean;

      helperText: React.ElementType;

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
