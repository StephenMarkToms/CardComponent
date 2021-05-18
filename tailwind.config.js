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
        blue: {
          50: '#1a5c8c',
        },
        tan: {
          50: '#F9F3EE',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
