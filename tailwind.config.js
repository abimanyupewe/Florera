/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['home.html'],
  theme: {
    extend: {
      // ini untuk menambahkan fitur yang sudah dimiliki tailwind
      colors: {
        // beige_gw: "#FEF3E2",
        // beige2_gw: "#FFEAC5",
        // green_gw: "#0A6847",
        // green_pastel: "#A5DD9B",
      },

      // font
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      // ukuran web
      screens: {
        "2xl": "1320px",
      },

      // animations
      animation: {
        // "scale-in-out": "scaleInOut 100s ease-in-out infinite",
        // "rotate-slow": "rotateSlow 100s linear infinite",
      },

      keyframes: {
        // scaleInOut: {
        //   "0%, 100%": { transform: "scale(1.1)" },
        //   "50%": { transform: "scale(1)" },
        // },
        // rotateSlow: {
        //   "0%": { transform: "rotate(0deg)" },
        //   "100%": { transform: "rotate(360deg)" },
        // },
      },
    },
  },
  plugins: [],
}

