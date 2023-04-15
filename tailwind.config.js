/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        ethnocentric: ['Ethnocentric', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#CCDDFF',
          200: '#ADB3FF',
          300: '#8593FF',
          400: '#6670FF',
          500: '#4D4DFF',
          600: '#0000E0',
          700: '#0032C7',
          800: '#0034AD',
          900: '#000099',
        },
        secondary: {
          100: '#C7F9E5',
          200: '#AAF8DC',
          300: '#5CFFC0',
          400: '#14FFAD',
          500: '#00E19F',
          600: '#00CC9C',
          700: '#00A37D',
          800: '#007A62',
          900: '#006647',
        },
        tertiary: {
          100: '#F9C7E1',
          200: '#F8B5D7',
          300: '#F89BCB',
          400: '#F382BC',
          500: '#EF5DA8',
          600: '#F22C92',
          700: '#E4117E',
          800: '#C70067',
          900: '#A30A59',
        },
        neutral: {
          100: '#F4F4F5',
          200: '#D5D5D8',
          300: '#B4B4BB',
          400: '#9C9CA5',
          500: '#7C7C83',
          600: '#5C5C66',
          700: '#484851',
          800: '#2C2C30',
          900: '#1D1D20',
        },
      },
      keyframes: {
        slideDown: {
          from: {
            height: 0,
            opacity: 0,
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
            opacity: 1,
          },
        },
        slideUp: {
          from: {
            height: 'var(--radix-accordion-content-height)',
            opacity: 1,
          },
          to: {
            height: 0,
            opacity: 0,
          },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms ease-in',
        slideUp: 'slideUp 300ms ease-out',
      },
    },
  },
  plugins: [],
};
