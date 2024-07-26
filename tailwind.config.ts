import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans"],
        mono: ["var(--font-dm-mono)", "mono"],
        body: ["var(--font-dm-inter)", "sans"],
      },
      fontSize: {
        "h1": ["56px", "106%"],
        "h2": ["46px", "106%"],
        "h3": ["38px", "108%"],
        "h4": ["26px", "106%"],
        "b1": ["26px", "130%"],
        "b2": ["20px", "108%"],
        "b2-medium": ["20px", "106%"],
        "b2-light": ["20px", "130%"],
        "b2-regular": ["20px", "130%"],
        "b3": ["16px", "120%"],
        "b4": ["14px", "120%"],
        "text-button-link": ["16px", "102%"],
        "text-button-link-small": ["14px", "102%"],
      },
      fontWeight: {
        semibold: "600",
        medium: "500",
        regular: "400",
        light: "300",
      },
      letterSpacing: {
        tightest: "-3%",
        tighter: "-2%",
        tight: "-1%",
      },
      colors: {
        black: "#212020",
        white: "#FFFFFF",
        beigeSuperLight: "#FBF5F2",
        beigeLight: "#F4EEEB",
        beigeMediumGrey: "#EEE6E2",
        beigeMediumWarm: "#ECE0DA",
        beigeDark: "#B8A9A2",
        blue01: "#00638A",
        yellow01: "#F2CD96",
        orange01: "#DC5A12",
        red01: "#A61E20",
        green01: "#006434",
        violet01: "#734288",
        redError: "#F15252",
        textGrey: "#045372",
      },
    },
  },
  plugins: [],
};

export default config;
