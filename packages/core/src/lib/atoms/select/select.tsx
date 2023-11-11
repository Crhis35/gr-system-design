import React from 'react';

import clsx from 'clsx';
import ReactSelect, { ActionMeta } from 'react-select';

import { SelectItemOption, SelectItemValue, SelectProps } from './select.model';
import { getVariants } from './select.style';

export default function Select<T>(props: SelectProps<T>) {
  const {
    required = false,

    value,
    onChange,
    options,
    label,
    variant = 'primary',
    error,

    success,

    name = '',

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
  } = props;

  const [inputValue, setInputValue] = React.useState<SelectItemValue<T>>(value);

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

    sizeClasses,

    m && `m-${m}`,
    mx && `mx-${mx}`,
    my && `my-${my}`,
    mr && `mr-${mr}`,
    mt && `mt-${mt}`,
    mb && `mb-${mb}`,
    ml && `ml-${ml}`,
    width === 'full' ? 'w-full' : `w-${width}`,
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

  const onChangeInput = (
    newValue: SelectItemValue<T>,
    actionMeta: ActionMeta<SelectItemOption<T>>,
  ) => {
    setInputValue(newValue);

    onChange?.(newValue, actionMeta);
  };
  return (
    <fieldset>
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <ReactSelect
          id={name}
          name={name}
          required={required}
          value={inputValue}
          onChange={onChangeInput}
          className={selectClasses}
          options={options}
          styles={getVariants<T>()[variant]}
        />
      </div>
    </fieldset>
  );
}
