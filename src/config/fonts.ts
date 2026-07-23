import { Montserrat, JetBrains_Mono } from "next/font/google";

/**
 * Single Source of Truth (SSOT) untuk Konfigurasi Typography Sinemus Indonesia.
 * Menggunakan ONLY Montserrat untuk seluruh aspek typography (Sans, Body, & Heading)
 * dengan variasi weight untuk hirarki visual yang bersih, modern, dan profesional.
 * JetBrains Mono khusus untuk elemen teknis / angka / badge.
 */

export const fontSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const fontHeading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
