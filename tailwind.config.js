/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        bounceUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        "move-random": {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(20px, -15px)" },
          "50%": { transform: "translate(-10px, 25px)" },
          "75%": { transform: "translate(15px, 10px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        pulseScale: 'pulseScale 3s ease-in-out infinite',
        "spin-slow": "spin 2s linear infinite",
        'bounce-up-down': 'bounceUpDown 2s infinite ease-in-out',
        "random-move": "move-random 6s ease-in-out infinite alternate",
        "spin-slow": "spin 10s linear infinite",
        "random-spin": "move-random 6s ease-in-out infinite alternate, spin 10s linear infinite",
      },
    },
  },
  plugins: [],
}
