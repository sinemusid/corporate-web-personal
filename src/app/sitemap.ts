import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = ['', '/about', '/collaborator', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const unitSlugs = ['production', 'screen', 'academy', 'community'];
  const unitRoutes = unitSlugs.map((slug) => ({
    url: `${baseUrl}/units/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...unitRoutes];
}
