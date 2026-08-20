import { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';

interface ConstructMetadataParams {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  type?: 'website' | 'article';
  keywords?: string[];
  googleVerification?: string;
}

/**
 * Helper untuk mendapatkan Base URL secara dinamis sesuai environment:
 * 1. NEXT_PUBLIC_SITE_URL (jika di-set eksplisit)
 * 2. VERCEL_PROJECT_PRODUCTION_URL / VERCEL_URL (jika di Vercel Preview/Staging)
 * 3. siteConfig.url (default https://sinemus.id)
 */
export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')
      ? process.env.NEXT_PUBLIC_SITE_URL
      : `https://${process.env.NEXT_PUBLIC_SITE_URL}`;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.NODE_ENV === 'development') {
    return `http://localhost:${process.env.PORT || 3000}`;
  }
  return siteConfig.url;
}

/**
 * Utility helper untuk menggenerasi objek Metadata Next.js secara dinamis,
 * terstandarisasi, dan terpusat sesuai aturan .ai/context/seo-performance.md.
 */
export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  canonicalUrl,
  noIndex = false,
  type = 'website',
  keywords,
  googleVerification = siteConfig.verification.google,
}: ConstructMetadataParams = {}): Metadata {
  const brandSuffix = ` – ${siteConfig.brandName}`;
  const metaTitle = title
    ? title.includes(siteConfig.brandName)
      ? title
      : `${title}${brandSuffix}`
    : siteConfig.name;
  
  const productionBase = siteConfig.productionUrl || 'https://sinemus.id';
  const stagingShareBase = siteConfig.stagingShareUrl || 'https://sinemus.vercel.app';

  const rawPath = canonicalUrl || '/';
  const cleanPath = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;

  // Google Canonical Tag (Terkunci ke https://sinemus.id/...)
  const canonicalTarget = rawPath.startsWith('http')
    ? rawPath
    : `${productionBase}${cleanPath}`;

  // OpenGraph URL
  const ogUrl = rawPath.startsWith('http')
    ? rawPath
    : `${stagingShareBase}${cleanPath}`;

  // Share Image URL (Terkunci ke https://sinemus.vercel.app/share/...)
  let absoluteImageUrl: string;
  if (image.startsWith('http')) {
    absoluteImageUrl = image.replace(/^https?:\/\/[^\/]+/, stagingShareBase);
  } else {
    absoluteImageUrl = `${stagingShareBase}${image.startsWith('/') ? '' : '/'}${image}`;
  }

  return {
    title: metaTitle,
    description,
    keywords: keywords && keywords.length > 0 ? keywords : undefined,
    metadataBase: new URL(stagingShareBase),
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/icon.png', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
    },
    verification: googleVerification
      ? {
          google: googleVerification,
        }
      : undefined,
    alternates: {
      canonical: canonicalTarget,
    },
    openGraph: {
      title: metaTitle,
      description,
      url: ogUrl,
      siteName: siteConfig.name,
      locale: 'id_ID',
      type,
      images: [
        {
          url: absoluteImageUrl,
          secureUrl: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: metaTitle,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description,
      images: [absoluteImageUrl],
      creator: '@sineasmuslim_id',
      site: '@sineasmuslim_id',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
