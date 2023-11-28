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
          0: '#59E0E2',
        },
        identitySecondarygray: {
          0: '#262930',
          1: '#151919',
          2: '#131D27',
          3: '#18181B',
        },
        landingPagecontentFeaturesColors: {
          white: '#FFFFF5',
          whiteVariant1: '#F9FAF8',
        },
      },
      height: {
        '1100': '1100px',
        '120': '120px',
        '190': '190px',
        '280': '280px',
        '270': '270px',
        '700': '700px',
        '260': '260px',
        '230': '230px',
        '200': '200px',
        '140': '140px',
        '27': '27px',
        '600': '600px',
        '800': '800px',
        '1440': '1440px',
        '1640': '1640px',
        '400': '400px',
      },
      width: {
        '1440': '1440px',
        '1200': '1200px',
        '680': '680px',
        '800': '800px',
        '850': '850px',
        '700': '700px',
        '296': '296px',
        '1000': '1000px',
        '550': '550px',
        '350': '350px',
        '320': '320px',
        '250': '250px',
        '150': '150px',
      },
      gap: {
        '120': '120px',
        '22': '22px',
        '2': '2px',
      },
      bottom: {
        '68': '680px',
      },
      right: {
        '10': '100px',
        '45': '45px',
      },
      top: {
        '20': '200px',
        '2.5': '25px',
      },
      padding: {
        '20': '20px',
      },
      left: {
        '70': '70%',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

export default config;
