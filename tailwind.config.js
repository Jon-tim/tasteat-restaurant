/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				gold: "#e1b168",
				faded: "#fff8f5",
				"dark-accent": "#292e36",
				"text-color": "#555555",
        "footer-color": "#1f242c"
			},
		},
	},
	plugins: [],
};
