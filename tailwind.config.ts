import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        // Branded Colors
        greenPrimary: "#10790C",
        greenSecondary: "#C7DCC6",
        greenDeep: "#0D610A",
        greenDark: "#0B5508",

        // Neutral Colors
        blackPrimary: "#252432",
        greyPrimary: "#8987A1",
        greySecondary: "#DEE2E6",
        whiteSecondary: "#F5F3F3",
        whitePrimary: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-raleway)"],
        bukvoglot: ["var(--font-bukvoglot)"],
        druzhok: ["var(--font-druzhok)"],
      },
      height: {
        vh90: "90vh",
        vh80: "80vh",
        vh70: "70vh",
        vh60: "60vh",
        25: "100px",
        30: "120px",
        85: "340px",
        115: "460px",
        134: "532px",
        155: "620px",
        100: "400px",
        124: "496px",
      },
      width: {
        130: "520px",
        156: "624px",
        182: "728px",
      },
      margin: {
        30: "120px",
        25: "100px",
      },
      padding: {
        15: "60px",
        25: "100px",
        30: "120px",
        35: "140px",
      },
      fontSize: {
        xxxs: "6px",
        xxs: ["9px", "1.5"],
        xs10: "11px",
        "3.5xl": "32px",
      },
      screens: {
        xl: "1200px",
        lg: "960px",
        md: "640px",
        sm: "480px",
        xs: "320px",
      },
    },
  },
  plugins: [],
};
export default config;
