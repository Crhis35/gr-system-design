import React, { ElementType } from 'react';

import clsx from 'clsx';

import { AlertProps } from './alert.model';
import { variants } from './alert.styles';

export default function Alert<C extends ElementType = 'span'>(
  props: AlertProps<C>,
) {
  const {
    spacing = '4',
    align = 'flex-start',
    justifyContent = 'flex-start',
    direction = 'column',
    color,
    variant,
    colorTone,
    p,
    m,
    px,
    py,
    pr,
    pt,
    pb,
    pl,
    mx,
    my,
    mr,
    mt,
    mb,
    ml,
    width,
    height,
    center,
    className,
    children,
    ...rest
  } = props;

  const alertClasses = clsx(
    'flex',
    `space-${direction === 'row' ? 'x' : 'y'}-${spacing}`,
    align && `items-${String(align).replace('flex-', '')}`,
    `flex-${direction.replace('column', 'col')}`,
    justifyContent &&
      `justify-${justifyContent.replace('space-', '').replace('flex-', '')}`,
    p && `p-${p}`,
    m && `m-${m}`,
    px && `px-${px}`,
    py && `py-${py}`,
    pr && `pr-${pr}`,
    pt && `pt-${pt}`,
    pb && `pb-${pb}`,
    pl && `pl-${pl}`,
    mx && `mx-${mx}`,
    my && `my-${my}`,
    mr && `mr-${mr}`,
    mt && `mt-${mt}`,
    mb && `mb-${mb}`,
    ml && `ml-${ml}`,
    width && `w-${width}`,
    height && `h-${height}`,
    center && `items-center justify-center`,
    color && `bg-${color}-${colorTone}`,
  );
  return (
    <div
      className={clsx(
        'flex flex-col',
        variants[variant],
        alertClasses,
        className,
      )}
      role="alert"
      {...rest}
    >
      {children}
    </div>
  );
}
