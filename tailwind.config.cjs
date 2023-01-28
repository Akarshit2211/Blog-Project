/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          "0%": {
            transform: "translateX(-100px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        slideRight:
          "slideRight 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
    },
  },
  plugins: [],
};
