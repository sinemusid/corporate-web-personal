import React from 'react';
import { UnitDetailPageClient } from './UnitDetailPageClient';

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

export default function UnitDetailPage({ params }: UnitDetailPageProps) {
  return <UnitDetailPageClient params={params} />;
}
