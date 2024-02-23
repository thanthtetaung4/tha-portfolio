/** @type {import('tailwindcss').Config} */
import tailwindScrollBar from "tailwind-scrollbar";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#365486",
        secondary: "#AAD9BB",
        purpleAccent: "#3D155F",
      },
      fontFamily: {
        mont: ["Montserrat", "sans"],
      },
    },
    plugins: [tailwindScrollBar],
  },
};
