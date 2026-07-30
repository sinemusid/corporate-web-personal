import React from 'react';
import { JoinMissionWidget, ContactCompanyWidget } from '@/widgets/contact';

export default function ContactUsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <JoinMissionWidget />
      <ContactCompanyWidget />
    </div>
  );
}
