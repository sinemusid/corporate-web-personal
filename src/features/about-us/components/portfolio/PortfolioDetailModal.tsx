'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { PortfolioItemData } from '../../types';

interface PortfolioDetailModalProps {
  item: PortfolioItemData | null;
  isOpen: boolean;
  onClose: () => void;
}

const CloseIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PlayIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ClockIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
  </svg>
);

const UserIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export const PortfolioDetailModal: React.FC<PortfolioDetailModalProps> = ({ item, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('modal-open');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 shadow-2xl text-slate-900 select-none no-scrollbar flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup detail modal"
          className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-slate-100 text-slate-700 border border-slate-200 backdrop-blur-md transition-all duration-200 shadow-md group cursor-pointer"
        >
          <CloseIcon className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" />
        </button>

        {/* Hero Media Header */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-slate-100 flex-shrink-0">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-center"
            priority
          />
          {/* Subtle Bottom Gradient Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />

          {/* Top Left Badges */}
          <div className="absolute bottom-4 left-4 sm:left-8 right-4 flex flex-wrap items-center gap-2 z-10">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-200 shadow-xs">
              {item.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-700 bg-white/90 border border-slate-200 backdrop-blur-md">
              {item.year}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 space-y-6 flex-grow">
          {/* Title & Key Specs */}
          <div className="space-y-3">
            <h2
              id="portfolio-modal-title"
              className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 uppercase tracking-wide leading-tight"
            >
              {item.title}
            </h2>

            {/* Quick Spec Pills */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 pt-1">
              {item.director && (
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <UserIcon className="w-4 h-4 text-blue-600" />
                  <span>{item.director}</span>
                </div>
              )}
              {item.duration && (
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <ClockIcon className="w-4 h-4 text-blue-600" />
                  <span>{item.duration}</span>
                </div>
              )}
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Synopsis Narrative */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
              Sinopsis &amp; Deskripsi Karya
            </h3>
            <p className="text-xs sm:text-sm md:text-base font-body text-slate-700 font-normal leading-relaxed text-justify">
              {item.synopsis || item.description}
            </p>
          </div>

          {/* Tags Highlight */}
          {item.tags && item.tags.length > 0 && (
            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
                Karakteristik Karya
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer Action Buttons */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-slate-200 text-xs font-bold font-mono uppercase tracking-wider text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
            >
              Tutup
            </button>
            {item.trailerUrl && (
              <a
                href={item.trailerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 text-xs font-bold font-mono uppercase tracking-wider transition-all shadow-md shadow-blue-600/25 cursor-pointer"
              >
                <PlayIcon className="w-4 h-4 fill-white" />
                <span>Lihat Teaser / Detail Karya</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


