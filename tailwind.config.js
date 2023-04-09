/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // 'xs': '320px',
      'xs': '450px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      
    },
    fontFamily: {
      Inter: ['Inter', "sans-serif"],
      // InterThin: ["InterThin", "sans-serif"],
      // OpenSans: ["Open Sans", "sans-serif"],
      // Inter_2: ["Inter Tight", "sans-serif"],
      // Roboto: ["Roboto", "sans-serif"],
      // Halvetica: ["Questrial", "sans-serif"],
      // Halvic: ["HelveticaNeueRoman", "sans-serif"],
    },
    colors: {
      blue: "#121521",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
