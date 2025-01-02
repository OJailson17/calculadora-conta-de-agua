import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
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
    			error: '#FA0606'
    		},
    		fontFamily: {
    			inter: [
    				'var(--inter)'
    			]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
