import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Check, Send, Loader2, Sparkles } from 'lucide-react';
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
    <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch w-full max-w-6xl mx-auto my-0">
      {/* Left Column: Contact Info & Value Prop */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-6 p-6 sm:p-8 md:p-10 rounded-3xl bg-bg-elevated/40 border border-borderToken-subtle/80 backdrop-blur-xl relative overflow-hidden shadow-xl">
        {/* Subtle ambient light */}
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 bg-accent-subtle/20 rounded-full blur-3xl opacity-60" aria-hidden="true" />
        
        <div className="space-y-4 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-subtle/30 border border-borderToken-subtle/50 text-xs font-mono font-medium text-content-primary">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kemitraan Strategis</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-content-primary uppercase tracking-tight leading-tight">
            {labels.heading}
          </h2>

          <p className="text-xs sm:text-sm font-body text-content-secondary leading-relaxed font-light">
            {labels.subheading}
          </p>
        </div>

        {/* Contact info list */}
        <div className="space-y-3 z-10 pt-2">
          {info.map((item, idx) => (
            <div 
              key={idx} 
              className="group flex items-center space-x-3.5 p-3.5 sm:p-4 rounded-2xl bg-bg-primary/50 border border-borderToken-subtle/60 hover:border-content-primary/30 transition-all duration-300 hover:shadow-md"
            >
              <div className="p-2.5 sm:p-3 rounded-xl bg-bg-elevated border border-borderToken-subtle/80 group-hover:scale-105 transition-transform duration-200">
                {getInfoIcon(item.type)}
              </div>
              <div className="space-y-0.5">
                <div className="text-[10px] sm:text-[11px] text-content-tertiary font-mono uppercase tracking-wider">{item.label}</div>
                <div className="font-semibold text-xs sm:text-sm text-content-primary font-body">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Form Container */}
      <div className="lg:col-span-7 bg-bg-elevated/80 border border-borderToken-subtle/80 p-6 sm:p-8 md:p-10 rounded-3xl backdrop-blur-xl min-h-[460px] flex flex-col justify-center transition-all duration-500 shadow-2xl relative overflow-hidden">
        {/* Decorative corner glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-accent-subtle/15 rounded-full blur-3xl opacity-50" aria-hidden="true" />

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center text-center space-y-6 py-12 z-10">
            {/* Animated Glowing Checkmark Badge */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-24 h-24 rounded-full bg-emerald-500/20 animate-ping opacity-75" />
              <div className="relative w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_35px_rgba(16,185,129,0.35)] animate-success-circle">
                <Check className="w-10 h-10 text-emerald-400 stroke-[3] opacity-0 animate-checkmark-pop" />
              </div>
            </div>

            {/* Slide-Up Text Container */}
            <div className="space-y-3 max-w-sm opacity-0 animate-success-slide-up">
              <h3 className="text-2xl font-heading font-black text-content-primary tracking-tight">
                {labels.successTitle}
              </h3>
              <p className="text-xs sm:text-sm font-body text-content-secondary font-light leading-relaxed">
                {labels.successMessage}
              </p>
            </div>

            <button
              onClick={onReset}
              className="pt-2 text-xs font-body font-medium text-content-secondary hover:text-content-primary underline underline-offset-4 transition-colors opacity-0 animate-success-slide-up-delay"
            >
              {labels.sendAnotherButton}
            </button>
          </div>
        ) : (
          <div className="space-y-6 z-10">
            {statusMessage && (
              <div className="p-4 bg-accent-subtle/40 border border-borderToken-default text-xs font-body text-content-primary rounded-xl flex items-center gap-2">
                <span>{statusMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-body font-semibold uppercase tracking-wider text-content-secondary mb-2">
                    {labels.nameLabel} <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder={labels.namePlaceholder}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full bg-bg-primary/70 border border-borderToken-subtle focus:border-content-primary/60 rounded-xl px-4 py-3.5 text-sm font-body text-content-primary placeholder:text-content-muted focus:outline-none focus:ring-1 focus:ring-content-primary/30 transition-all duration-200 shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-body font-semibold uppercase tracking-wider text-content-secondary mb-2">
                    {labels.emailLabel} <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={labels.emailPlaceholder}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full bg-bg-primary/70 border border-borderToken-subtle focus:border-content-primary/60 rounded-xl px-4 py-3.5 text-sm font-body text-content-primary placeholder:text-content-muted focus:outline-none focus:ring-1 focus:ring-content-primary/30 transition-all duration-200 shadow-inner"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-body font-semibold uppercase tracking-wider text-content-secondary mb-2">
                  {labels.companyLabel}
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder={labels.companyPlaceholder}
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-bg-primary/70 border border-borderToken-subtle focus:border-content-primary/60 rounded-xl px-4 py-3.5 text-sm font-body text-content-primary placeholder:text-content-muted focus:outline-none focus:ring-1 focus:ring-content-primary/30 transition-all duration-200 shadow-inner"
                />
              </div>

              <div>
                <label className="block text-xs font-body font-semibold uppercase tracking-wider text-content-secondary mb-2">
                  {labels.messageLabel} <span className="text-rose-400">*</span>
                </label>
                <textarea
                  rows={4}
                  name="message"
                  placeholder={labels.messagePlaceholder}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full bg-bg-primary/70 border border-borderToken-subtle focus:border-content-primary/60 rounded-xl px-4 py-3.5 text-sm font-body text-content-primary placeholder:text-content-muted focus:outline-none focus:ring-1 focus:ring-content-primary/30 transition-all duration-200 resize-none shadow-inner"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-content-primary text-bg-primary font-body font-bold text-sm border border-borderToken-subtle/40 hover:border-content-primary/80 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-xl disabled:opacity-50 flex items-center justify-center gap-2 mt-4 group/submit"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{labels.submittingButton}</span>
                  </>
                ) : (
                  <>
                    <span>{labels.submitButton}</span>
                    <Send className="w-4 h-4 transition-transform duration-200 group-hover/submit:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
