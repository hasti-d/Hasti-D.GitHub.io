import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		typography: {
			DEFAULT: {
				css: {
					// Enhanced h1 styling
					h1: {
						marginTop: '0.5rem',
						marginBottom: '0.5rem',
						fontSize: '1.25rem', // text-4xl
						fontWeight: '700', // font-bold
						textDecoration: 'underline',
						textUnderlineOffset: '4px',
						textDecorationThickness: '2px'
					},
					ul: {
						listStyleType: 'disc', // Default bullet
						marginLeft: '1.5rem'
					},
					// Enhanced table styles with spacing
					table: {
						borderCollapse: 'separate',
						borderSpacing: '0.75rem 0.1rem' // horizontal and vertical spacing
					},
					// Table header styles
					'thead th': {
						textAlign: 'left'
					},
					a: {
						'&:hover': {
							color: '#1d4ed8', // blue-700
						},
						color: '#5b21b6', // violet-800
						textDecoration: 'underline', // Underline the text
						cursor: 'pointer' // Show pointer cursor
					}
				}
			}
		},
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
