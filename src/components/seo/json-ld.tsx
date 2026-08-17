import React from 'react';
import { siteConfig } from '@/config/site.config';

export interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const productionBase = siteConfig.productionUrl || 'https://sinemus.id';
  const itemListElement = items.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.item.startsWith('http')
      ? crumb.item
      : `${productionBase}${crumb.item === '/' ? '' : crumb.item}`,
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd() {
  const productionBase = siteConfig.productionUrl || 'https://sinemus.id';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${productionBase}/#website`,
    name: siteConfig.name,
    url: `${productionBase}/`,
    description: siteConfig.description,
    inLanguage: 'id-ID',
    publisher: {
      '@id': `${productionBase}/#organization`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const productionBase = siteConfig.productionUrl || 'https://sinemus.id';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${productionBase}/#localbusiness`,
    name: siteConfig.name,
    parentOrganization: {
      '@id': `${productionBase}/#organization`,
    },
    image: `${productionBase}/share/sinemus-indonesia.PNG`,
    url: `${productionBase}/`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bandung',
      addressCountry: 'ID',
    },
    sameAs: Object.values(siteConfig.links).filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function OrganizationJsonLd() {
  const productionBase = siteConfig.productionUrl || 'https://sinemus.id';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${productionBase}/#organization`,
    name: 'Sineas Muslim Indonesia',
    legalName: siteConfig.legalName,
    alternateName: siteConfig.alternateName,
    url: `${productionBase}/`,
    logo: `${productionBase}/share/sinemus-indonesia.PNG`,
    description: siteConfig.description,
    sameAs: Object.values(siteConfig.links).filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      email: siteConfig.contact.email,
    },
    subOrganization: [
      {
        '@type': 'Organization',
        '@id': `${productionBase}/units/screen#unit`,
        name: 'Screen Unit',
        url: `${productionBase}/units/screen`,
      },
      {
        '@type': 'Organization',
        '@id': `${productionBase}/units/production#unit`,
        name: 'Production Unit',
        url: `${productionBase}/units/production`,
      },
      {
        '@type': 'Organization',
        '@id': `${productionBase}/units/academy#unit`,
        name: 'Academy Unit',
        url: `${productionBase}/units/academy`,
      },
      {
        '@type': 'Organization',
        '@id': `${productionBase}/units/community#unit`,
        name: 'Community Unit',
        url: `${productionBase}/units/community`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function SiteNavigationJsonLd() {
  const productionBase = siteConfig.productionUrl || 'https://sinemus.id';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'Screen Unit',
        description: 'Jaringan eksibisi sinema, pemutaran independen, dan penayangan digital.',
        url: `${productionBase}/units/screen`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: 'Production Unit',
        description: 'Rumah produksi film layar lebar, dokumenter, dan konten audio-visual.',
        url: `${productionBase}/units/production`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: 'Academy Unit',
        description: 'Inkubator dan pelatihan intensif talenta perfilman masa depan.',
        url: `${productionBase}/units/academy`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: 'Community Unit',
        description: 'Wadah jejaring sineas independen dan apresiasi karya.',
        url: `${productionBase}/units/community`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 5,
        name: 'Tentang Kami',
        description: 'Profil Sinemus Indonesia, visi misi, struktur organisasi, dan portofolio.',
        url: `${productionBase}/about`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 6,
        name: 'Hubungi Kami',
        description: 'Hubungi Sinemus Indonesia untuk kemitraan corporate dan konsultasi.',
        url: `${productionBase}/contact`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export interface UnitJsonLdProps {
  unit: {
    slug: string;
    title: string;
    description: string;
    about?: string;
  };
}

export function UnitJsonLd({ unit }: UnitJsonLdProps) {
  const productionBase = siteConfig.productionUrl || 'https://sinemus.id';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${productionBase}/units/${unit.slug}#unit`,
    name: unit.title,
    description: unit.description,
    url: `${productionBase}/units/${unit.slug}`,
    parentOrganization: {
      '@type': 'Organization',
      '@id': `${productionBase}/#organization`,
      name: 'Sineas Muslim Indonesia',
      alternateName: 'Sinemus',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

