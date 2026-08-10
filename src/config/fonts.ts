import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";

/**
 * Single Source of Truth (SSOT) untuk Konfigurasi Typography Sinemus Indonesia.
 * Primary Font Family: D-DIN (Headings, Body, & UI Elements)
 * Heading Variable: --font-heading
 * Body Variable: --font-body
 * Mono Variable: --font-mono
 */

export const fontHeading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading-fallback",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body-fallback",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
