module.exports = {
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: (theme) => ({
      ...theme('colors'),
      main: '#1076FF',
      333: '#333333',
      666: '#666666',
      999: '#999999',
      green: '#05B070',
      origin: '#FF7303',
      // red: '#EA0000',
      blue: '#1076FF',
    }),
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'zm-bg-gray': '#F4F6F8',
      main: '#1076FF',
    }),
  },
  variants: {},
  plugins: [],
};
