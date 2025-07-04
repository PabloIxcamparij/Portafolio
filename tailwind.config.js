// tailwind.config.js
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "10%", visibility: "hidden" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        typing: "typing 2s steps(20) alternate, blink .7s infinite",
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
