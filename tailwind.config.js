/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        128: "200vh",
        footer: "40vh",
        responsiveFooter: "30vh",
      },
      backgroundImage: {
        // wappin: "url('./assets/img/wappin.png')",
        // foodieOrder: "url('./assets/img/IMG_0692.jpg')",
        footerBg: "url('./assets/img/footerBg2.svg')",
      },
      backgroundColor: {
        main: "#F5F0EA",
        dark: "#383838",
        sidebarMenuBg: "rgba(56, 56, 56, 0.95)",
        card: "#FEE1BE",
        portfolioCart: "#FFD4A0",
        contact: "rgba(172, 122, 79, 0.22)",
        // portfolioCart: "rgba(255, 212, 160, 0.29)",
      },
      textColor: {
        black: "#383838",
        title: "#EF9A53",
        white: "#F5F0EA",
        cream: "#FEE1BE",
      },
      fontFamily: {
        conforter: ["Kameron", "serif"],
        grandStander: ["Grandstander", "cursive"],
      },
      keyframes: {
        "spin-slow": {
          from: { left: "translateX(0)" },
          to: { transform: "translateX(-158%)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 30s linear infinite",
      },
      borderColor: {
        orangeBorder: "#EF9A53",
        hrBorder: "#FFD4A0",
      },
      fontSize: {
        xs: "0.5rem",
        xs1: "0.7rem",
        xs2: "0.8rem",
      },
    },
  },
  plugins: [],
};
