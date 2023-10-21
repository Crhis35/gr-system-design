import clsx from 'clsx';
import React, { ElementType } from 'react';

import { AlertActionsProps } from './alert.model';

export default function AlertActions<C extends ElementType = 'div'>(
  props: AlertActionsProps<C>,
) {
  const { className, content, children, ...rest } = props;
  return (
    <div className={clsx('flex', className)} {...rest}>
      {content || children}
    </div>
  );
}
