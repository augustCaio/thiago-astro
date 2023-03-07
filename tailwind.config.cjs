/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,./node_modules/flowbite/**/*.js}'
],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Lato, sans-serif',
		},
			backgroundImage: {
				'hero-pattern': "url('/post-4_50%.png')",
			  },
			colors:{
				'blue-thiago':'#081226',
			},

		},
	},
	plugins: [
		require('flowbite/plugin'),
	],
	
}
