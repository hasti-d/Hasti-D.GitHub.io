import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			// Color reference: https://tailwindcss.com/docs/customizing-colors
			colors: {
				primary: {
					light: '#8b5cf6', // violet-500
					DEFAULT: '#7c3aed', // violet-600
					dark: '#5b21b6' // violet-800
				},
				secondary: {
					light: '#6b21a8', // purple-800
					DEFAULT: '#581c87', // purple-900
					dark: '#3b0764' // purple-950
				}
			}
		}
	},

	plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;
