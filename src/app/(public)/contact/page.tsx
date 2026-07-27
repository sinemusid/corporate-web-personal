import React from 'react';
import { JoinMissionWidget, ContactCompanyWidget } from '@/widgets/contact';

export default function ContactUsPage() {
  return (
    <div className="space-y-12 py-8">
      <JoinMissionWidget />
      <ContactCompanyWidget />
    </div>
  );
}
