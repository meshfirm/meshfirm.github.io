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
			"50": "#faf5ff",
			"100": "#f3e8ff",
			"200": "#e9d5ff",
			"300": "#d8b4fe",
			"400": "#c084fc",
			"500": "#a855f7",
			"600": "#9333ea",
			"700": "#7e22ce",
			"800": "#6b21a8",
			"900": "#581c87",
			"950": "#3b0764"
			},
			gray: {
			"900": "#111928",
			"500": "#6b7280",
			"300": "#d1d5db",
			"50": "#f9fafb",
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