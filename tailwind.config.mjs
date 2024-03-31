/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			dropShadow: {
				title: '0px 4px 4px rgba(0, 0, 0, 0.25)'
			},
			boxShadow: {
				card: '2px 2px 100px 0px rgba(0,0,0,0.07)'
			},
			backgroundImage: {
				'main-banner': 'url(/assets/images/main-banner.png)',
				'main-banner-dark': 'url(/assets/images/main-banner-dark.png)',
			}
		}
	},
	plugins: []
};
