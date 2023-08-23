import { type Config } from 'tailwindcss';
import path from 'path';

const config: Config = {
  content: [
    path.join(__dirname, './src/**/*.(js|jsx|ts|tsx)'),
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};

export default config;
