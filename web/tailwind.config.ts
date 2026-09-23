import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          bg: '#FDFBF7',
          card: '#FFFFFF',
          textMain: '#2C2924',
          textSecondary: '#8B8377',
        },
        forest: {
          bg: '#072A24',
          card: '#0B3C33',
          textMain: '#FFFFFF',
          textSecondary: '#729B93',
        },
        finance: {
          income: '#10B981',
          expense: '#EF4444',
          warning: '#F59E0B',
        }
      },
      boxShadow: {
        'soft': '0 4px 10px rgba(243, 236, 224, 0.3)',
      }
    },
  },
  plugins: [],
};
export default config;
