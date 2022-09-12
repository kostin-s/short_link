/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        white: 'rgba(250, 250, 250, 1);',
        black: 'rgba(33, 37, 41, 1);',
        blue: '#1976d2',
      },
      screens: {
        '2xl': { max: '1535px' },
        xl: { max: '1279px' },
        lg: { max: '1023px' },
        md: { max: '767px' },
        sm: { max: '639px' },
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },

        '.blue-gradient': {
          background:
            '-webkit-linear-gradient(90deg, #1976d2, #a726e4, #e127f2)',
          background: 'linear-gradient(90deg, #1976d2, #a726e4, #e127f2)',
        },
      });
    }),
  ],
};
