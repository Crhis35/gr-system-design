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
    width ? `w-${width}` : 'w-auto',
    height ? `h-${height}` : 'h-auto',
    spacing ? `gap-${direction === 'row' ? 'x' : 'y'}-${spacing}` : 'gap-x-4',
    align ? `items-${String(align).replace('flex-', '')}` : 'items-start',
    direction ? `flex-${direction.replace('column', 'col')}` : 'flex-row',
    justifyContent
      ? `justify-${justifyContent.replace('space-', '').replace('flex-', '')}`
      : 'justify-between',
    p ? `p-${p}` : 'p-0',
    m ? `m-${m}` : 'm-0',
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
