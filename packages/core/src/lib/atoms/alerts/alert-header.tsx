import React, { ElementType } from 'react';
import { AlertHeaderProps } from './alert.model';
import clsx from 'clsx';

export default function AlertHeader<C extends ElementType = 'div'>(
  props: AlertHeaderProps<C>,
) {
  const { title, description, icon, className, children, ...rest } = props;

  return (
    <div className={clsx('flex', 'items-center', className)} {...rest}>
      {children ? (
        children
      ) : (
        <>
          {icon ? icon : null}
          {title ? <span className="sr-only">{title}</span> : null}
          {description ? (
            <h3 className="text-lg font-medium">{description}</h3>
          ) : null}
        </>
      )}
    </div>
  );
}
