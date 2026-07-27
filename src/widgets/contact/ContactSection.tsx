'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { ContactCompanyForm, ContactSkeleton, useContactForm } from '@/features/contact';

export const ContactSection: React.FC = () => {
  const { isSubmitting, isSuccess, statusMessage, handleSubmit, resetFormState, isLoading } = useContactForm();

  if (isLoading) {
    return (
      <SectionWrapper id="contact-skeleton">
        <ContactSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="contact-form">
      <ContactCompanyForm
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        isSuccess={isSuccess}
        statusMessage={statusMessage}
        onReset={resetFormState}
      />
    </SectionWrapper>
  );
};
