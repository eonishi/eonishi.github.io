/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'Savvy-red': '#951528',
				'Sargasso-sea': '#36445a',
				'moss-100': '#cad2c5',
				'moss-200': '#84a98c',
				'moss-300': '#52796f',
				'moss-400': '#354f52',
				'moss-500': '#2f3e46',
				'satin-100': '#E4ECE4',
				'satin-200': '#7c9670',
				'satin-300': '#b5bfa1',
				'satin-400': '#9b8f7f',
				'satin-500': '#143109',
				'satin-600': '#132A13',
			}
		},
	},
	plugins: [],
}
