/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        merah: "#D9138A",
        biru: "#12A4D9",
        kuning: "#E2D810",
      },
      fontFamily: {
        Charmonman: ["Charmonman"],
        Poppins: ["Poppins"],
      },
      backgroundImage: {
        logo: "url('/src/assets/gambar/uogp.png')",
      },
    },
  },
  plugins: [],
};
