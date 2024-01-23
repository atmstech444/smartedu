/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#D72121",
        dark: "#0F0F0F",
        mainGray: "#4F4F4F",
        lightGray: "#EEEEEE",
        grey: "#868686",
        lightGray: "#C3C3C3",
        white: "#FFFFFF",
        mainBlue: "#006cfa",
        secondaryGray: "#E7E7E7",
        transparent: "transparent",
        blue: " #0FA4EF",
        lightblue: "#D9EBF4",
      },
      borderRadius: {
        faqBordeR: "8px",
        border: "16px",
        borderFull: "50px",
        buttonBorder: "12px",
        borderHalf: "24px",
        circle: "50%",
        mediumBorder: "32px",
      },
      boxShadow: {
        shad: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
