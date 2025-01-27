/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },

      colors: {
        Green200: "hsl(148, 38%, 91%)",
        Green600: "hsl(169, 82%, 27%)",
        Red: "hsl(0, 66%, 54%)",
        Grey500: "hsl(186, 15%, 59%)",
        Grey900: "hsl(187, 24%, 22%)",
      },
    },
  },
  plugins: [],
};
