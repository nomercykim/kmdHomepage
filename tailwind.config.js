/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
          'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      colors: {
        'darkbrown-800': '#2c1b09',
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out forwards',
      },
      fontFamily: {
        'grandiflora': ['GrandifloraOne-Regular', 'sans-serif'],
        'sungdong': ['SungDongMyungjo', 'serif'],
        'GowunBatang': ['GowunBatang-Regular', 'serif'],
        'HSBombaram21':['HSBombaram21-Regular', 'serif'],
        'AritaburiSemiBold':['AritaburiSemiBold', 'serif'],
        'AritadotumMedium':['Arita-dotum-Medium', 'sans-serif'],
        'SUITERegular':['SUITE-Regular','sans-serif']
      },
      spacing: {
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [],
};
