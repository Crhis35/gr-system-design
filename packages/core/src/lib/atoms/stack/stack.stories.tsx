import type { Meta, StoryObj } from '@storybook/react';

import Stack from './stack';

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
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    spacing: 4,
    children: 'hello world',
    as: 'div',
  },
};
