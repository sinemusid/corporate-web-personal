import React from 'react';
import { Metadata } from 'next';
import { CollaboratorPartnersWidget } from '@/widgets/collaborators';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const revalidate = 3600;

export const metadata: Metadata = constructMetadata({
  title: 'Mitra & Kolaborator Strategis',
  description:
    'Jelajahi jaringan mitra strategis, jaringan komunitas sinema, dan ekosistem kolaborator resmi Sinemus Indonesia.',
  canonicalUrl: '/collaborator',
  image: '/share/sinemus-indonesia.PNG',
  keywords: [
    'Mitra Sinemus Indonesia',
    'Kolaborator Strategis Sinemus',
    'Kemitraan Sinema Indonesia',
    'Jaringan Komunitas Film',
    'Ekosistem Kreatif Sinemus',
  ],
});

export default async function CollaboratorPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Beranda', item: '/' },
          { name: 'Kolaborator', item: '/collaborator' },
        ]}
      />
      <CollaboratorPartnersWidget />
    </>
  );
}


