import React from 'react';
import { Metadata } from 'next';
import { JoinMissionWidget, ContactCompanyWidget } from '@/widgets/contact';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Hubungi Kami & Kemitraan Strategis',
  description:
    'Mari berkolaborasi dan bangun ekosistem digital bersama Sinemus Indonesia. Hubungi tim kami untuk konsultasi proyek dan kemitraan.',
  canonicalUrl: '/contact',
});

export default async function ContactUsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <JoinMissionWidget />
      <ContactCompanyWidget />
    </div>
  );
}


