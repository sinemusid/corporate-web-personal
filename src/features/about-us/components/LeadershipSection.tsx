'use client';

import React from 'react';
import Image from 'next/image';
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

const MailIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ data }) => {
  const ceo = data.members[0];

  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'instagram':
        return <InstagramIcon className="w-4 h-4" />;
      case 'email':
        return <MailIcon className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-transparent py-16 sm:py-20 font-sans select-none px-4 sm:px-6 relative z-10">
      <div className="max-w-1200px mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center justify-center space-y-3 max-w-4xl mx-auto">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10">
            {data.heading}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wider font-heading leading-tight">
            {data.subheading}
          </h2>
        </div>

        {/* CEO Leadership 2-Column Layout */}
        {ceo && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start group">
            {/* Left Column: Photo */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-sm aspect-4/5 rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors shadow-2xl">
                <Image
                  src={ceo.photoUrl}
                  alt={ceo.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Bio & Info */}
            <div className="lg:col-span-7 space-y-6 flex flex-col text-left pt-1">
              <div className="space-y-2">
                <span className="text-xs font-mono text-gray-400 font-medium uppercase tracking-widest">
                  {ceo.role}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading uppercase tracking-wide group-hover:text-gray-200 transition-colors">
                  {ceo.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                {ceo.bio}
              </p>

              {/* Social Channels / Contact */}
              {ceo.socials && ceo.socials.length > 0 && (
                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  {ceo.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white hover:border-white/30 transition-all uppercase tracking-widest bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-lg border border-white/10"
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

