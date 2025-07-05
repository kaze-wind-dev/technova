import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--tn-color-black)",
        primary: "var(--tn-color-primary)",
        "primary-hover": "var(--tn-color-primary-hover)",
        theme: "var(--tn-color-theme)",
        gray: "var(--tn-color-gray)",
        "gray-medium": "var(--tn-color-gray-medium)",
        white: "var(--tn-color-white)",
      },
      backgroundColor: {
        primary: "var(--tn-bg-primary)",
        "primary-hover": "var(--tn-bg-primary-hover)",
        theme: "var(--tn-bg-theme)",
        gray: "var(--tn-bg-gray)",
        "gray-medium": "var(--tn-bg-gray-medium)",
      },
      borderColor: {
        primary: "var(--tn-border-primary)",
        gray: "var(--tn-border-gray)",
        white: "var(--tn-border-white)",
      },
      textColor: {
        primary: "var(--tn-color-primary)",
        gray: "var(--tn-color-gray)",
        white: "var(--tn-color-white)",
        black: "var(--tn-color-black)",
      },
       fontFamily: {
          base: ['var(--tn-font-base)', 'sans-serif'],
          sub: ['var(--tn-font-sub)', 'sans-serif'],
      },
    },
  },
};
export default config;
