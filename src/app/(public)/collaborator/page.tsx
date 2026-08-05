import React from 'react';
import { Metadata } from 'next';
import { CollaboratorPartnersWidget } from '@/widgets/collaborators';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Mitra & Kolaborator Strategis',
  description:
    'Jelajahi jaringan mitra strategis, vendor produksi, dan ekosistem kolaborator resmi Sinemus Indonesia.',
  canonicalUrl: '/collaborator',
});

export default async function CollaboratorPage() {
  return <CollaboratorPartnersWidget />;
}


