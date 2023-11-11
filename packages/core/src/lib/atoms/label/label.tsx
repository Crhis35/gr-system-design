import React, { ElementType } from 'react';

import { LabelProps } from './label.model';
import clsx from 'clsx';

export default function Label<C extends ElementType = 'label'>(
  props: LabelProps<C>,
) {
  const {
    error,
    success,
    text,
    name = '',

    size = 'small',

    m,
    mx,
    my,
    mr,
    mt,
    mb,
    ml,
    width,
    height,
  } = props;

  const sizeClasses =
    size === 'regular'
      ? 'p-2.5 text-sm'
      : size === 'large'
      ? 'p-4 sm:text-md'
      : 'p-2 sm:text-xs';

  const lableClasses = clsx(
    'mt-2 text-sm',

    !error && !success && 'text-gray-900',
    !error && !success && 'dark:text-gray-400',

    'block',
    'w-full',

    sizeClasses,

    m && `m-${m}`,
    mx && `mx-${mx}`,
    my && `my-${my}`,
    mr && `mr-${mr}`,
    mt && `mt-${mt}`,
    mb && `mb-${mb}`,
    ml && `ml-${ml}`,
    width && `w-${width}`,
    height && `h-${height}`,

    error && 'text-error-600',
    error && 'dark:text-error-500',

    success && 'text-success-600',
    success && 'dark:text-success-500',
  );
  return (
    <label htmlFor={name} className={lableClasses}>
      {text}
    </label>
  );
}
