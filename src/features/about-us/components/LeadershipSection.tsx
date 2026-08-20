import React from 'react';
import Image from 'next/image';
import { Mail, ExternalLink } from 'lucide-react';
import { LeadershipData } from '../types';

interface LeadershipSectionProps {
  data: LeadershipData;
}

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ data }) => {
  const ceo = data.members[0];

  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'instagram':
        return <InstagramIcon className="w-4 h-4" />;
      case 'email':
        return <Mail className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section className="w-full bg-transparent py-10 sm:py-16 select-none px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tight font-heading leading-tight">
            {data.subheading || data.heading}
          </h2>
        </div>

        {/* CEO Leadership Executive Card */}
        {ceo && (
          <div className="relative rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-10 md:p-12 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group overflow-hidden">
            {/* Left Column: Portrait Framing with Viewfinder Accents */}
            <div className="lg:col-span-5 w-full flex justify-center">
              {/* ✅ FIX: aspect-[4/5] (kompatibel Tailwind v3/v4), position relative wajib untuk fill */}
              <div className="relative w-full max-w-xs sm:max-w-sm aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group-hover:border-blue-500 transition-all duration-500 shadow-md group-hover:shadow-2xl">
                {/* Photo */}
                <Image
                  src={ceo.photoUrl}
                  alt={`Portrait ${ceo.name} — ${ceo.role}`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAAH/8QAIBAAAgIBBQEBAAAAAAAAAAAAAAECAwQFERIhMf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDK2drjpvZVlRXGovV9GlRnPf5ZHuAAAAAAAAAH/9k="
                />
                {/* Subtle Viewfinder Framing Marks in Corners */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/60 pointer-events-none" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/60 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/60 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/60 pointer-events-none" />
              </div>
            </div>


            {/* Right Column: Executive Typography & Bio */}
            <div className="lg:col-span-7 space-y-6 flex flex-col text-left">
              {/* Executive Role & Name */}
              <div className="space-y-2 border-b border-slate-100 pb-5">
                <p className="text-xs sm:text-sm font-mono font-bold text-blue-600 uppercase tracking-widest">
                  {ceo.role}
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading uppercase tracking-tight leading-tight">
                  {ceo.name}
                </h3>
              </div>

              {/* Bio Narrative */}
              <p className="text-sm sm:text-base text-slate-600 font-body font-normal leading-relaxed text-justify sm:text-left">
                {ceo.bio}
              </p>

              {/* Core Competency Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-50 border border-slate-200/80 px-3 py-1 rounded-lg">
                  #ManajemenProduksi
                </span>
                <span className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-50 border border-slate-200/80 px-3 py-1 rounded-lg">
                  #Penyutradaraan
                </span>
                <span className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-50 border border-slate-200/80 px-3 py-1 rounded-lg">
                  #Pascaproduksi
                </span>
              </div>

              {/* Social Channels / Direct Contact */}
              {ceo.socials && ceo.socials.length > 0 && (
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                  {ceo.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-800 hover:text-white bg-slate-50 hover:bg-slate-900 transition-all duration-300 uppercase tracking-widest px-4 py-2.5 rounded-full border border-slate-200 shadow-xs hover:shadow-md cursor-pointer"
                    >
                      {getSocialIcon(social.type)}
                      <span>{social.label || social.type}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
