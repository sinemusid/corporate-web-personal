import { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';

interface ConstructMetadataParams {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  type?: 'website' | 'article';
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
}: ConstructMetadataParams = {}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;

  return {
    title: metaTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl || '/',
    },
    openGraph: {
      title: metaTitle,
      description,
      url: canonicalUrl || '/',
      siteName: siteConfig.name,
      locale: 'id_ID',
      type,
      images: [
        {
          url: image,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description,
      images: [image],
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
