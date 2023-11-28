import React from 'react';

import ListGroup from './list-group';

import { Meta } from '@storybook/react';

export default {
  title: 'Atoms/list-group/ListGroup',
  component: ListGroup,
} as Meta;

export const IconsListGroup = () => (
  <ListGroup
    icons={true}
    items={['Profile', 'Settings', 'Messages', 'Download']}
  />
);

export const NoIconListGroup = () => (
  <ListGroup
    icons={false}
    items={['Profile', 'Settings', 'Messages', 'Download']}
  />
);
