import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-p-three': '#fcfcfc',
        'black-b-two': '#525455',
        'primary-p-one': '#40abff',
        'primary-p-four': '#fd5f00',
        'black-b-one': '#1b1c1d',
        'white-w-two': '#e6f5ff',
        black: '#000',
        'primary-p-two': '#005792',
        steelblue: {
          '100': '#267db8',
          '200': 'rgba(38, 125, 184, 0.09)',
        },
        orangered: '#e34500',
        'white-w-one': '#f6fceb',
      },
      spacing: {},
      fontFamily: {
        'para-date': "'Roboto Serif'",
      },
    },
    fontSize: {
      xs: '12px',
      '29xl': '48px',
      '19xl': '38px',
      '10xl': '29px',
      '14xl': '33px',
      '7xl': '26px',
      xl: '20px',
      '21xl': '40px',
      '13xl': '32px',
      '5xl': '24px',
      '9xl': '28px',
      '3xl': '22px',
      lg: '18px',
      '4xl': '23px',
      inherit: 'inherit',
    },
    screens: {
      mq1450: {
        raw: 'screen and (max-width: 1450px)',
      },
      lg: {
        max: '1200px',
      },
      mq825: {
        raw: 'screen and (max-width: 825px)',
      },
      mq450: {
        raw: 'screen and (max-width: 450px)',
      },
    },
  },
  plugins: [],
};
export default config;
