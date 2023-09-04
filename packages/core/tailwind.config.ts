import { type Config } from 'tailwindcss';
import path from 'path';

const config: Config = {
  content: [
    path.join(__dirname, './src/**/*.(js|jsx|ts|tsx)'),
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          30: '#3E9D9E',
        },
        success: {
          50: '#F3FAF7',
          500: '#0E9F6E',
          600: '#057A55',
          700: '#046C4E',
        },
        error: {
          50: '#FDF2F2',
          500: '#F05252',
          600: '#E02424',
          700: '#C81E1E',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

export default config;
