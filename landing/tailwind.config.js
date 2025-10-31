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
        hero: "url('/pexels-cottonbro-9665185.jpg')",
        cards: "linear-gradient(to bottom, #000000, #000000)",
        gradientHeading: 'linear-gradient(to right, #ADA996,#F2F2F2,#DBDBDB,#EAEAEA)',
        gradientProblemCards: 'linear-gradient(to top left, #0f0c29,#302b63,#24243e)',
        gradientFeature: 'linear-gradient(to top left, #0f0c29,#302b63,#24243e)',
        gradientDark: 'linear-gradient(to top right, #000000, #232526)',
        gradientDarkReverse: 'linear-gradient(to right, #434343, #000000)',
        gradientDarkTransparent: 'linear-gradient(to right, #000000, #43434380)',
        
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 0, 127, 0.6)",
        soft: "0 4px 30px rgba(0, 0, 0, 0.1)",
        card: "0 4px 20px -5px rgba(0, 0, 0, 0.2)",
        cardHover: "0 8px 30px -5px rgba(0, 0, 0, 0.3), 0 0 15px -3px rgba(99, 102, 241, 0.2)",
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
      },
      borderColor: {
        card: 'rgba(255, 255, 255, 0.05)',
        cardHover: 'rgba(99, 102, 241, 0.3)'
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
