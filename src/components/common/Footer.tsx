import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

// Navigation Data Sets
const ECOSYSTEM_UNITS = [
  { label: 'Sinemus Production', href: '/units/production', desc: 'Produksi Film & Visual' },
  { label: 'Sinemus Screen', href: '/units/screen', desc: 'Eksibisi & Digital Screening' },
  { label: 'Sinemus Academy', href: '/units/academy', desc: 'Inkubasi & Workshop Perfilman' },
  { label: 'Sinemus Community', href: '/units/community', desc: 'Jejaring Sineas & Kolaborasi' },
];

const CORPORATE_LINKS = [
  { label: 'Tentang Perusahaan', href: '/about' },
  { label: 'Struktur Organisasi', href: '/about#design-structure' },
  { label: 'Meet the Founder', href: '/about#founder' },
  { label: 'Mitra & Kolaborator', href: '/collaborator' },
  { label: 'Hubungi Kami', href: '/contact' },
];

// Clean Social Media SVG Icons
const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.89-2.88 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.67 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.33V9.05a8.27 8.27 0 0 0 4.82 1.54V7.15a4.85 4.85 0 0 1-.91-.46z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-400 font-body border-t border-slate-800/80 overflow-hidden">
      {/* Subtle Top Ambient Gradient Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Corporate Statement (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
              aria-label="Kembali ke Beranda Sinemus Indonesia"
            >
              <div className="relative w-10 h-10 rounded-xl bg-slate-900/90 border border-white/10 p-1.5 flex items-center justify-center shadow-md shadow-black/40 group-hover:border-blue-500/40 group-hover:scale-105 transition-all duration-300">
                <Image
                  src="/images/sinemus-icon-white.png"
                  alt="Sinemus Icon"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-heading font-bold text-white tracking-wide group-hover:text-blue-300 transition-colors">
                  SINEMUS INDONESIA
                </span>
                <span className="text-[11px] font-mono tracking-wider text-slate-400">
                  {siteConfig.legalName}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed font-light pr-2">
              Ekosistem perfilman dan solusi kreatif digital terintegrasi yang memberdayakan industri sinema, talenta, dan karya independen di Indonesia.
            </p>
          </div>

          {/* Column 2: 4 Pilar Unit Bisnis (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-white">
              Pilar Ekosistem
            </h3>
            <ul className="space-y-3 text-sm">
              {ECOSYSTEM_UNITS.map((unit) => (
                <li key={unit.href}>
                  <Link
                    href={unit.href}
                    className="group block transition-colors hover:text-white"
                  >
                    <div className="font-medium text-slate-300 group-hover:text-blue-400 flex items-center gap-1.5 transition-colors">
                      <span>{unit.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
                    </div>
                    <span className="text-xs text-slate-400 font-light block">
                      {unit.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Korporasi & Navigasi (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-white">
              Korporasi
            </h3>
            <ul className="space-y-2.5 text-sm">
              {CORPORATE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Kontak Resmi & Kanal Media (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-white">
              Kontak &amp; Jejaring
            </h3>
            
            <address className="not-italic space-y-3 text-sm">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400 leading-snug">
                  {siteConfig.contact.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-xs text-slate-300 hover:text-blue-300 transition-colors truncate"
                  title={siteConfig.contact.email}
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-300 hover:text-blue-300 transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </address>

            {/* Social Media Channels */}
            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                Kanal Resmi
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Sinemus Indonesia"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-slate-850 flex items-center justify-center transition-all duration-200 shadow-sm"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Sinemus Indonesia"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-slate-850 flex items-center justify-center transition-all duration-200 shadow-sm"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.links.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Sinemus Indonesia"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-slate-850 flex items-center justify-center transition-all duration-200 shadow-sm"
                >
                  <TikTokIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Compliance & Legal Bar */}
      <div className="border-t border-slate-900 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-400">
          <div className="font-mono text-[11px] tracking-wide">
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </div>
          <p className="text-[11px] text-slate-400 font-sans tracking-wide">
            Ekosistem Sinema &amp; Solusi Digital Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

