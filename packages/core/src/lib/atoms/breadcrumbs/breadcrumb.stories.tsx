import React from 'react';
import Breadcrumb from './Breadcrumb';

import { Meta } from '@storybook/react';

export default {
  title: 'Atoms/Breadcrumbs/Breadcrumb',
  component: Breadcrumb,
} as Meta;

export const DefaultBreadcrumb = () => (
  <Breadcrumb
    className="bg-purple-500"
    bgColor={'bg-purple-500'}
    type={'default'}
  />
);

export const SolidBackgroundBreadcrumb = () => (
  <Breadcrumb type={'background'} bgColor={'bg-purple-500'} />
);
