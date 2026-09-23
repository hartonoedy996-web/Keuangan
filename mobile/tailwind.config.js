/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        cream: {
          bg: '#FDFBF7',
          card: '#FFFFFF',
          textMain: '#2D3748',
          textSecondary: '#718096',
        },
        forest: {
          bg: '#1A202C',
          card: '#2D3748',
          textMain: '#FDFBF7',
          textSecondary: '#A0AEC0',
        },
        finance: {
          income: '#38A169',
          expense: '#E53E3E',
          neutral: '#3182CE',
        },
      },
    },
  },
  plugins: [],
};
