import React from 'react';
import { Metadata } from 'next';
import { JoinMissionWidget, ContactCompanyWidget } from '@/widgets/contact';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from '@/components/seo/json-ld';

export const revalidate = 3600;

export const metadata: Metadata = constructMetadata({
  title: 'Hubungi Kami & Kemitraan Corporate',
  description:
    'Hubungi tim Sinemus Indonesia untuk konsultasi proyek, kemitraan strategis, distribusi eksibisi, dan kolaborasi ekosistem sinema.',
  canonicalUrl: '/contact',
  image: '/share/sinemus-indonesia.PNG',
  keywords: [
    'Kontak Sinemus Indonesia',
    'Kemitraan Sinemus',
    'Karir Sinemus Indonesia',
    'Konsultasi Proyek Digital',
    'Hubungi Sineas Muslim',
  ],
});

export default async function ContactUsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <BreadcrumbJsonLd
        items={[
          { name: 'Beranda', item: '/' },
          { name: 'Kontak', item: '/contact' },
        ]}
      />
      <LocalBusinessJsonLd />
      <JoinMissionWidget />
      <ContactCompanyWidget />
    </div>
  );
}


