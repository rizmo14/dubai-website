import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink:         "#f5687c",
          "pink-dark":  "#e0455a",
          purple:       "#7f4793",
          "purple-dark":"#6a3a7c",
          light:        "#FCEEF5",
          "light-2":    "#FAD8E9",
          dark:         "#0F172A",
          gray:         "#454F5E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
