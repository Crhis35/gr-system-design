import React, { ElementType } from 'react';
import { StackProps } from './buttons.model';

export default function ButtoChevron<C extends ElementType = 'div'>(
  props: StackProps<C>,
) {
  const { path, path2 } = props;

  const pathString = String(path);
  const pathString2 = String(path2);

  return (
    <div className="inline-flex rounded-md shadow-sm">
      <a
        href={pathString}
        aria-current="page"
        className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.707 5.293C12.8945 5.48053 12.9998 5.73484 12.9998 6C12.9998 6.26516 12.8945 6.51947 12.707 6.707L9.41403 10L12.707 13.293C12.8892 13.4816 12.99 13.7342 12.9877 13.9964C12.9854 14.2586 12.8803 14.5094 12.6948 14.6948C12.5094 14.8802 12.2586 14.9854 11.9964 14.9877C11.7342 14.99 11.4816 14.8892 11.293 14.707L7.29303 10.707C7.10556 10.5195 7.00024 10.2652 7.00024 10C7.00024 9.73484 7.10556 9.48053 7.29303 9.293L11.293 5.293C11.4806 5.10553 11.7349 5.00021 12 5.00021C12.2652 5.00021 12.5195 5.10553 12.707 5.293Z"
            fill="#1F2A37"
          />
        </svg>
      </a>
      <a
        href={pathString2}
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.29303 14.707C7.10556 14.5195 7.00024 14.2652 7.00024 14C7.00024 13.7348 7.10556 13.4805 7.29303 13.293L10.586 10L7.29303 6.70701C7.11087 6.51841 7.01008 6.26581 7.01236 6.00361C7.01463 5.74141 7.1198 5.4906 7.30521 5.30519C7.49062 5.11978 7.74143 5.01461 8.00363 5.01234C8.26583 5.01006 8.51843 5.11085 8.70703 5.29301L12.707 9.29301C12.8945 9.48054 12.9998 9.73485 12.9998 10C12.9998 10.2652 12.8945 10.5195 12.707 10.707L8.70703 14.707C8.5195 14.8945 8.26519 14.9998 8.00003 14.9998C7.73487 14.9998 7.48056 14.8945 7.29303 14.707Z"
            fill="#1F2A37"
          />
        </svg>
      </a>
    </div>
  );
}
