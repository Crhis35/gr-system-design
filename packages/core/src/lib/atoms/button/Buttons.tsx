import React, { ElementType } from 'react';

import clsx from 'clsx';

import { StackProps } from './Buttons.model';

export default function AtomButton<C extends ElementType = 'button'>(
  props: StackProps<C>,
) {
    const {
      // label,
      // iconLeft,
      // iconRight,
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

  const buttonStyle = {
    backgroundColor: props.bgColor,
  };


  return (
    
    <button type="button"
    style={buttonStyle}
    className={`text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 ${stackClasses}`}
      >
      {props.iconLeft}
      <span className="p-1">{props.label}</span>
        {props.iconRight}
  
    </button>
  );
}

//demostrcion de como se usa el boton
{/* <AtomButton 
        label="Button Text"
        iconLeft={(<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.40563 0.627216C7.62723 0.685616 7.81283 0.836802 7.91603 1.0424C8.30243 1.816 8.59123 2.28563 8.88163 2.66643C9.17603 3.05203 9.48642 3.36721 9.96002 3.84001C11.0528 4.93361 11.6 6.36802 11.6 7.80002C11.6 9.23202 11.0528 10.6664 9.96002 11.76C7.77282 13.9464 4.22723 13.9464 2.04003 11.76C0.947227 10.6664 0.400024 9.23202 0.400024 7.80002C0.400024 6.36802 0.947227 4.93361 2.04003 3.84001C2.26883 3.61121 2.61282 3.54321 2.91202 3.66721C3.21122 3.79041 3.40563 4.08243 3.40563 4.40563C3.40563 5.30163 3.46162 5.98403 3.72402 6.52883C3.86802 6.82803 4.09283 7.12084 4.48003 7.38244C4.57283 6.53364 4.74243 5.49923 4.97123 4.51843C5.15123 3.74563 5.37522 2.97442 5.64242 2.33122C5.77602 2.00882 5.92723 1.7032 6.09843 1.4384C6.26483 1.1808 6.47923 0.919243 6.75603 0.734443C6.94723 0.607243 7.18403 0.568016 7.40563 0.627216ZM7.69683 11.0968C6.76003 12.0344 5.24002 12.0344 4.30322 11.0968C3.83442 10.6288 3.60002 10.0144 3.60002 9.40002C3.60002 9.40002 4.30322 9.80002 5.60002 9.80002C5.60002 9.00002 6.00002 6.60002 6.60003 6.20002C7.00002 7.00002 7.22883 7.23444 7.69683 7.70324C8.16563 8.17124 8.40003 8.78562 8.40003 9.40002C8.40003 10.0144 8.16563 10.6288 7.69683 11.0968Z" fill="#1F2A37"/>
        </svg>)}
        iconRight={(<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.40563 0.627216C7.62723 0.685616 7.81283 0.836802 7.91603 1.0424C8.30243 1.816 8.59123 2.28563 8.88163 2.66643C9.17603 3.05203 9.48642 3.36721 9.96002 3.84001C11.0528 4.93361 11.6 6.36802 11.6 7.80002C11.6 9.23202 11.0528 10.6664 9.96002 11.76C7.77282 13.9464 4.22723 13.9464 2.04003 11.76C0.947227 10.6664 0.400024 9.23202 0.400024 7.80002C0.400024 6.36802 0.947227 4.93361 2.04003 3.84001C2.26883 3.61121 2.61282 3.54321 2.91202 3.66721C3.21122 3.79041 3.40563 4.08243 3.40563 4.40563C3.40563 5.30163 3.46162 5.98403 3.72402 6.52883C3.86802 6.82803 4.09283 7.12084 4.48003 7.38244C4.57283 6.53364 4.74243 5.49923 4.97123 4.51843C5.15123 3.74563 5.37522 2.97442 5.64242 2.33122C5.77602 2.00882 5.92723 1.7032 6.09843 1.4384C6.26483 1.1808 6.47923 0.919243 6.75603 0.734443C6.94723 0.607243 7.18403 0.568016 7.40563 0.627216ZM7.69683 11.0968C6.76003 12.0344 5.24002 12.0344 4.30322 11.0968C3.83442 10.6288 3.60002 10.0144 3.60002 9.40002C3.60002 9.40002 4.30322 9.80002 5.60002 9.80002C5.60002 9.00002 6.00002 6.60002 6.60003 6.20002C7.00002 7.00002 7.22883 7.23444 7.69683 7.70324C8.16563 8.17124 8.40003 8.78562 8.40003 9.40002C8.40003 10.0144 8.16563 10.6288 7.69683 11.0968Z" fill="#1F2A37"/>
        </svg>)}    
        bgColor="#9CA3AF"
        
      /> */}
