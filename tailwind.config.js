const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    scale: {
      "-1": "-1",
      110: "1.1",
    },
    // spacing: {
    //   4: "4px",
    //   6: "6px",
    //   8: "8px",
    //   10: "10px",
    //   12: "12px",
    //   14: "14px",
    //   16: "16px",
    //   18: "18px",
    //   20: "20px",
    //   24: "24px",
    //   32: "32px",
    //   64: "64px",
    //   128: "128px",
    // },
    fontSize: {
      0: [
        "0px",
        {
          letterSpacing: "0px",
        },
      ],
      xs: ".625rem",
      sm: ".75rem",
      base: "1rem",
      md: "1.25rem",
      lg: "1.5rem",
      xl: "1.875rem",
      "2xl": "2.25rem",
      "3xl": "3rem",
      "4xl": "3.75rem",
      "5xl": "4.5rem",
      "6xl": "6rem",
    },

    extend: {
      zIndex: {
        "-1": "-1",
        "-10": "-10",
        100: "100",
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(90deg, rgba(186,126,207,1) 0%, rgba(241,158,208,1) 25%, rgba(148,141,242,1) 50%, rgba(185,194,255,1) 75%, rgba(251,206,165,1) 100%)",
        "gradient-right-bottom":
          "linear-gradient(to right bottom, #a34cf5, #8d63fa, #7973fc, #6981f9, #608cf4)",
        "gradient-left-top":
          "linear-gradient(to left top, #a34cf5, #8d63fa, #7973fc, #6981f9, #608cf4)",
        "gradient-left-bottom":
          "linear-gradient(to left bottom, #a34cf5, #8d63fa, #7973fc, #6981f9, #608cf4)",
        "gradient-right-top":
          "linear-gradient(to right top, #a34cf5, #8d63fa, #7973fc, #6981f9, #608cf4)",
        "gradient-right":
          "linear-gradient(to right, #5452f6, #9e5be8, #c76cdb, #e183d3, #f19ed0)",
        "gradient-left":
          "linear-gradient(to left, #5452f6, #9e5be8, #c76cdb, #e183d3, #f19ed0)",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      gray: {
        400: "#64748B",
        500: "#475569",
        600: "#0F172A",
      },
      indigo: "#6366F1",
      purple: "#A34CF5",
      blue: "#608CF4",
      slate: {
        50: "#F8FAFC",
        100: "#F1F5F9",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#334155",
        800: "#1E293B",
        900: "#0F172A",
      },

      yellow: {
        50: "#FEFCE8",
        100: "#FEF9C3",
        200: "#FEF08A",
        300: "#FDE047",
        400: "#FACC15",
        500: "#EAB308",
        600: "#CA8A04",
        700: "#A16207",
        800: "#854D0E",
        900: "#713F12",
      },
    },
    fontFamily: {
      sans: ["DM-Sans", "sans-serif"],
      secondary: ["Manrope", "sans-serif"],
    },
    screens: {
      "2xl": { max: "1536px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "600px" },
      // => @media (max-width: 639px) { ... }

      xsm: { max: "480px" },
    },
  },
};
