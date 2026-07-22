'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';

// Feature Imports exclusively via Public API Gates
import { ContactCompanyForm, useContactForm } from '@/features/contact';
import { JoinOurMission } from '@/features/career';

export default function ContactUsPage() {
  const { isSubmitting, statusMessage, handleSubmit } = useContactForm();

  return (
    <div className="space-y-12">
      {/* Join Our Mission Banner */}
      <SectionWrapper>
        <JoinOurMission />
      </SectionWrapper>

      {/* Contact Form & Location Section */}
      <SectionWrapper darkBg id="contact-form">
        <ContactCompanyForm
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          statusMessage={statusMessage}
        />
      </SectionWrapper>
    </div>
  );
}
