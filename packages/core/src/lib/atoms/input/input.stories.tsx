import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Input from './input';
import { InputProps } from './input.model';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Input',
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    spacing: {
      description: 'Select Based on The Following Options',
      control: 'number',
    },
    as: {
      description: 'Component to be wrapped by the component',
    },
    children: {
      description: 'Children component',
    },
    success: {
      description: 'Success variant',
      control: 'boolean',
    },
    error: {
      description: 'Error variant',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

const Template: StoryFn<InputProps> = args => (
  <div>
    <Input {...args} />
  </div>
);
export const Default = Template.bind({});
export const Success = Template.bind({});

Default.args = {
  label: 'Custom Input',
  value: 'Hi',
  success: false,
  error: false,
};

Success.args = {
  label: 'Custom Input',
  value: 'Hi',
  success: true,
  error: false,
};
