import React, { ElementType } from 'react';

import clsx from 'clsx';
import { AlertBodyProps } from './alert.model';

export default function AlertBody<C extends ElementType = 'div'>(
  props: AlertBodyProps<C>,
) {
  const { children, className, ...rest } = props;
  return (
    <div className={clsx('mt-2 mb-4 text-sm', className)} {...rest}>
      {children}
    </div>
  );
}
