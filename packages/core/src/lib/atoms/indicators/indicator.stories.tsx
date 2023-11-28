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
  <Indicator type={'default'} color={'red'} text={'8'} colorTone={500} />
);

export const IconIndicator = () => (
  // Circle with a check Icon
  <Indicator type={'icon'} color={'teal'} text={''} colorTone={600} />
);

// ---- Legend Indicators ----
export const LegendIndicator = () => (
  // Circle of color with text
  <Indicator type={'legend'} color={'gray'} text={''} colorTone={200} />
);

export const PrimaryLegendIndicator = () => (
  // Circle of color with text
  <Indicator type={'legend'} color={'primary'} text={''} colorTone={600} />
);

export const PurpleLegendIndicator = () => (
  // Circle of color with text
  <Indicator type={'legend'} color={'red'} text={''} colorTone={500} />
);

export const IndigoLegendIndicator = () => (
  // Circle of color with text
  <Indicator type={'legend'} color={'indigo'} text={''} colorTone={500} />
);

export const TealLegendIndicator = () => (
  // Circle of color with text
  <Indicator type={'legend'} color={'teal'} text={''} colorTone={500} />
);

// --- || ---
// ---- Badge Indicator ----
export const BadgeIndicator = () => (
  // Same as legend but with Background color depending on the circle's state Available/Unavailable
  <Indicator type={'badgeAvailable'} color={'teal'} text={''} colorTone={600} />
);

export const RedBadgeIndicator = () => (
  // Same as legend but with Background color depending on the circle's state Available/Unavailable
  <Indicator
    type={'badgeUnavailable'}
    color={'red'}
    text={''}
    colorTone={600}
  />
);

export const StepperIndicator = () => (
  // Checkbox for steps (readonly)
  <Indicator type={'stepper'} color={'teal'} text={''} colorTone={600} />
);
