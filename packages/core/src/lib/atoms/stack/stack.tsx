import React, { ElementType } from 'react';

import clsx from 'clsx';

import { StackProps } from './stack.model';

export default function Stack<C extends ElementType = 'div'>(
  props: StackProps<C>,
) {
  const {
    spacing,
    align,
    justifyContent,
    direction,
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
    as,
    component: Wrapper,
    className,
    ...rest
  } = props;

  const Component = as || 'div';

  const stackClasses = clsx(
    'flex',
    'w-full',
    'flex-start',
    'justify-between',
    'space-x-4',
    spacing && `space-${direction === 'row' ? 'x' : 'y'}-${spacing}`,
    align && `items-${String(align).replace('flex-', '')}`,
    direction ? `flex-${direction.replace('column', 'col')}` : 'flex-row	',
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
    className,
  );

  return (
    <Component className={stackClasses} {...rest}>
      {React.Children.map(children, (child, index) =>
        Wrapper ? <Wrapper key={index}>{child}</Wrapper> : <>{child}</>,
      )}
    </Component>
  );
}
