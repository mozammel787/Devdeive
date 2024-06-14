/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2fa75f",
          "secondary": "#222e48",
          "accent": "#ffc700",
          "neutral": "#f4fbf7",
        },
      },
    ],
  },
};
