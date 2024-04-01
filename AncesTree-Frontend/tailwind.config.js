/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hover-element': "url('public/assets/hover_element.png')",
      }
    },
    fontFamily: {
      'IBM-Plex-Mono': ['"IBM Plex Mono"', 'mono-space'],
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }),],
}

