import React, { ElementType } from 'react';
import { StackProps } from './Buttons.model';

export default function ButtonSave<C extends ElementType = 'div'>(
  props: StackProps<C>,
) {
  return (
    <button
      className="inline-flex rounded-md shadow-sm"
      onClick={props.onclick}
      onChange={props.onchage}
    >
      <a
        href="#"
        aria-current="page"
        className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        <div className="flex flex-row">
          Save Changes &nbsp;
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.15483 2.98816C4.84227 3.30072 4.66667 3.72464 4.66667 4.16667V17.5L10.5 14.5833L16.3333 17.5V4.16667C16.3333 3.72464 16.1577 3.30072 15.8452 2.98816C15.5326 2.67559 15.1087 2.5 14.6667 2.5H6.33334C5.89131 2.5 5.46739 2.67559 5.15483 2.98816Z"
              stroke="#111928"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </a>
    </button>
  );
}
