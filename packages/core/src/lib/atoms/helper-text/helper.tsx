import React, { ElementType } from 'react';

import { HelperTextProps } from './helper.model';
import clsx from 'clsx';

export default function HelperText<C extends ElementType = 'p'>(
  props: HelperTextProps<C>,
) {
  const {
    error,

    success,

    helperText: HelperText,

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

  const helperTextClasses = clsx(
    'focus:ring-0',
    'focus:outline-0',

    !error && !success && 'bg-gray-50',
    !error && !success && 'border-gray-300',
    !error && !success && 'text-gray-900',

    !error && !success && 'focus:border-primary-30',

    !error && !success && 'dark:bg-gray-700',
    !error && !success && 'dark:border-gray-30',
    !error && !success && 'dark:text-gray-400',

    'rounded',
    // 'focus:ring-0',
    'block',

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

    error && 'bg-error-50',
    error && 'border-error-500',
    error && 'text-error-600',
    error && 'dark:text-error-500',
    error && 'dark:border-error-500',

    success && 'bg-success-50',
    success && 'border-success-500',
    success && 'text-success-600',
    success && 'dark:text-success-500',
    success && 'dark:border-success-500',
  );

  return (
    <p className={helperTextClasses}>
      <HelperText />
    </p>
  );
}
