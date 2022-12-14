/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '350px',
      'sm': '640px',
      'md': '750px',
      'lg': '1100px',
    },
    extend: {
      screens: {
        'xs': '350px',
        'sm': '640px',
        'md': '750px',
        'lg': '1100px',
      },
      backgroundImage: {
        'hero': "url('../public/HeroImage3.svg')",
        'mountains': "url('../public/sunsetmountain.jpg')",
      },
      fontFamily: {
        'merriweather': ['Mereiweather', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

