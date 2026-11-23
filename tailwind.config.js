/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bakery: {
          50: '#FDFBF7',
          100: '#FAF4EC',
          200: '#F3E5D4',
          300: '#E7CEB1',
          400: '#D5A77B',
          500: '#BA804C',
          600: '#9B6132',
          700: '#7B3F00',
          800: '#5F2F00',
          900: '#3D1C00',
        },
        gold: {
          400: '#E5C058',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#996515',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FFFDF9',
          200: '#FFF8F0',
          300: '#FDF3E5',
          400: '#F7E7CE',
        },
        veg: {
          500: '#15803d',
          600: '#166534',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 4px 20px -2px rgba(123, 63, 0, 0.08), 0 2px 6px -1px rgba(123, 63, 0, 0.04)',
        'warm-lg': '0 10px 30px -4px rgba(123, 63, 0, 0.12), 0 4px 12px -2px rgba(123, 63, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
