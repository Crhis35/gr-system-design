import React from 'react';
import {
  SpacingType,
  AlignItemsType,
  FlexDirectionType,
  JustifyContentType,
  SizeType,
  PolymorphicComponentPropWithRef,
} from 'lib/types/theme';

/**
 * This is the updated component props using PolymorphicComponentPropWithRef
 */
export type BadgeProps<C extends React.ElementType> =
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
      type:
        | 'default'
        | 'icon'
        | 'badge'
        | 'largeBadge'
        | 'smClockBadge'
        | 'lgClockBadge'
        | 'smXBadge'
        | 'lgXBadge';
      colorTone?: 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100 | 50;
    }
  >;
