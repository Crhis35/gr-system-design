import React from 'react';
import { Alert } from '.';

import { Meta, StoryFn } from '@storybook/react';
import { variants } from './alert.styles';
import { AlertProps } from './alert.model';

export default {
  title: 'Atoms/Alerts',
  component: Alert,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      description: 'Select Based on The Following Options',
      options: Object.keys(variants),
      control: 'select',
    },
  },
} as Meta;

const Template: StoryFn<AlertProps<'div'>> = args => (
  <Alert variant={args.variant}>
    <Alert.Header
      title="Title"
      description="Success message"
      icon={
        <svg
          className="flex-shrink-0 w-4 h-4 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
      }
    />
    <Alert.Body>
      More info about this info success goes here. This example text is going to
      run a bit longer so that you can see how spacing within an alert works
      with this kind of content.
    </Alert.Body>
    <Alert.Actions>
      <button
        type="button"
        className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        <svg
          className="-ml-0.5 mr-2 h-3 w-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 14"
        >
          <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>
        View more
      </button>
      <button
        type="button"
        className="text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-green-600 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:focus:ring-green-800"
        data-dismiss-target="#alert-additional-content-3"
        aria-label="Close"
      >
        Dismiss
      </button>
    </Alert.Actions>
  </Alert>
);
export const Default = Template.bind({});

Default.args = {
  variant: 'primary',
};
