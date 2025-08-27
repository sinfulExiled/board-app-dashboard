import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/store/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/services/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/types/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ["var(--font-inter)"],
      latha_sn: ["var(--font-latha-sn)"],
      latha_tn: ["var(--font-latha-tn)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grey: {
          100: '#F2F4F7',
          200: '#F2F7FF',
          300: '#E3E9F3',
          400: 'rgba(208, 213, 221, 1)',
          500: '#92A2B9',
          600: '#8298B9',
          700: '#344054',
        },
        black: {
          400: '#667085',
          600: '#475467',
          700: '#101828',
          900: '#000000',
        },
        blue: {
          100: '#EFF8FF',
          200: '#E6F2FF',
          300: '#2E90FA',
          500: '#175CD3',
          700: '#01224A',
          800: '#1D2939',
        },
        green: {
          200: '#ECFDF3',
          500: '#12B76A',
          700: '#027A48',
        },
        white: {
          100: '#FFFFFF',
          400: '#F9FAFB',
          600: '#EAECF0',
          800: '#D0D5DD',
        },
        red: {
          200: '#FDF2FA',
          300: '#FEE4E2',
          400: '#F04438',
          500: '#C11574',
        },
        yellow: {
          300: '#FFFAEB',
        },
        orange: {
          300:'#F79009',
          500: '#B54708',
        },
      },
      boxShadow: {
        "3xl": "0px 4px 4px 0px rgba(16, 24, 40, 0.05)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: {
          fontSize: "var(--html-font-size)",
          fontFamily: "var(--html-font-family)",
        },
      });
    }),
  ],
};
export default config;
