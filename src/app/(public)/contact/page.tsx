'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';

// Feature Imports exclusively via Public API Gates
import { ContactCompanyForm, useContactForm } from '@/features/contact';

export default function ContactUsPage() {
  const { isSubmitting, isSuccess, statusMessage, handleSubmit, resetFormState } = useContactForm();

  return (
    <div className="space-y-12 py-8">
      {/* Contact Form & Location Section */}
      <SectionWrapper id="contact-form">
        <ContactCompanyForm
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          isSuccess={isSuccess}
          statusMessage={statusMessage}
          onReset={resetFormState}
        />
      </SectionWrapper>
    </div>
  );
}

