import React from 'react';
import Alert from './Alert';

import { Meta } from '@storybook/react';

export default {
  title: 'Atoms/Alerts/Alert',
  component: Alert,
} as Meta;

export const GreenAlert = () => (
  <Alert type={'green'} color={'red'} text={'8'} colorTone={500} />
);

export const RedAlert = () => (
  <Alert type={'red'} color={'teal'} text={''} colorTone={600} />
);

export const PrimaryAlert = () => (
  <Alert type={'primary'} color={'red'} text={''} colorTone={500} />
);
export const YellowAlert = () => (
  <Alert type={'yellow'} color={'gray'} text={''} colorTone={200} />
);

export const GrayAlert = () => (
  <Alert type={'gray'} color={'primary'} text={''} colorTone={600} />
);
