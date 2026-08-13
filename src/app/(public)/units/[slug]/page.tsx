import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchUnitBySlug } from '@/features/units/api';
import { siteConfig } from '@/config/site.config';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd, UnitJsonLd } from '@/components/seo/json-ld';
import { UnitDetailWidget } from '@/widgets/units';

export const revalidate = 3600;

interface UnitDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return [
    { slug: 'production' },
    { slug: 'screen' },
    { slug: 'academy' },
    { slug: 'community' },
  ];
}

export async function generateMetadata({ params }: UnitDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const unit = await fetchUnitBySlug(resolvedParams.slug);

  if (!unit) {
    return constructMetadata({
      title: 'Unit Not Found',
      noIndex: true,
    });
  }

  const cleanUnitTitle = `${resolvedParams.slug.charAt(0).toUpperCase()}${resolvedParams.slug.slice(1)} Unit`;
  const shareImage = unit.ogImage || siteConfig.ogImage;

  return constructMetadata({
    title: cleanUnitTitle,
    description: unit.description,
    image: shareImage,
    canonicalUrl: `/units/${unit.slug}`,
    keywords: [
      cleanUnitTitle,
      unit.title,
      `Sinemus ${cleanUnitTitle}`,
      'Sineas Muslim Indonesia',
      'Sinemus Indonesia',
      'Unit Bisnis Sinemus',
      ...(unit.features || []),
    ],
  });
}

export default async function UnitDetailPage({ params }: UnitDetailPageProps) {
  const resolvedParams = await params;
  const unit = await fetchUnitBySlug(resolvedParams.slug);

  if (!unit) {
    notFound();
  }

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: 'Beranda', item: '/' },
          { name: 'Unit Bisnis', item: '/' },
          { name: unit.title, item: `/units/${unit.slug}` },
        ]}
      />
      <UnitJsonLd unit={unit} />
      <UnitDetailWidget unit={unit} />
    </main>
  );
}

