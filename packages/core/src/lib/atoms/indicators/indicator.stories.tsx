import React from 'react';
import Indicator from './Indicator';

import { Meta } from '@storybook/react';

export default {
  title: 'Atoms/Indicators/Indicator',
  component: Indicator,
} as Meta;

export const DefaultIndicator = () => (
  // Color circle with a number (Notifications)
  // The TYPE value it receives should be a number
  <Indicator type={'default'} color={'red'} text={'8'} />
);

export const IconIndicator = () => (
  // Circle with a check Icon
  <Indicator type={'icon'} color={'teal'} text={''} />
);

// ---- Legend Indicators ----
export const LegendIndicator = () => (
  // Circle of color with text
  <Indicator type={'legend'} color={'#e9e9e9'} text={''} />
);

export const PrimaryLegendIndicator = () => (
  // Circle of color with text
  <Indicator type={'legend'} color={'#3E9D9E'} text={''} />
);

export const PurpleLegendIndicator = () => (
  // Circle of color with text
  <Indicator type={'legend'} color={'#9061F9'} />
);

export const IndigoLegendIndicator = () => (
  // Circle of color with text
  <Indicator type={'legend'} color={'indigo'} text={''} />
);

export const TealLegendIndicator = () => (
  // Circle of color with text
  <Indicator type={'legend'} color={'teal'} text={''} />
);

// --- || ---
// ---- Badge Indicator ----
export const BadgeIndicator = () => (
  // Same as legend but with Background color depending on the circle's state Available/Unavailable
  <Indicator type={'badgeAvailable'} color={'teal'} text={''} />
);

export const RedBadgeIndicator = () => (
  // Same as legend but with Background color depending on the circle's state Available/Unavailable
  <Indicator type={'badgeUnavailable'} color={'red'} text={''} />
);

export const StepperIndicator = () => (
  // Checkbox for steps (readonly)
  <Indicator type={'stepper'} color={'teal'} text={''} />
);
