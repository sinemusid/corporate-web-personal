'use client';

import { useState, useEffect } from 'react';
import { PartnerItem, ContactFormData } from '../types';
import { fetchPartners, submitContactForm } from '../api';

export function useContactForm() {
  const [partners, setPartners] = useState<PartnerItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchPartners();
        setPartners(data);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  const handleSubmit = async (formData: ContactFormData): Promise<boolean> => {
    setIsSubmitting(true);
    setStatusMessage(null);
    try {
      const res = await submitContactForm(formData);
      if (res.success) {
        setIsSuccess(true);
        setStatusMessage(res.message || 'Pesan Terkirim!');
        return true;
      } else {
        setIsSuccess(false);
        setStatusMessage(res.error || 'Gagal mengirim pesan.');
        return false;
      }
    } catch {
      setIsSuccess(false);
      setStatusMessage('Terjadi kesalahan jaringan.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetFormState = () => {
    setIsSuccess(false);
    setStatusMessage(null);
  };

  return {
    partners,
    isLoading,
    isSubmitting,
    isSuccess,
    statusMessage,
    handleSubmit,
    resetFormState,
  };
}

