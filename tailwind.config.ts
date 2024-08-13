import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#000",
        // changing "black-b-..." to "b-..."
        "b-one": "#1b1c1d",
        "b-two": "#525455",
        // changing "primary-p-..." to "p-..."
        "p-one": "#40abff",
        "p-two": "#005792",
        "p-three": "#fcfcfc",
        "p-four": "#fd5f00",
        // changing "white-w-..." to "w-..."
        "w-one": "#f6fceb",
        "w-two": "#e6f5ff",
        "steelblue": {
          "100": "#267db8",
          "200": "rgba(38, 125, 184, 0.09)",
        },
        "orangered": "#e34500",
      },
      fontFamily: {
        "para-date": "'Roboto Serif'",
      },
    },
    fontSize: {
      // re-arrange sizes
      "xs": "12px",
      "lg": "18px",
      "xl": "20px",
      "3xl": "22px",
      "4xl": "23px",
      "5xl": "24px",
      "7xl": "26px",
      "9xl": "28px",
      "10xl": "29px",
      "13xl": "32px",
      "14xl": "33px",
      "19xl": "38px",
      "21xl": "40px",
      "29xl": "48px",
      "inherit": "inherit",
    },
    screens: {
      // adding screens and re-arrage
      "2sm": {
        max: "375px",
      },
      "sm": {
        max: "425px",
      },
      "md": {
        max: "768px",
      },
      "lg": {
        max: "1024px",
      },
      "xl": {
        max: "1280px",
      },
      "mq1450": {
        raw: "screen and (max-width: 1450px)",
      },
      "mq825": {
        raw: "screen and (max-width: 825px)",
      },
      "mq450": {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
};
export default config;
