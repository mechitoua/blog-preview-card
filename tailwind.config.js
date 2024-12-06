/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          primary: 'hsl(47, 88%, 63%)',
        },
        gray: {
          500: 'hsl(0, 0%, 42%)',
          950: 'hsl(0, 0%, 7%)',
        },
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
