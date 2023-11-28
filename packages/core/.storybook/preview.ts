import type { Preview } from '@storybook/react';

import { withThemeByClassName } from '@storybook/addon-styling';

/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */
import '../src/index.css';

const colorPalette = {
  primary: {
    50: '#EBF5FF',
    100: '#E1EFFE',
    200: '#C3DDFD',
    300: '#122D2D',
    400: '#245A5A',
    500: '#358688',
    600: '#3E9D9E',
    700: '#47B3B5',
    800: '#50CACB',
    900: '#59E0E2',
  },
  // Add more colors if needed
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
