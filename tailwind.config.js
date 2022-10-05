const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        'header': ['"Poppins"', ...defaultTheme.fontFamily.sans],
        'body': ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          pink: 'hsl(322, 100%, 66%)',
          lightPink: 'hsl(321, 100%, 78%)',
          lightRed: 'hsl(0, 100%, 63%)',
        },
        neutral: {
          VDarkCyan: 'hsl(192, 100%, 9%)',
          VPaleBlue: 'hsl(207, 100%, 98%)',
          cyan: '#F6FBFF',
          footer: '#00252E'
        },
      },
    },
  },
  plugins: [],
}
