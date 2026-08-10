import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'D-DIN'", "'DIN Alternate'", "var(--font-heading)", "sans-serif"],
        body: ["'D-DIN'", "'DIN Alternate'", "var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["'D-DIN'", "'DIN Alternate'", "var(--font-body)", "sans-serif"],
        din: ["'D-DIN'", "'DIN Alternate'", "sans-serif"],
      },
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          elevated: "var(--bg-elevated)",
          inverse: "var(--bg-inverse)",
        },
        content: {
          primary: "var(--content-primary)",
          secondary: "var(--content-secondary)",
          tertiary: "var(--content-tertiary)",
          muted: "var(--content-muted)",
          inverse: "var(--content-inverse)",
        },
        borderToken: {
          subtle: "var(--border-subtle)",
          default: "var(--border-default)",
          strong: "var(--border-strong)",
          focus: "var(--border-focus)",
        },
        accent: {
          solid: "var(--accent-solid)",
          "solid-hover": "var(--accent-solid-hover)",
          subtle: "var(--accent-subtle)",
          "subtle-hover": "var(--accent-subtle-hover)",
        },
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        gutter: "24px",
        "container-max": "100%",
        "margin-mobile": "20px",
        unit: "4px",
        "margin-desktop": "64px",
      },
      keyframes: {
        slowPan: {
          "0%": { objectPosition: "center top" },
          "100%": { objectPosition: "center bottom" },
        },
      },
      animation: {
        slowPan: "slowPan 30s ease-in-out infinite alternate",
      },
      backgroundImage: {
        "white-pattern": "url('/images/white-bg-pattern.png')",
      },
    },
  },
  plugins: [forms, containerQueries],
};

export default config;