/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        "sky-blue": "#87CEEB",
        "ocean-blue": "#5BA4C9",
        "deep-blue": "#4A90A4",
        "nature-green": "#4CAF50",
        "leaf-green": "#7CB342",
        "pomelo-orange": "#FF9800",
        "warm-orange": "#FFB74D",
        cream: "#FFF8E7",
        "warm-cream": "#FDF5E6",
      },
      animation: {
        "slow-zoom": "slowZoom 20s ease-in-out infinite alternate",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
