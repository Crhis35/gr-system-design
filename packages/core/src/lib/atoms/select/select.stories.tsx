import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import Select from './select';
import { SelectProps } from './select.model';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Select',
  component: Select,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    as: {
      description: 'Component to be wrapped by the component',
    },
    children: {
      description: 'Children component',
    },
    label: {
      description: 'Label to be wrapped by the component',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

const Template: StoryFn<SelectProps<string>> = args => <Select {...args} />;
export const Default = Template.bind({});

Default.args = {
  width: 'full',
  label: '',
  height: 40,
  options: [
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
  ],
};
