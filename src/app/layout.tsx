import type { Metadata } from "next";
import { fontHeading, fontBody, fontMono } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sinemus Indonesia - Corporate Hub",
  description: "Official Corporate Website Sinemus Indonesia",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${fontHeading.variable} ${fontBody.variable} ${fontMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-bg-primary text-content-primary">
        {children}
      </body>
    </html>
  );
}
