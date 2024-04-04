/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodybg: "#838383",
        mobilebg: "#EEEEEE",
        notblack: "#130F0F",
        notwhite: "#EDEDED",
      },
      fontFamily: {
        customFont: ['"gilroy"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
