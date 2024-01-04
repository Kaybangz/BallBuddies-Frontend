/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/preline/preline.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "richer-black": "#07090f",
        "rich-black": "#040f16",
        "ghost-white": "#fbfbff",
        "process-cyan": "#01baef",
        "process-cyan-light": "#20cefe",
        "indigo-dye": "#0b4f6c",
        "indigo-dye-light": "#0f6c95",
        "engineering-orange": "#b80c09",
        "engineering-orange-light": "#f41915",
        "electric-blue": "#75F4F4",
        "non-photo-blue": "#90E0F3",
        periwinkle: "#B8B3E9",
        amaranth: "#D999B9",
        puce: "#D17B88",
        "magenta-dye": "#BA2C73",
        "persian-rose": "#FF37A6",
        "midnight-blue": "#372772",
        "dark-purple": "#3A2449",
        celadon: "#A1E8AF",
      },
      animation: {
        "move-forward": "moveForward 0.4s ease-in-out forwards",
      },
      keyframes: {
        moveForward: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(.3px)" },
        },
      },
      fontSize: {
        "4xl": "3.2rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
