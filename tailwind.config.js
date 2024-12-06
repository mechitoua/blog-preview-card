/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          primary: '#F0CE49',
          background: '#F5D04E',
        },
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
