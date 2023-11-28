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
        gray: {
          30: '#7D8283',
          50: '#F9FAFB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          700: '#374151',
          900: '#111928',
        },
        primary: {
          100: '#59E0E2',
          200: '#50CACB',
          300: '#47B3B5',
          400: '#3E9D9E',
          500: '#358688',
          600: '#245A5A',
          700: '#122D2D',
        },
        secondary: {
          100: '#262930',
          200: '#43474C',
          300: '#606567',
          400: '#7D8283',
          500: '#358688',
          600: '#B6BAB9',
          700: '#D3D6D5',
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
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#F1F1F5',
          300: '#E2E2EA',
          400: '#D5D5DC',
          500: '#B5B5BE',
          600: '#92929D',
          700: '#696974',
          800: '#44444F',
          900: '#171725',
        },
        blue: {
          50: '#EBF5FF',
          100: '#E1EFFE',
          200: '#C3DDFD',
          300: '#A4CAFE',
          400: '#76A9FA',
          500: '#3F83F8',
          600: '#1C64F2',
          700: '#1A56DB',
          800: '#1E429F',
          900: '#233876',
        },
        red: {
          50: '#FDF2F2',
          100: '#FDE8E8',
          200: '#FBD5D5',
          300: '#F8B4B4',
          400: '#F98080',
          500: '#F05252',
          600: '#E02424',
          700: '#C81E1E',
          800: '#9B1C1C',
          900: '#771D1D',
        },
        orange: {
          50: '#FFF8F1',
          100: '#FEECDC',
          200: '#FCD9BD',
          300: '#FDBA8C',
          400: '#FF8A4C',
          500: '#FF5A1F',
          600: '#D03801',
          700: '#B43403',
          800: '#8A2C0D',
          900: '#771D1D',
        },
        yellow: {
          50: '#FDFDEA',
          100: '#FDF6B2',
          200: '#FCE96A',
          300: '#FACA15',
          400: '#E3A008',
          500: '#C27803',
          600: '#9F580A',
          700: '#8E4B10',
          800: '#723B13',
          900: '#633112',
        },
        green: {
          50: '#F3FAF7',
          100: '#DEF7EC',
          200: '#BCF0DA',
          300: '#84E1BC',
          400: '#31C48D',
          500: '#0E9F6E',
          600: '#057A55',
          700: '#046C4E',
          800: '#03543F',
          900: '#014737',
        },
        teal: {
          50: '#EDFAFA',
          100: '#D5F5F6',
          200: '#AFECEF',
          300: '#7EDCE2',
          400: '#16BDCA',
          500: '#0694A2',
          600: '#047481',
          700: '#036672',
          800: '#05505C',
          900: '#014451',
        },
        indigo: {
          50: '#F0F5FF',
          100: '#E5EDFF',
          200: '#CDDBFE',
          300: '#B4C6FC',
          400: '#8DA2FB',
          500: '#6875F5',
          600: '#5850EC',
          700: '#5145CD',
          800: '#42389D',
          900: '#362F78',
        },
        purple: {
          50: '#F6F5FF',
          100: '#EDEBFE',
          200: '#DCD7FE',
          300: '#CABFFD',
          400: '#AC94FA',
          500: '#9061F9',
          600: '#7E3AF2',
          700: '#6C2BD9',
          800: '#5521B5',
          900: '#4A1D96',
        },
        pink: {
          50: '#FDF2F8',
          100: '#FCE8F3',
          200: '#FAD1E8',
          300: '#F8B4D9',
          400: '#F17EB8',
          500: '#E74694',
          600: '#D61F69',
          700: '#BF125D',
          800: '#99154B',
          900: '#751A3D',
        },

        // -- VISUAL IDENTITY PALETTE --

        // Main Colors

        // Primary
        identityPrimary: {
          0: '#59E0E2',
          10: '#50CACB',
          20: '#47B3B5',
          30: '#3E9D9E',
          40: '#358688',
          60: '#245A5A',
          80: '#122D2D',
        },
        // Secondary
        identitySecondarygray: {
          0: '#262930',
          10: '#43474C',
          20: '#606567',
          30: '#7D8283',
          40: '#999F9F',
          50: '#B6BAB9',
          60: '#D3D6D5',
        },
        // Complementary
        identityComplementary: {
          0: '#DCDEE2',
          10: '#C6C8CB',
          20: '#B0B2B5',
          40: '#848588',
          60: '#58595A',
          80: '#2C2C2D',
          100: '#000000',
        },

        // Error

        error: {
          dark: '#FF4141',
          medium: '#FF6C6C',
          light: '#FFB4B4',
        },

        // -- FEEDBACK PALETTE --

        // Succes
        success: {
          light: '#E3F2E0',
          medium: '#8DC881',
          dark: '#459A33',
        },
        // Warning
        warning: {
          light: '#F8F3D8',
          medium: '#FACA15',
          dark: '#E3A008',
        },
        // Information
        information: {
          light: '#EBF7F6',
          medium: '#C0ECE8',
          dark: '#71C9C1',
        },

        // -- BACKGROUNDS PALETTE --

        primaryBG: '#3E9D9E',
        secondaryBG: '#282828',
        helperBG: '#DCDEE2',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

export default config;
