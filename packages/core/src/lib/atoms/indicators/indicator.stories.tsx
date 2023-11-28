import React from 'react';
import Indicator from './Indicator';

import { Meta } from '@storybook/react';

// import { colorPalette } from '../../../../.storybook/preview';

export default {
  title: 'Atoms/Indicators/Indicator',
  component: Indicator,
} as Meta;

export const DefaultIndicator = () => (
  // circulo de color con numero (Notificaciones)
  // El  TIPO valor que recibe debe ser numero
  <Indicator type={'default'} color={'red'} text={'8'} colorTone={500} />
);

export const IconIndicator = () => (
  // Circulo con un Icono de check
  <Indicator type={'icon'} color={'teal'} text={''} colorTone={600} />
);
// ---- Legend Indicators ----
export const LegendIndicator = () => (
  // Circulo de color con texto

  <Indicator type={'legend'} color={'gray'} text={''} colorTone={200} />
);

export const PrimaryLegendIndicator = () => (
  // Circulo de color con texto

  <Indicator type={'legend'} color={'primary'} text={''} colorTone={600} />
);
export const PurpleLegendIndicator = () => (
  // Circulo de color con texto

  <Indicator type={'legend'} color={'red'} text={''} colorTone={500} />
);
export const IndigoLegendIndicator = () => (
  // Circulo de color con texto

  <Indicator type={'legend'} color={'indigo'} text={''} colorTone={500} />
);
export const TealLegendIndicator = () => (
  // Circulo de color con texto

  <Indicator type={'legend'} color={'teal'} text={''} colorTone={500} />
);

// --- || ---
// ---- Badge Indicator ----
export const BadgeIndicator = () => (
  // Lo mismo que legend pero con Background color dependiento el estado del circulo Available/Unavailable (Disponible/No disponible)

  <Indicator type={'badgeAvailable'} color={'teal'} text={''} colorTone={600} />
);
export const RedBadgeIndicator = () => (
  // Lo mismo que legend pero con Background color dependiento el estado del circulo Available/Unavailable (Disponible/No disponible)

  <Indicator
    type={'badgeUnavailable'}
    color={'red'}
    text={''}
    colorTone={600}
  />
);

export const StepperIndicator = () => (
  // Checkbox de steps (readonly)

  <Indicator type={'stepper'} color={'teal'} text={''} colorTone={600} />
);
