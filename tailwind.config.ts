import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#6C63FF",
            },
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#6C63FF",
            },
          },
        },
      },
    }),
  ],
};
export default config;
