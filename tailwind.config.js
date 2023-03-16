/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#21a0d6',
          '50': '#f1f9fe',
          '100': '#e3f1fb',
          '200': '#c0e5f7',
          '300': '#88d0f1',
          '400': '#48b8e7',
          '500': '#21a0d6',
          '600': '#1380b6',
          '700': '#116793',
          '800': '#12577a',
          '900': '#154965',
        },
      secondary: {
        DEFAULT: '#90927d',
        '50': '#f7f7f5',
        '100': '#ebece8',
        '200': '#d7d8d0',
        '300': '#c4c6bb',
        '400': '#a2a493',
        '500': '#90927d',
        '600': '#858571',
        '700': '#6f6f5f',
        '800': '#5c5b50',
        '900': '#4c4c42',
      }      
        }
      }
    },
  plugins: [],
}
