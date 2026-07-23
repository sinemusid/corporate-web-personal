import type { Metadata } from "next";
import { fontSans, fontHeading, fontMono } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sinemus Indonesia - Corporate Hub",
  description: "Official Corporate Website Sinemus Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

