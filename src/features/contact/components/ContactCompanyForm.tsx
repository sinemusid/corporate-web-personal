'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Globe, Video, Share2, Check } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactCompanyFormProps {
  onSubmit: (data: ContactFormData) => Promise<boolean>;
  isSubmitting: boolean;
  isSuccess?: boolean;
  statusMessage: string | null;
  onReset?: () => void;
}

export const ContactCompanyForm: React.FC<ContactCompanyFormProps> = ({
  onSubmit,
  isSubmitting,
  isSuccess: externalIsSuccess,
  statusMessage,
  onReset,
}) => {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Sync externalIsSuccess state if passed
  useEffect(() => {
    if (externalIsSuccess) {
      setSubmittedSuccess(true);
    }
  }, [externalIsSuccess]);

  // Auto-reset state back to initial form design after 4 seconds
  useEffect(() => {
    if (submittedSuccess) {
      const timer = setTimeout(() => {
        setSubmittedSuccess(false);
        setForm({ name: '', email: '', company: '', message: '' });
        if (onReset) onReset();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [submittedSuccess, onReset]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await onSubmit(form);
    if (success) {
      setSubmittedSuccess(true);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start my-12">
      {/* Left Column: Contact Info */}
      <div className="lg:col-span-6 space-y-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Contact Us</h2>
        <p className="text-sm text-zinc-300 leading-relaxed max-w-md">
          Punya pertanyaan atau ingin berkolaborasi? Hubungi kami melalui form atau kontak di bawah ini.
        </p>

        <div className="space-y-4 pt-4 text-sm text-zinc-300">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-amber-400 shrink-0" />
            <span>info@sinemus.co.id</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-amber-400 shrink-0" />
            <span>+62 812 3456 7890</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
            <span>Jakarta, Indonesia</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 pt-4 text-zinc-400">
          <a href="#" className="hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Video className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Share2 className="w-5 h-5" /></a>
        </div>
      </div>

      {/* Right Column: Form Box or Success Animation matching Image 2 */}
      <div className="lg:col-span-6 bg-[#0b1323] border border-zinc-800/80 p-8 sm:p-10 rounded-3xl backdrop-blur-md min-h-[460px] flex flex-col justify-center transition-all duration-500 shadow-2xl relative overflow-hidden">
        {submittedSuccess ? (
          /* Success Animation Card (Matching Image 2) */
          <div className="flex flex-col items-center justify-center text-center space-y-6 py-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="w-20 h-20 rounded-full bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center shadow-lg shadow-emerald-950/50 animate-bounce-short">
              <Check className="w-10 h-10 text-emerald-400 stroke-[2.5]" />
            </div>

            <div className="space-y-3 max-w-sm">
              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                Pesan Terkirim!
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                Terima kasih telah menghubungi. Saya akan segera membalas pesan Anda.
              </p>
            </div>

            <button
              onClick={() => {
                setSubmittedSuccess(false);
                setForm({ name: '', email: '', company: '', message: '' });
                if (onReset) onReset();
              }}
              className="pt-4 text-xs text-zinc-400 hover:text-white underline transition-colors"
            >
              Kirim Pesan Lainnya &rarr;
            </button>
          </div>
        ) : (
          /* Standard Form Box (Matching Image 1) */
          <div className="space-y-6 animate-in fade-in duration-300">
            {statusMessage && !submittedSuccess && (
              <div className="p-3 bg-red-950/60 border border-red-800 text-xs text-red-300 rounded-lg">
                {statusMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">Nama Lengkap</label>
                <input
                  type="text"
                  placeholder="Nama Anda"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="email@domain.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">Subjek</label>
                <input
                  type="text"
                  placeholder="Subjek Pesan / Pertanyaan"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">Pesan</label>
                <textarea
                  rows={4}
                  placeholder="Tuliskan pesan Anda di sini..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors disabled:opacity-50 mt-2 shadow-lg"
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan Anda'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};


