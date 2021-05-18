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
          50: '#f9f3ee',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
