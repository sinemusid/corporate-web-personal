import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/features/**/*.{js,ts,jsx,tsx,mdx}", // Penting: Tambahkan domain features Anda
    ],
    theme: {
        extend: {
            colors: {
                "surface-variant": "#303540",
                "inverse-primary": "#00677f",
                "inverse-on-surface": "#2c303b",
                "inverse-surface": "#dee2f1",
                "on-tertiary-fixed": "#291800",
                "on-secondary-container": "#00285c",
                tertiary: "#ffd59c",
                "on-primary-fixed-variant": "#004e60",
                "surface-container-highest": "#303540",
                "on-secondary-fixed": "#001a41",
                "on-error-container": "#ffdad6",
                "on-primary": "#003543",
                "on-error": "#690005",
                "surface-tint": "#4cd6ff",
                "on-background": "#dee2f1",
                secondary: "#adc6ff",
                "on-surface-variant": "#bbc9cf",
                "surface-container-lowest": "#090e18",
                primary: "#a4e6ff",
                "surface-bright": "#343945",
                "secondary-container": "#4b8eff",
                "on-tertiary-fixed-variant": "#624000",
                background: "#0a192f",
                "surface-container": "#1b202a",
                "surface-dim": "#0e131d",
                "secondary-fixed-dim": "#adc6ff",
                "on-primary-container": "#00566a",
                error: "#ffb4ab",
                "surface-container-low": "#171c26",
                "secondary-fixed": "#d8e2ff",
                "primary-container": "#00d1ff",
                "on-primary-fixed": "#001f28",
                "primary-fixed-dim": "#4cd6ff",
                "on-tertiary-container": "#6b4700",
                "tertiary-fixed": "#ffddb1",
                "primary-fixed": "#b7eaff",
                "tertiary-fixed-dim": "#ffba49",
                "tertiary-container": "#feb127",
                "surface-container-high": "#252a35",
                "on-secondary-fixed-variant": "#004493",
                "error-container": "#93000a",
                "on-surface": "#dee2f1",
                "on-tertiary": "#442b00",
                surface: "#0a192e",
                "on-secondary": "#002e69",
                "outline-variant": "#3c494e",
                outline: "#859399",
            },
            borderRadius: {
                DEFAULT: "0.125rem",
                lg: "0.25rem",
                xl: "0.5rem",
                full: "0.75rem",
            },
            spacing: {
                gutter: "24px",
                // FIX: Ubah dari "1440px" menjadi "100%" agar tata letak melebar penuh
                "container-max": "100%",
                "margin-mobile": "20px",
                unit: "4px",
                "margin-desktop": "64px", // Ini akan menjadi jarak mentok (padding) dari ujung layar
            },
            fontFamily: {
                sans: ["var(--font-sans)", "sans-serif"],
                heading: ["var(--font-heading)", "sans-serif"],
                mono: ["var(--font-mono)", "monospace"],
                // Legacy alias mapping to SSOT variables
                "display-lg": ["var(--font-heading)", "sans-serif"],
                "label-sm": ["var(--font-mono)", "monospace"],
                "body-lg": ["var(--font-sans)", "sans-serif"],
                "body-md": ["var(--font-sans)", "sans-serif"],
                "display-lg-mobile": ["var(--font-heading)", "sans-serif"],
                "headline-md": ["var(--font-heading)", "sans-serif"],
            },
            fontSize: {
                "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.04em", fontWeight: "700" }],
                "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" }],
                "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
                "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
                "display-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }],
                "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" }],
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
        },
    },
    plugins: [forms, containerQueries],
};

export default config;