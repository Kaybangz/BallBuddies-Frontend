/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'rich-black': '040f16',
      'ghost-white': 'fbfbff',
      'process-cyan': '01baef',
      'process-cyan-light': '20cefe',
      'indigo-dye': '0b4f6c',
      'indigo-dye-light': '0f6c95'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

