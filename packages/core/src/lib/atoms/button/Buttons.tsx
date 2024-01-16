import React, { ElementType } from 'react';

import clsx from 'clsx';

import { StackProps } from './buttons.model';
import { variants } from './button.styles';

export default function Button<C extends ElementType = 'div'>(
  props: StackProps<C>,
) {
  const {
    bgColor,
    variant,
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

    // component: Wrapper,

    // ...rest
  } = props;

  const stackClasses = clsx(
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
    bgColor && `bg-${bgColor}`,
    variant && variants[variant],
  );

  return (
    <button
      type="button"
      onClick={props.onclick}
      onChange={props.onchage}
      className={`${stackClasses} `}
    >
      {props.iconLeft}
      <span className="p-1">{props.label}</span>
      {props.iconRight}
    </button>
  );
}
