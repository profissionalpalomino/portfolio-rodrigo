/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        papel: '#E8E4DD',
        sinal: '#E63B2E',
        offwhite: '#F5F3EE',
        preto: '#111111',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
