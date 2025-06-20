/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, ts}",
    "./projects/libraries/src/**/*.{html, ts}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('"
      }
    },
  },
  plugins: [],
}

