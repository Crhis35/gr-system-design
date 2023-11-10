import React, { ChangeEvent, ElementType, useState } from 'react';

import { SelectProps } from './select.model';
import clsx from 'clsx';

export default function Select<C extends ElementType = 'div'>(
  props: SelectProps<C>,
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
    ...rest
  } = props;

  const [inputValue, setInputValue] = useState(value);

  const sizeClasses =
    size === 'regular'
      ? 'p-2.5 text-sm'
      : size === 'large'
      ? 'p-4 sm:text-md'
      : 'p-2 sm:text-xs';

  const selectClasses = clsx(
    'ring-0',
    'outline-0',
    'border',
    'flex',
    'flex-row',

    !error && !success && 'bg-gray-50',
    !error && !success && 'border-gray-300',
    !error && !success && 'text-gray-900',

    !error && !success && 'focus:border-primary-30',

    !error && !success && 'dark:bg-gray-700',
    !error && !success && 'dark:border-gray-30',
    !error && !success && 'dark:text-gray-400',

    'rounded-lg',
    'focus:ring-0',
    'block',
    'w-full',

    sizeClasses,

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

  const helperTextClasses = clsx(
    'mt-2 text-sm ',

    !error && !success && 'text-gray-500',
    !error && !success && 'dark:text-gray-400',
    error && !success && 'text-error-500',
    success && !error && 'text-success-500',
    error && !success && 'dark:text-error-500',
    success && !error && 'dark:text-success-500',
  );

  const onChangeInput = (e: ChangeEvent<HTMLSelectElement>) =>
    setInputValue(e.target.value);
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <select
          name={name}
          id={name}
          placeholder={placeholder}
          required={required}
          value={inputValue}
          onChange={onChange ? onChange : onChangeInput}
          className={selectClasses}
          {...rest}
        >
          <option className="h-10 bg-red-500">Choose a option</option>
        </select>
      </div>

      {HelperText && !errorMessage && (
        <p id="helper-text-explanation" className={helperTextClasses}>
          <HelperText />
        </p>
      )}

      {error && (
        <p
          id="helper-text-explanation"
          className="mt-2 text-sm text-error-500 dark:text-red-500"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
