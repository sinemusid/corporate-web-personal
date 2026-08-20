import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { JoinMissionWidget, ContactCompanyWidget } from '@/widgets/contact';
import { JoinMissionSkeleton, ContactCompanySkeleton } from '@/features/contact';
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

      {/* Top Section: Join Mission CTA */}
      <Suspense
        fallback={
          <div className="w-full min-h-[calc(100vh-112px)] flex items-center justify-center px-4 py-12">
            <JoinMissionSkeleton />
          </div>
        }
      >
        <JoinMissionWidget />
      </Suspense>

      {/* Main Section: Contact Info & Form */}
      <Suspense
        fallback={
          <div className="w-full py-12 px-4">
            <ContactCompanySkeleton />
          </div>
        }
      >
        <ContactCompanyWidget />
      </Suspense>
    </div>
  );
}
