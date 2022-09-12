/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1224px'
    },
    extend: {
      colors: {
        brightBlue: 'hsl(203, 94%, 28%)',
        brightBlueLight: 'hsl(194, 80%, 56%)',
        brightBlueSupLight: 'hsl(203, 92%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayIshBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)'
      },
    },
  },
  plugins: [],
}
