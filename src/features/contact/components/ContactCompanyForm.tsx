'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';
import { ContactCompanyData, ContactFormData } from '../types';

interface ContactCompanyFormProps {
  data: ContactCompanyData;
  onSubmit: (formData: ContactFormData) => Promise<boolean>;
  isSubmitting: boolean;
  isSuccess: boolean;
  statusMessage: string | null;
  onReset: () => void;
}

export const ContactCompanyForm: React.FC<ContactCompanyFormProps> = ({
  data,
  onSubmit,
  isSubmitting,
  isSuccess,
  statusMessage,
  onReset,
}) => {
  const { info, labels } = data;

  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setForm({ name: '', email: '', company: '', message: '' });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(form);
  };

  const getInfoIcon = (type: string) => {
    switch (type) {
      case 'email':
        return <Mail className="w-5 h-5 text-content-primary shrink-0" />;
      case 'phone':
        return <Phone className="w-5 h-5 text-content-primary shrink-0" />;
      case 'address':
      default:
        return <MapPin className="w-5 h-5 text-content-primary shrink-0" />;
    }
  };

  return (
    <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto my-12">
      {/* Left Column: Contact Info */}
      <div className="lg:col-span-6 space-y-6">
        <h2 className="text-4xl sm:text-5xl font-heading font-black text-content-primary uppercase tracking-tight">{labels.heading}</h2>
        <p className="text-sm font-body text-content-secondary leading-relaxed font-light">
          {labels.subheading}
        </p>

        <div className="space-y-4 pt-4 text-sm font-body text-content-secondary">
          {info.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3 p-3 rounded-xl bg-bg-elevated border border-borderToken-subtle">
              {getInfoIcon(item.type)}
              <div>
                <div className="text-[11px] text-content-tertiary font-mono">{item.label}</div>
                <div className="font-semibold text-content-primary font-body">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Form or Success */}
      <div className="lg:col-span-6 bg-bg-elevated border border-borderToken-subtle p-8 sm:p-10 rounded-3xl backdrop-blur-md min-h-[460px] flex flex-col justify-center transition-all duration-500 shadow-2xl relative overflow-hidden">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center text-center space-y-6 py-8">
            <div className="w-20 h-20 rounded-full bg-accent-subtle border border-borderToken-default flex items-center justify-center shadow-lg">
              <Check className="w-10 h-10 text-content-primary stroke-[2.5]" />
            </div>

            <div className="space-y-3 max-w-sm">
              <h3 className="text-2xl font-heading font-black text-content-primary tracking-tight">
                {labels.successTitle}
              </h3>
              <p className="text-xs sm:text-sm font-body text-content-secondary font-light leading-relaxed">
                {labels.successMessage}
              </p>
            </div>

            <button
              onClick={onReset}
              className="pt-4 text-xs font-body text-content-secondary hover:text-content-primary underline transition-colors"
            >
              {labels.sendAnotherButton}
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {statusMessage && (
              <div className="p-3 bg-accent-subtle border border-borderToken-default text-xs font-body text-content-primary rounded-lg">
                {statusMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-body font-semibold text-content-secondary mb-1.5">{labels.nameLabel}</label>
                <input
                  type="text"
                  placeholder={labels.namePlaceholder}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-bg-primary border border-borderToken-default rounded-xl px-4 py-3 text-sm font-body text-content-primary placeholder:text-content-muted focus:outline-none focus:border-borderToken-focus transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-body font-semibold text-content-secondary mb-1.5">{labels.emailLabel}</label>
                <input
                  type="email"
                  placeholder={labels.emailPlaceholder}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full bg-bg-primary border border-borderToken-default rounded-xl px-4 py-3 text-sm font-body text-content-primary placeholder:text-content-muted focus:outline-none focus:border-borderToken-focus transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-body font-semibold text-content-secondary mb-1.5">{labels.companyLabel}</label>
                <input
                  type="text"
                  placeholder={labels.companyPlaceholder}
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-bg-primary border border-borderToken-default rounded-xl px-4 py-3 text-sm font-body text-content-primary placeholder:text-content-muted focus:outline-none focus:border-borderToken-focus transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-body font-semibold text-content-secondary mb-1.5">{labels.messageLabel}</label>
                <textarea
                  rows={4}
                  placeholder={labels.messagePlaceholder}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full bg-bg-primary border border-borderToken-default rounded-xl px-4 py-3 text-sm font-body text-content-primary placeholder:text-content-muted focus:outline-none focus:border-borderToken-focus transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-accent-solid text-content-inverse font-body font-bold text-sm hover:bg-accent-solid-hover transition-colors disabled:opacity-50 mt-2 shadow-sm"
              >
                {isSubmitting ? labels.submittingButton : labels.submitButton}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
