import React, { ElementType } from 'react';

import clsx from 'clsx';

import { IndicatorProps } from './indicator.model';

export default function Indicator<C extends ElementType = 'span'>(
  props: IndicatorProps<C>,
) {
  const {
    spacing = '4',
    align = 'flex-start',
    justifyContent = 'flex-start',
    direction = 'column',
    text,
    color,
    type,
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
  } = props;

  const indicatorClasses = clsx(
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
    type === 'default' &&
      'items-center justify-center bg-red-500 w-6 h-6 text-xs font-bold text-white  rounded-full',
    type === 'icon' &&
      'w-6 h-6 text-xs font-bold text-white  dark:bg-primary-900 rounded-full',
  );
  if (type === 'default') {
    return (
      <span className={clsx(indicatorClasses, 'dark:bg-red-500')}>
        {text || ' '}
      </span>
    );
  }
  if (type === 'icon') {
    return (
      <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ">
        <svg
          className={indicatorClasses}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="-5 0 26 11"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>
      </div>
    );
  }

  if (type === 'badgeAvailable') {
    return (
      <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
        <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
        Indicator text
      </span>
    );
  }

  if (type === 'badgeUnavailable') {
    return (
      <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
        <span className="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
        Indicator text
      </span>
    );
  }

  if (type === 'legend') {
    return (
      <span className="inline-flex items-center dark:text-white  text-xs font-medium rounded-full ">
        <span
          className={`w-2 h-2 mr-1 bg-${color}-${colorTone} dark:bg-${color}-${colorTone}  rounded-full`}
        ></span>
        Indicator text
      </span>
    );
  }

  if (type === 'stepper') {
    return (
      <div className="flex items-center">
        <div className="z-10 flex items-center justify-center w-6 h-6 bg-primary-200 rounded-full  dark:bg-primary-900">
          <span className="flex w-3 h-3 dark:bg-teal-600 bg-teal-600 rounded-full"></span>
        </div>
      </div>
    );
  }

  return <></>;
}
