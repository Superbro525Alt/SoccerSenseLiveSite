const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#f2f3ff',
          100: '#eef2ff',
          200: '#dee5ff',
          300: '#ccd3ff',
          400: '#adc0ff',
          500: '#5d83fe',
          600: '#2f65ef',
          700: '#275feb',
          800: '#2258cc',
          900: '#1b3ba5'
        }
      }
    }
  }
};

module.exports = config;