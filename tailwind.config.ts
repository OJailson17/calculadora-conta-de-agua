import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				white: '#fff',
				primary: '#05266C',
				secondary: '#277AF7',
				placeholder: '#A2A2A2',
				error: '#FA0606',
			},
			fontFamily: {
				inter: ['var(--inter)'],
			},
		},
	},
	plugins: [],
} satisfies Config;
