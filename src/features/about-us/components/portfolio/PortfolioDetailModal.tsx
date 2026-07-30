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
  // Lock background scroll when modal is open & handle ESC key press
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0d0d0d] border border-white/15 shadow-2xl text-white select-none no-scrollbar flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup detail modal"
          className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all duration-300 shadow-lg group"
        >
          <CloseIcon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
        </button>

        {/* Hero Media Header */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-white/5 flex-shrink-0">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-center"
            priority
          />
          {/* Subtle Bottom Gradient Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent" />

          {/* Top Left Badges */}
          <div className="absolute bottom-4 left-4 sm:left-8 right-4 flex flex-wrap items-center gap-2 z-10">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-white bg-white/10 border border-white/20 backdrop-blur-md shadow-md">
              {item.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-gray-300 bg-black/60 border border-white/10 backdrop-blur-md">
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
              className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-wide leading-tight"
            >
              {item.title}
            </h2>

            {/* Quick Spec Pills */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-300 pt-1">
              {item.director && (
                <div className="flex items-center gap-1.5 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/10">
                  <UserIcon className="w-4 h-4 text-gray-400" />
                  <span>{item.director}</span>
                </div>
              )}
              {item.duration && (
                <div className="flex items-center gap-1.5 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/10">
                  <ClockIcon className="w-4 h-4 text-gray-400" />
                  <span>{item.duration}</span>
                </div>
              )}
            </div>
          </div>

          <hr className="border-white/10" />

          {/* Synopsis Narrative */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400">
              Sinopsis & Deskripsi Karya
            </h3>
            <p className="text-xs sm:text-sm md:text-base font-body text-gray-300 font-light leading-relaxed text-justify">
              {item.synopsis || item.description}
            </p>
          </div>

          {/* Tags Highlight */}
          {item.tags && item.tags.length > 0 && (
            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400">
                Karakteristik Karya
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer Action Buttons */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-white/20 text-xs font-bold font-mono uppercase tracking-wider text-gray-300 hover:text-white hover:bg-white/10 transition-all"
            >
              Tutup
            </button>
            {item.trailerUrl && (
              <a
                href={item.trailerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white text-black hover:bg-gray-200 text-xs font-bold font-mono uppercase tracking-wider transition-all shadow-lg hover:shadow-white/20"
              >
                <PlayIcon className="w-4 h-4 fill-black" />
                <span>Lihat Teaser / Detail Karya</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
