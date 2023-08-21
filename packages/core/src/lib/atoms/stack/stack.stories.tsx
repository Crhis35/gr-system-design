import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Button } from 'flowbite-react';

import Stack from './stack';
import { StackProps } from './stack.model';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Stack',
  component: Stack,
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
} satisfies Meta<typeof Stack>;

export default meta;

const Template: StoryFn<StackProps> = (args) => (
  <Stack {...args}>
    {Array.from({ length: 12 }).map((_, index) => (
      <div key={index}>
        <Button label="hi" />
      </div>
    ))}
  </Stack>
);
export const Default = Template.bind({});

Default.args = {
  as: 'div',
  width: 100,
  justifyContent: 'space-between',
  direction: 'column',
  height: 40,
};
