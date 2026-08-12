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
        '@id': `${productionBase}/units/production#unit`,
        name: 'Sinemus Production',
        url: `${productionBase}/units/production`,
      },
      {
        '@type': 'Organization',
        '@id': `${productionBase}/units/screen#unit`,
        name: 'Sinemus Screen',
        url: `${productionBase}/units/screen`,
      },
      {
        '@type': 'Organization',
        '@id': `${productionBase}/units/academy#unit`,
        name: 'Sinemus Academy',
        url: `${productionBase}/units/academy`,
      },
      {
        '@type': 'Organization',
        '@id': `${productionBase}/units/community#unit`,
        name: 'Sinemus Community',
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

