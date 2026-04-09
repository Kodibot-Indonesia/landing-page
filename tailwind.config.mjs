/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: { 
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blob: 'blob 7s infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
      animationDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
        2000: '2000ms',
      },
    },
  },
  plugins: [],
};
