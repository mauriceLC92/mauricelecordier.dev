const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
      // Add your custom styles here
    }),
  ],
}
