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
			"25": "#F8F7FF",
			"50": "#F1EFFF",
			"100": "#E4E1FF",
			"200": "#CAC5FF",
			"300": "#B0A9FF",
			"400": "#968DFA",
			"500": "#7D74EE",
			"600": "#665CE0",
			"700": "#544BC3",
			"800": "#433AA6",
			"900": "#332988",
			},
			gray: {
			"50": "#F9FAFB",
			"100": "#F3F4F6",
			"200": "#E5E7EB",
			"300": "#D1D5DB",
			"400": "#9CA3AF",
			"500": "#6B7280",
			"600": "#4B5563",
			"700": "#374151",
			"800": "#1F2A37",
			"900": "#111928",
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