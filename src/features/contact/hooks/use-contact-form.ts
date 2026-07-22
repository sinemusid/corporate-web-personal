'use client';

import { useState, useEffect } from 'react';
import { PartnerItem, ContactFormData } from '../types';
import { fetchPartners, submitContactForm } from '../api';

export function useContactForm() {
  const [partners, setPartners] = useState<PartnerItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    setStatusMessage(null);
    try {
      const res = await submitContactForm(formData);
      if (res.success) {
        setStatusMessage(res.message || 'Pesan Anda berhasil dikirim!');
      } else {
        setStatusMessage(res.error || 'Gagal mengirim pesan.');
      }
    } catch {
      setStatusMessage('Terjadi kesalahan jaringan.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return { partners, isLoading, isSubmitting, statusMessage, handleSubmit };
}
