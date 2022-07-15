module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'zinc': {
          701: '#735C52',
          901: '#56443C',
        }
      },
      fontFamily: {
        'modal-heading': ['Gill Sans Ultra Bold'],
        'text': ['Gilroy'],
      },
      fontSize: {
        'modal-heading': '28px',
      },
      lineHeight: {
        'modal-heading': '36px',
      }
    },
  },
  plugins: [],
}
