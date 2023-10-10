/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		screen: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			colors: {
				baseGreen: "hsl(115, 43%, 52%)",
			},
			maxWidth: {
				"1/3": "33%",
			},
		},
	},
	plugins: [],
};
