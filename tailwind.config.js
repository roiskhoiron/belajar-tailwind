module.exports = {
  purge: {
    enabled: false,
    content: ['public/*.html',]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '5xxl': '3.75rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    colors: {
      transparent: 'transparent',
      orange: "#ff7143",
      "orange-dark": "#9F3919",
      darksblue: "#5454D4",
      black: "#19191B",
      gray: "#696871",
      "gray-light": "#e7e7e7",
      white: "#FFFFFF",
      "white-light": "#f7f7fb",
      "white-lighter": "#f8f8f8",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
