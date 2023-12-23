/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    // screens: {
    //   'tablet': '860px',
    // },
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
      'LibreFranklin': ['LibreFranklin', 'sans-serif']
    },

    backgroundImage: {
      'brown': ['linear-gradient(152deg, #FFC881 -19.27%, #DA8517 109.91%)'],
      'svg-hover': ['linear-gradient(90deg, rgba(238, 169, 80, 0.27) 2.77%, rgba(238, 169, 80, 0.00) 109.06%)'],
      'box-hover': [' linear-gradient(90deg, rgba(238, 169, 80, 0.27) 2.77%, rgba(238, 169, 80, 0.00) 109.06%)'],
    },

    extend: {},
  },
  plugins: [],
}

