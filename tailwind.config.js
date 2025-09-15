/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./components/**/*.{astro,html,js,jsx,ts,tsx}',
		'./node_modules/flowbite/**/*.js'
	],
	darkMode: 'class', // Enables dark mode via class
	theme: {
		extend: {
		colors: {
			brand: {
			"50": "#B1D0E6",
			"100": "#9FBBCF",
			"200": "#8EA6B8",
			"300": "#7C92A1",
			"400": "#6A7D8A",
			"500": "#586873",
			"600": "#46515C",
			"700": "#343945",
			"800": "#23232E",
			"900": "#121517",
			},
			gray: {
			"50": "#FFE7AF",
			"100": "#E7CF96",
			"200": "#F3DBA3",
			"300": "#DBC38A",
			"400": "#CFA77D",
			"500": "#C39B70",
			"600": "#B78F64",
			"700": "#AB8357",
			"800": "#9F774B",
			"900": "#936B3E",
			},
			red: {
			"50": "#FDF2F2",
			"100": "#FDE8E8",
			"200": "#FBD5D5",
			"300": "#F8B4B4",
			"400": "#F98080",
			"500": "#F05252",
			"600": "#E02424",
			"700": "#C81E1E",
			"800": "#9B1C1C",
			"900": "#771D1D",
			},
		}
		},
		fontFamily: {
			body: [
			  'Open Sans', 
			  'ui-sans-serif', 
			  'system-ui', 
			  '-apple-system', 
			  'Segoe UI', 
			  'Roboto', 
			  'Helvetica Neue', 
			  'Arial', 
			  'Noto Sans', 
			  'sans-serif', 
			  'Apple Color Emoji', 
			  'Segoe UI Emoji', 
			  'Segoe UI Symbol', 
			  'Noto Color Emoji'
			],
			sans: [
			  'Open Sans', 
			  'ui-sans-serif', 
			  'system-ui', 
			  '-apple-system', 
			  'Segoe UI', 
			  'Roboto', 
			  'Helvetica Neue', 
			  'Arial', 
			  'Noto Sans', 
			  'sans-serif', 
			  'Apple Color Emoji', 
			  'Segoe UI Emoji', 
			  'Segoe UI Symbol', 
			  'Noto Color Emoji'
			]
		  }
		},
	plugins: [
		require('flowbite/plugin')
	],
}