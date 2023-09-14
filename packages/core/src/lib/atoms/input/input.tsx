import React, { ChangeEvent, ElementType, useState } from 'react';

import { InputProps } from './input.model';
import clsx from 'clsx';

export default function Stack<C extends ElementType = 'div'>(
  props: InputProps<C>,
) {
  const {
    required = false,
    placeholder = '',

    value = '',
    onChange,

    error,
    errorMessage,

    success,

    label = '',
    name = '',

    helperText: HelperText,

    size = 'small',

    m,
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
    icon: Icon,
    ...rest
  } = props;

  const [inputValue, setInputValue] = useState(value);

  const sizeClasses =
    size === 'regular'
      ? 'p-2.5 text-sm'
      : size === 'large'
      ? 'p-4 sm:text-md'
      : 'p-2 sm:text-xs';

  const inputClasses = clsx(
    'ring-0',
    'outline-0',
    'border',

    'dark:bg-gray-700',

    !error && !success && 'bg-gray-50',
    !error && !success && 'border-gray-300',
    !error && !success && 'text-gray-900',

    !error && !success && 'focus:border-primary-30',

    !error && !success && 'dark:border-gray-30',
    !error && !success && 'dark:text-gray-400',

    'rounded-lg',
    'focus:ring-0',
    'block',
    'w-full',

    sizeClasses,

    Icon && 'pl-10',

    m && `m-${m}`,
    mx && `mx-${mx}`,
    my && `my-${my}`,
    mr && `mr-${mr}`,
    mt && `mt-${mt}`,
    mb && `mb-${mb}`,
    ml && `ml-${ml}`,
    width && `w-${width}`,
    height && `h-${height}`,

    error && 'bg-error-50',
    error && 'border-error-500',
    error && 'text-error-600',
    error && 'dark:text-error-500',
    error && 'dark:border-error-500',

    success && 'bg-success-50',
    success && 'border-success-500',
    success && 'text-success-600',
    success && 'dark:text-success-500',
    success && 'dark:border-success-500',
  );

  const closeIconClasses = clsx(
    'w-2 h-2 ',
    !error && !success && 'text-gray-500',
    !error && !success && 'dark:text-gray-400',
    error && !success && 'text-error-500',
    error && !success && 'dark:text-error-500',
    success && !error && 'text-success-500',
  );

  const iconClasses = clsx(
    'absolute inset-y-0 left-1 flex items-center pl-3.5 pointer-events-none',
    !error && !success && 'text-gray-500',
    !error && !success && 'dark:text-gray-400',
    error && !success && 'text-error-500',
    success && !error && 'text-success-500',
  );

  const helperTextClasses = clsx(
    'mt-2 text-sm ',

    !error && !success && 'text-gray-500',
    !error && !success && 'dark:text-gray-400',
    error && !success && 'text-error-500',
    success && !error && 'text-success-500',
    error && !success && 'dark:text-error-500',
    success && !error && 'dark:text-success-500',
  );

  const CloseIcon = () => (
    <svg
      className={closeIconClasses}
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 14 14'
    >
      <path
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'
        d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
      />
    </svg>
  );

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const onClickDelete = () => setInputValue('');

  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          {label}
        </label>
      )}
      <div className='relative'>
        <div className={iconClasses}>{Icon && <Icon />}</div>

        {inputValue && (
          <button
            onClick={onClickDelete}
            className='absolute ring-0 inset-y-0 right-1 flex items-center pr-3.5'
          >
            <CloseIcon />
          </button>
        )}

        <input
          name={name}
          id={name}
          type='email'
          className={inputClasses}
          placeholder={placeholder}
          required={required}
          value={inputValue}
          onChange={onChange ? onChange : onChangeInput}
          {...rest}
        />
      </div>
      test
      {HelperText && !errorMessage && (
        <p id='helper-text-explanation' className={helperTextClasses}>
          <HelperText />
        </p>
      )}
      {error && (
        <p
          id='helper-text-explanation'
          className='mt-2 text-sm text-error-500 dark:text-red-500'
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
