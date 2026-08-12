import type { Metadata } from "next";
import { fontHeading, fontBody, fontMono } from "@/config/fonts";
import { siteConfig } from "@/config/site.config";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Sinemus Indonesia`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
      <body className="min-h-full flex flex-col font-body bg-bg-primary text-content-primary selection:bg-accent-solid selection:text-content-inverse">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}

