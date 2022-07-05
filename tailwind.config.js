module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#AE4CCF',
        'secondary': '#FFF9B6',
        'secondary2': '#C1FFD7',
        'footer': '#F8F3F3'
      },
      fontFamily: {
        'primary': 'Poppins, sans-serif'
      },
      backgroundImage: {
        'subs': "url('./utils/subs.jpg')",
      }
    },
  },
  plugins: [],
}
