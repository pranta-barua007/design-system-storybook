/** @type {import('tailwindcss').Config} */
const sharedConfig = require('@acme/foundation/dist/tailwindPreset.config.js');
module.exports = {
  presets: [sharedConfig],
  content: ['./src/**/*.{html,js,tsx,ts}'],
  plugins: [],
}

