'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { ContactFormData } from '../types';

interface ContactCompanyFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  isSubmitting: boolean;
  statusMessage: string | null;
}

export const ContactCompanyForm: React.FC<ContactCompanyFormProps> = ({
  onSubmit,
  isSubmitting,
  statusMessage,
}) => {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Form Card */}
      <Card className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">Hubungi Sinemus Indonesia</h3>
          <p className="text-xs text-zinc-400">Silakan kirimkan pertanyaan, proposal, atau peluang kolaborasi.</p>
        </div>

        {statusMessage && (
          <div className="p-3 bg-red-950/60 border border-red-800 text-xs text-red-300 rounded-lg">
            {statusMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Nama Lengkap"
            placeholder="Masukkan nama Anda"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <Input
            label="Alamat Email"
            type="email"
            placeholder="email@perusahaan.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <Input
            label="Perusahaan / Organisasi (Opsional)"
            placeholder="Nama perusahaan"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
          <Textarea
            label="Pesan Anda"
            placeholder="Tuliskan detail pesan atau rencana kolaborasi..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
          </Button>
        </form>
      </Card>

      {/* Location & Office Info */}
      <div className="space-y-8 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 bg-red-600/10 text-red-500 rounded-full text-xs font-semibold uppercase tracking-widest border border-red-600/20">
            Headquarter & Studio
          </div>
          <h3 className="text-3xl font-extrabold text-white">Kantor Utama & Studio Lab</h3>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Jakarta South Creative Hub, Gedung Sinemus Media Lt. 3, DKI Jakarta, Indonesia.
          </p>

          <div className="pt-4 space-y-3 text-xs text-zinc-400">
            <div>
              <span className="text-zinc-500 font-mono block">JAM OPERASIONAL</span>
              <span className="text-zinc-200">Senin - Jumat: 09.00 - 18.00 WIB</span>
            </div>
            <div>
              <span className="text-zinc-500 font-mono block">EMAIL DIREKTUR</span>
              <span className="text-zinc-200">office@sinemus.co.id</span>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="aspect-video w-full rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-600">
          [ Google Maps Embed Studio Sinemus ]
        </div>
      </div>
    </div>
  );
};
