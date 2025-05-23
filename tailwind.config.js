/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e5eeff',
          200: '#cddfff',
          300: '#a7c7ff',
          400: '#7aa6ff',
          500: '#4c7dfa',
          600: '#2c5bf0',
          700: '#1e44dd',
          800: '#1e37b0',
          900: '#1a308a',
        },
        orange: {
          50: '#fff8f0',
          100: '#fff0e0',
          200: '#ffdcb8',
          300: '#ffc088',
          400: '#ff9c4d',
          500: '#ff7d1a',
          600: '#f05e00',
          700: '#cc4d03',
          800: '#a33f0a',
          900: '#84350c',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};