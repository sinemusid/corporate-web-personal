import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const productionBase = siteConfig.productionUrl || 'https://sinemus.id';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${productionBase}/sitemap.xml`,
  };
}


