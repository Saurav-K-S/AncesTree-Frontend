/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    rotate: {
      '16': '16deg',
      '7': '7deg',
      '-2': '358deg',
      '-11': '349deg',
    },
    extend: {
      backgroundImage: {
        'hover-element': "url('src/assets/hover_element.png')",
      }
    },
    fontFamily: {
      'IBM-Plex-Mono': ['"IBM Plex Mono"', 'mono-space'],
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }),],
}

