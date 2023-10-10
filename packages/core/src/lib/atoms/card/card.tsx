import React, { ElementType } from 'react';

import { CardProps } from './card.model';

export default function Input<C extends ElementType = 'div'>(
  props: CardProps<C>,
) {
  const {
    title,
    content,
    image,
    more,
    clickable,
    to,

    m,
    mx,
    my,
    mr,
    mt,
    mb,
    ml,
    width,
    height,
    type = 'text',
    icon: Icon,
    ...rest
  } = props;

  const Component = clickable ? 'a' : 'div';

  return (
    <Component
      className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
      href={to}
      {...rest}
    >
      {image && (
        <div>
          <img className='rounded-t-lg' src={image} alt='card image' />
        </div>
      )}

      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h5>
        <p className='font-normal text-gray-700 dark:text-gray-400 mb-2'>
          {content}
        </p>
        {more && more}
      </div>
    </Component>
  );
}
