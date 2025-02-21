/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D84040",
        secondary: "#FF748B",
        background: "#BFD7ED",
        dark: "#334155",
        light: "#f8fafc",
      },
    },
  },
  plugins: [],
};
