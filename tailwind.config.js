/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ffc04b',
        'primary-light': '#ffd47d',
        'primary-dark': '#e6a62e',
      },
      backgroundColor: {
        'primary-gradient': 'linear-gradient(to right, #ffc04b, #ffb01f)',
      },
      textColor: {
        DEFAULT: {
          light: '#000000',
          dark: '#ffffff',
        },
      },
      backgroundColor: {
        DEFAULT: {
          light: '#ffffff',
          dark: '#000000',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}