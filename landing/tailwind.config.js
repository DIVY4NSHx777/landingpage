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
        gradientHeading: 'linear-gradient(to top right, #FC466B, #3F5EFB)',
        gradientDark: 'linear-gradient(to top right, #000000, #232526)',
        gradientDarkReverse: 'linear-gradient(to right, #434343, #000000)',
        gradientDarkTransparent: 'linear-gradient(to right, #000000, #43434380)',

      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
