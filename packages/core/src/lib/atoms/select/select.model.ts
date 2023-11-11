import React from 'react';
import {
  SpacingType,
  SizeType,
  InputSizes,
  PolymorphicComponentPropWithRef,
} from 'lib/types/theme';
import { ActionMeta, MultiValue, SingleValue } from 'react-select';
import { getVariants } from './select.style';

/**
 * This is the updated component props using PolymorphicComponentPropWithRef
 */

export interface SelectItemOption<T> {
  label: string;
  value: T;
}

export type SelectItemValue<T> =
  | SingleValue<SelectItemOption<T>>
  | MultiValue<SelectItemOption<T>>;

export type SelectVariants<T> = keyof ReturnType<typeof getVariants<T>>;

export type SelectProps<T> = PolymorphicComponentPropWithRef<
  'select',
  {
    required?: boolean;
    variant?: SelectVariants<T>;
    label?: React.ReactNode;
    value: SelectItemValue<T>;
    options: SelectItemOption<T>[];
    onChange?: (
      newValue: SelectItemValue<T>,
      actionMeta: ActionMeta<SelectItemOption<T>>,
    ) => void;

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
