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
    },
  },
  plugins: [],
};
