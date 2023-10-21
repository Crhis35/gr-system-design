import clsx from 'clsx';

const baseStyles = 'p-4 mb-4 border rounded-lg';

export const variants = {
  primary: clsx(
    baseStyles,
    'text-green-800',
    'border',
    'border-green-300',
    'bg-green-50',
    'dark:bg-gray-800',
    'dark:text-green-400',
    'dark:border-green-800',
  ),
  error: clsx(
    baseStyles,
    'text-red-800 border',
    'border-red-300',
    'bg-red-50',
    'dark:bg-gray-800',
    'dark:text-red-400',
    'dark:border-red-800',
  ),
};
