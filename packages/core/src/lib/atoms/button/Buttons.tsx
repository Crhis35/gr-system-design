import React, { ElementType } from 'react';

import clsx from 'clsx';

import { StackProps } from './Buttons.model';

export default function AtomButton<C extends ElementType = 'button'>(
  props: StackProps<C>,
) {
    const {
      label,
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
  );

  


  return (
    
    <button type="button"
    
    className={`text-gray-900 bg-${label} hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 ${stackClasses}`}
      >
      {props.iconLeft}
      <span className="p-1">{props.label}</span>
        {props.iconRight}
  
    </button>
  );
}

