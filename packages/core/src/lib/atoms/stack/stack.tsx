import React, { PropsWithChildren } from 'react';

import clsx from 'clsx';

import { StackProps } from './stack.model';

export default function Stack(props: PropsWithChildren<Partial<StackProps>>) {
  const {
    spacing = '4',
    align = 'flex-start',
    justifyContent = 'flex-start',
    direction = 'column',
    children,
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
    as: Component = 'div',
  } = props;

  const stackClasses = clsx(
    'flex',
    `space-${direction === 'row' ? 'y' : 'x'}-${spacing}`,
    align && `items-${align.replace('flex-', '')}`,
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
    center && `items-center justify-center`
  );
  return (
    <Component className={stackClasses}>
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className={`${
            direction === 'column' || direction === 'column-reverse'
              ? 'mb'
              : 'mr'
          }-${spacing}`}
        >
          {child}
        </div>
      ))}
    </Component>
  );
}
