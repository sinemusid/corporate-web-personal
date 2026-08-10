import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchUnitBySlug } from '@/features/units/api';
import { siteConfig } from '@/config/site.config';
import { constructMetadata } from '@/lib/seo';
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

  return constructMetadata({
    title: unit.title,
    description: unit.description,
    image: unit.bannerUrl || siteConfig.ogImage,
    canonicalUrl: `/units/${unit.slug}`,
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
      <UnitDetailWidget unit={unit} />
    </main>
  );
}
