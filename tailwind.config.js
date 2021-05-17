module.exports = {
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora'],
        roboto: ['Roboto'],
      },
      colors: {
        primary: {
          50: '#6E6E6E',
          100: '#2D2D2D',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
