/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'glow': '0px 10px 10px rgba(255, 255, 255, 0.15)',
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
        marquee2: 'marquee2 50s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        "shimmer": {
          "100%": {
            "transform": "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [],
}

