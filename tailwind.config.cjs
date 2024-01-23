/** @type {import('tailwindcss').Config}*/
const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ['Monsterrat', ...defaultTheme.fontFamily.sans],
        'lemon-milk': ['Lemon\\ Milk'],
        'kozuka-gothic': ['Kozuka\\ Gothic']
      },
      colors: {
        kusogaki: {
          purple: '#B38DD9',
          indigo: '#6269C8',
          red: '#eba3b4',
          yellow: '#f5e9a4',
          blue: '#91a8dd',
          cyan: '#8ad3e0',
          green: '#ade9db',
          dark: '#1E2236'
        }
      }
    }
  },

  plugins: []
};

module.exports = config;
