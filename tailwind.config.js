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
			"50": "#596BB1",
			"100": "#5062A3",
			"200": "#485995",
			"300": "#405087",
			"400": "#384779",
			"500": "#303E6B",
			"600": "#28355D",
			"700": "#202C4F",
			"800": "#182341",
			"900": "#101A33",
			},
			secondary: {
			"50": "#D3D626",
			"100": "#C0C322",
			"200": "#ADB01E",
			"300": "#9A9D1A",
			"400": "#878A16",
			"500": "#747712",
			"600": "#61640E",
			"700": "#4E510A",
			"800": "#3B3E06",
			"900": "#282B02",
			},
			gray: {
			"50": "#FAFBFC",
			"100": "#F9FAFB",
			"200": "#F3F4F6",
			"300": "#E5E7EB",
			"400": "#D1D5DB",
			"500": "#9CA3AF",
			"600": "#6B7280",
			"700": "#4B5563",
			"800": "#374151",
			"900": "#1F2A37",
			"950": "#111928",
			},
		},
		backgroundImage: ({ theme }) => ({
			'gradient-primary': `linear-gradient(135deg, ${theme('colors.gray.500')}, ${theme('colors.gray.700')})`,
		})
		},
		fontFamily: {
			body: [
			  'Inter',
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
			  'Inter',
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
		require('flowbite/plugin'),
		function({ addComponents, theme }) {
			addComponents({
				'.btn-primary': {
					display: 'inline-flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '0.75rem 1.5rem',
					backgroundColor: theme('colors.brand.600'),
					color: 'white',
					borderRadius: '0.75rem',
					fontWeight: '600',
					fontSize: '0.875rem',
					lineHeight: '1.25rem',
					textAlign: 'center',
					cursor: 'pointer',
					border: 'none',
					transition: 'all 0.2s ease-in-out',
					'&:hover': {
						backgroundColor: theme('colors.brand.700'),
						transform: 'translateY(-1px)',
						boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
					},
					'&:focus': {
						outline: 'none',
						boxShadow: `0 0 0 3px ${theme('colors.brand.200')}`,
					},
					'&:active': {
						transform: 'translateY(0)',
					},
				},
			});
		}
	],
}