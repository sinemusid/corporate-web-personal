import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.productionUrl || 'https://sinemus.id';

  const staticRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/about', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/contact', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/collaborator', priority: 0.6, changeFrequency: 'monthly' as const },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const unitSlugs = ['screen', 'production', 'academy', 'community'];
  const unitRoutes = unitSlugs.map((slug) => ({
    url: `${baseUrl}/units/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...unitRoutes];
}


