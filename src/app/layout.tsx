import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { fontHeading, fontBody, fontMono } from "@/config/fonts";
import { OrganizationJsonLd, SiteNavigationJsonLd } from "@/components/seo/json-ld";
import { constructMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = constructMetadata();

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
      <body className="min-h-full flex flex-col font-body bg-bg-primary text-content-primary selection:bg-accent-solid selection:text-content-inverse">
        <OrganizationJsonLd />
        <SiteNavigationJsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

