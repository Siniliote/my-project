/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	mode: 'jit',
	theme: {
		extend: {
		  colors: {
			accent: 'var(--color-accent)',
			fore: {
			  primary: 'var(--color-fore-primary)',
			  secondary: 'var(--color-fore-secondary)',
			  subtle: 'var(--color-fore-subtle)',
			},
			back: {
			  primary: 'var(--color-back-primary)',
			  secondary: 'var(--color-back-secondary)',
			  subtle: 'var(--color-back-subtle)',
			  accent: 'var(--color-back-accent)',
			},
		  },
		  fontFamily: {
			sans: ['Public Sans', ...fontFamily.sans],
		  },
		},
	  },
	plugins: [],
}
