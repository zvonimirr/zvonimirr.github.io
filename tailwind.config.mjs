import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#171A21",
        secondary: "#B0FE76",
      },
      fontFamily: {
        squada: ["SquadaOne", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        extend: {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        collapse: {
          "0%": { transform: "scaleY(1)" },
          "100%": { transform: "scaleY(0)" },
        },
      },
      animation: {
        extend: "extend 0.5s ease-in-out",
        collapse: "collapse 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
