/** @type {import('tailwindcss').Config}*/

import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

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
        'kozuka-gothic': ['Kozuka\\ Gothic'],
        inter: ['Inter']
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
          dark: '#1E2236',
        },
        dark: '#0A1622',
        card:'#152232',
        button: '#365881'
      }
    }
  },

  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.ts-h1': {
          '@apply font-semibold text-[34px] md:text-[54px]':
              {}
        },
        '.ts-h2': {
            '@apply font-semibold text-[30px] md:text-[46px]':
                {}
        },
        '.ts-h3': {
            '@apply font-semibold text-[28px] md:text-[36px]':
                {}
        },
        '.ts-h4': {
            '@apply font-semibold text-[24px] md:text-[32px]':
                {}
        },
        '.ts-h5': {
            '@apply font-semibold text-[20px] md:text-[24px]':
                {}
        },
        '.ts-h6': {
            '@apply font-semibold text-[18px] md:text-[20px]':
                {}
        },
      })
    })
  ]
};

module.exports = config;
