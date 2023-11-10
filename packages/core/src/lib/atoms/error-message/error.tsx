import React, { ElementType } from 'react';

import { ErrorMessageProps } from './error.model';
import clsx from 'clsx';

export default function ErrorMessage<C extends ElementType = 'p'>(
  props: ErrorMessageProps<C>,
) {
  const {
    message,
    error = true,
    success,

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
      ? 'text-sm'
      : size === 'large'
      ? 'sm:text-md'
      : 'sm:text-xs';

  const pClasses = clsx(
    !error && !success && 'text-gray-900',

    !error && !success && 'dark:text-gray-400',

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

    error && 'text-error-600',
    error && 'dark:text-error-500',

    success && 'text-success-600',
    success && 'dark:text-success-500',
  );

  return <p className={pClasses}>{message}</p>;
}
