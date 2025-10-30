/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        border: "var(--border)",
        ring: "var(--ring)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        cardBorder: "#1f1f1f",
        highlight: "#ff007f",
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
        full: "9999px",
      },
      backgroundImage: {
        hero:"url('/pexels-cottonbro-9665185.jpg')",
        cards: "linear-gradient(to bottom, #000000, #000000)",
        gradientHeading: 'linear-gradient(to right, #ADA996,#F2F2F2,#DBDBDB,#EAEAEA )',
        gradientProblemCards: 'linear-gradient(to top left, #0f0c29,#302b63,#24243e )',
        gradientFeature: 'linear-gradient(to top left, #0f0c29,#302b63,#24243e )',
        gradientDark: 'linear-gradient(to top right, #000000, #232526)',
        gradientDarkReverse: 'linear-gradient(to right, #434343, #000000)',
        gradientDarkTransparent: 'linear-gradient(to right, #000000, #43434380)',

      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 0, 127, 0.6)", // pink glow
        soft: "0 4px 30px rgba(0, 0, 0, 0.1)", // soft UI shadow
        card: "0 0 20px rgba(0, 0, 0, 0.3)", // for dark cards
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
