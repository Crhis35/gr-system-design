import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import Textarea from './select';
import { TextareaProps } from './select.model';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Textarea',
  component: Textarea,
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
  },
} satisfies Meta<typeof Textarea>;

export default meta;

const Template: StoryFn<TextareaProps> = args => <Textarea {...args} />;
export const Default = Template.bind({});

Default.args = {
  as: 'div',
  width: 100,
  justifyContent: 'space-between',
  direction: 'column',
  height: 40,
};
