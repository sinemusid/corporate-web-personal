import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";

/**
 * Single Source of Truth (SSOT) untuk Konfigurasi Typography Sinemus Indonesia.
 * Heading: Plus Jakarta Sans (--font-heading)
 * Body: Inter (--font-body)
 * Mono: JetBrains Mono (--font-mono)
 */

export const fontHeading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
