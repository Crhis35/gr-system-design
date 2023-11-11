import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import Textarea from './textarea';
import { TextareaProps } from './textarea.model';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Textarea',
  component: Textarea,
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
  },
} satisfies Meta<typeof Textarea>;

export default meta;

const Template: StoryFn<TextareaProps> = args => <Textarea {...args} />;
export const Default = Template.bind({});

Default.args = {
  as: 'textarea',
  width: 100,
  height: 40,
};
