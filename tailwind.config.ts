import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'black': '#000',
  			'b-one': '#1b1c1d',
  			'b-two': '#525455',
  			'p-one': '#40abff',
  			'p-two': '#005792',
  			'p-three': '#fcfcfc',
  			'p-four': '#fd5f00',
  			'w-one': '#f6fceb',
  			'w-two': '#e5f5ff',
  			'steelblue': {
  				'100': '#267db8',
  				'200': 'rgba(38, 125, 184, 0.09)'
  			},
  			'orangered': '#e34500',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			'para-date': 'Roboto Serif'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	fontSize: {
  		'xs': '12px',
  		'lg': '18px',
  		'xl': '20px',
  		'3xl': '22px',
  		'4xl': '23px',
  		'5xl': '24px',
  		'7xl': '26px',
  		'9xl': '28px',
  		'10xl': '29px',
  		'13xl': '32px',
  		'14xl': '33px',
  		'19xl': '38px',
  		'21xl': '40px',
  		'29xl': '48px',
  		'inherit': 'inherit'
  	},
  	screens: {
  		'2sm': {
  			max: '375px'
  		},
  		'sm': {
  			max: '425px'
  		},
  		'md': {
  			max: '768px'
  		},
  		'lg': {
  			max: '1024px'
  		},
  		'xl': {
  			max: '1280px'
  		},
  		'mq1450': {
  			raw: 'screen and (max-width: 1450px)'
  		},
  		'mq825': {
  			raw: 'screen and (max-width: 825px)'
  		},
  		'mq450': {
  			raw: 'screen and (max-width: 450px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
