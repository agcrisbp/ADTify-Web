const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: 'class', // Enable dark mode with class-based toggle
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    screens: {
      xs: "400px",
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        heading: ["Inter", ...defaultTheme.fontFamily.sans],
        sans: ["Outfit", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        lightBackground: '#FFFFFF',
        darkBackground: '#1a1a1a',
        lightText: '#000000',
        darkText: '#FFFFFF',
      }
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          "@screen md": {
            width: "700px"
          },
          "@screen lg": {
            width: "800px"
          }
        }
      });
    }
  ]
};