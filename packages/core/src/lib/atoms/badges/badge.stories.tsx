import React from 'react';
import Badge from './Badge';

import { Meta } from '@storybook/react';

export default {
  title: 'Atoms/Badges/Badge',
  component: Badge,
} as Meta;

export const DefaultNumberBadge = () => (
  // Color circle with a number (Notifications)
  // The TYPE value it receives should be a number
  <Badge type={'default'} color={'red'} text={'8'} colorTone={500} />
);

export const IconBadge = () => (
  // Circle with a check Icon as the indicator atom
  <Badge type={'icon'} color={'teal'} text={''} colorTone={600} />
);

// ----  Badges ----
export const DefaultBadge = () => (
  <Badge type={'badge'} color={'gray'} text={''} colorTone={200} />
);

export const LargeBadge = () => (
  <Badge type={'largeBadge'} color={'primary'} text={''} colorTone={600} />
);

// -- Clock Icon --
export const SmallClockIconBadge = () => (
  <Badge type={'smClockBadge'} color={'indigo'} text={''} colorTone={500} />
);

export const LargClockIconBadge = () => (
  <Badge type={'lgClockBadge'} color={'red'} text={''} colorTone={500} />
);

// -- X icon --
export const SmallXIconBadge = () => (
  <Badge type={'smXBadge'} color={'teal'} text={''} colorTone={500} />
);

export const LargeXIconBadge = () => (
  <Badge type={'lgXBadge'} color={'teal'} text={''} colorTone={600} />
);
