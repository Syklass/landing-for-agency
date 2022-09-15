/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"white-fb":"#FBFBFB",
				"white-f2f4":"#F2F4F4",
				"accent": "#00A5E0",
				"accent-cd": "#0C9ACD",
				"black-11": "#111111",
				"black-2c": "#2C2C2C",
				"black-2d": "#2D2D2D",
				"black-e7": "#E7E7E7",
				"violet-dark": "#1E0849",
				"blue-00a5e0":"#00A5E0",
				"gray-b3":"#B3B3B3",
				"status-ready": "#40CC80",
				"white-f9": "#F9F9F9",
				"blue-1e":"#1E0849",
			},
			minWidth: {
				'checkbox': '28px',
				'caseCard': '270px',
				'imgHelper': '32px'
			},
			minHeight: {
				'imgHelper': '32px',
				'extendHelperMobile':'270px',
				'extendHelperPc':'450px',
			},
			maxWidth: {
				'caseCard': '415px',
				'extendHelperPc':'450px',
			},
			dropShadow: {
				'3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
				'4xl': [
					'0 35px 35px rgba(0, 0, 0, 0.25)',
					'0 45px 65px rgba(0, 0, 0, 0.15)',
				],
			},
			screens: {
				'mb': {'max': '640px'},
				'mdl': {'max': '1240px'},
				'mdlx': {'max': '1400px'}
			},
		},
		boxShadow: {
			'sm': '0 4px 10px rgba(0, 0, 0, 0.15)',
			'lg-1': '0 4px 20px rgba(0, 0, 0, 0.1)',
			'lg-2': '0 4px 20px rgba(0, 0, 0, 0.15)',
			'lg-3': '0 4px 20px rgba(0, 0, 0, 0.25)',
		},
	},
	plugins: [],
};
